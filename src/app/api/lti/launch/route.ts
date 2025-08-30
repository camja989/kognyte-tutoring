import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { LTIOAuth } from '@/lib/lti/oauth'
import { LTILaunchData, LTI_ROLES, HSFY_SUBJECTS } from '@/lib/lti/types'

// LTI Consumer configurations for different institutions
const LTI_CONSUMERS = {
  'otago.ac.nz': {
    consumerKey: 'kognyte_hsfy_digitalocean_2024',
    consumerSecret: process.env.LTI_OTAGO_SECRET || 'kognyte-do-secret-2024',
    institutionName: 'University of Otago'
  },
  'dev.moodle': {
    consumerKey: 'kognyte-dev',
    consumerSecret: 'dev-secret-key-123',
    institutionName: 'Development Moodle'
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data from Moodle LTI launch
    const formData = await request.formData()
    const ltiData: Partial<LTILaunchData> = {}
    
    // Convert FormData to object
    for (const [key, value] of formData.entries()) {
      ltiData[key as keyof LTILaunchData] = value.toString()
    }

    console.log('LTI Launch Request:', {
      messageType: ltiData.lti_message_type,
      version: ltiData.lti_version,
      userId: ltiData.user_id,
      roles: ltiData.roles,
      consumerKey: ltiData.oauth_consumer_key,
      resourceLinkId: ltiData.resource_link_id
    })

    // Validate required LTI parameters
    if (!isValidLTILaunch(ltiData)) {
      return NextResponse.json(
        { error: 'Invalid LTI launch parameters' },
        { status: 400 }
      )
    }

    // Find consumer configuration
    const consumer = findConsumerByKey(ltiData.oauth_consumer_key!)
    if (!consumer) {
      return NextResponse.json(
        { error: 'Unknown consumer' },
        { status: 401 }
      )
    }

    // Validate OAuth signature
    const oauth = new LTIOAuth(consumer.consumerKey, consumer.consumerSecret)
    const url = new URL('/api/lti/launch', request.url).toString()
    
    // Convert ltiData to Record<string, string> for OAuth validation
    const params: Record<string, string> = {}
    Object.entries(ltiData).forEach(([key, value]) => {
      if (value !== undefined) {
        params[key] = value.toString()
      }
    })

    const isValidSignature = oauth.validateSignature('POST', url, params)
    const isValidTimestamp = oauth.validateTimestamp(ltiData.oauth_timestamp!)

    if (!isValidSignature) {
      console.error('Invalid OAuth signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    if (!isValidTimestamp) {
      console.error('Invalid timestamp')
      return NextResponse.json(
        { error: 'Request expired' },
        { status: 401 }
      )
    }

    // Extract user roles
    const userRoles = parseUserRoles(ltiData.roles!)
    
    // Determine HSFY subject from custom parameters or context
    const subject = determineSubject(ltiData)
    
    // Create session token
    const sessionToken = createSessionToken({
      userId: ltiData.user_id!,
      roles: userRoles,
      resourceLinkId: ltiData.resource_link_id!,
      contextId: ltiData.context_id!,
      consumerKey: consumer.consumerKey,
      returnUrl: ltiData.launch_presentation_return_url,
      subject: subject
    })

    // Redirect to appropriate Kognyte page based on role and subject
    const redirectUrl = getRedirectUrl(userRoles, subject, sessionToken)
    
    return NextResponse.redirect(new URL(redirectUrl, request.url))

  } catch (error) {
    console.error('LTI Launch Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function isValidLTILaunch(data: Partial<LTILaunchData>): boolean {
  const required = [
    'lti_message_type',
    'lti_version', 
    'user_id',
    'roles',
    'resource_link_id',
    'oauth_consumer_key',
    'oauth_signature',
    'oauth_timestamp',
    'oauth_nonce'
  ]

  return required.every(field => data[field as keyof LTILaunchData])
}

function findConsumerByKey(consumerKey: string) {
  return Object.values(LTI_CONSUMERS).find(c => c.consumerKey === consumerKey)
}

function parseUserRoles(rolesString: string): string[] {
  return rolesString
    .split(',')
    .map(role => role.trim())
    .filter(role => (Object.values(LTI_ROLES) as string[]).includes(role))
}

function determineSubject(ltiData: Partial<LTILaunchData>): string | null {
  // Check custom subject parameter first
  if (ltiData.custom_subject) {
    const subject = HSFY_SUBJECTS.find(s => 
      s.code.toLowerCase() === ltiData.custom_subject!.toLowerCase()
    )
    return subject?.code || null
  }

  // Try to extract from context title or course code
  const contextTitle = ltiData.context_title?.toLowerCase()
  if (contextTitle) {
    for (const subject of HSFY_SUBJECTS) {
      if (contextTitle.includes(subject.code.toLowerCase()) ||
          contextTitle.includes(subject.name.toLowerCase())) {
        return subject.code
      }
    }
  }

  return null // Will show subject selection page
}

function createSessionToken(sessionData: {
  userId: string
  roles: string[]
  resourceLinkId: string
  contextId: string
  consumerKey: string
  returnUrl?: string
  subject?: string | null
}): string {
  // In production, this should be a signed JWT or stored in database
  const session = {
    ...sessionData,
    timestamp: Date.now(),
    sessionId: crypto.randomUUID()
  }
  
  // For now, encode as base64 (in production, use proper JWT)
  return Buffer.from(JSON.stringify(session)).toString('base64url')
}

function getRedirectUrl(roles: string[], subject: string | null, sessionToken: string): string {
  const baseParams = `?lti_session=${sessionToken}`
  
  // Instructors go to analytics/management dashboard
  if (roles.includes(LTI_ROLES.INSTRUCTOR) || roles.includes(LTI_ROLES.ADMIN)) {
    return `/lti/instructor${baseParams}`
  }
  
  // Students go to question bank
  if (subject) {
    return `/lti/questions/${subject.toLowerCase()}${baseParams}`
  } else {
    return `/lti/subject-selection${baseParams}`
  }
}

// Handle GET requests for testing
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Kognyte LTI Launch Endpoint',
    version: '1.0',
    supportedVersions: ['LTI-1p0', 'LTI-1p1'],
    subjects: HSFY_SUBJECTS.map(s => ({
      code: s.code,
      name: s.name,
      questionCount: s.questionCount
    }))
  })
}
