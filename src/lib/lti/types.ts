// LTI Integration Types for JoltVolt Moodle Integration

export interface LTILaunchData {
  // Basic LTI Parameters
  lti_message_type: string
  lti_version: string
  resource_link_id: string
  
  // User Information
  user_id: string
  user_image?: string
  roles: string
  
  // Consumer Information
  tool_consumer_instance_guid: string
  tool_consumer_instance_name?: string
  tool_consumer_instance_description?: string
  
  // Context Information
  context_id: string
  context_type?: string
  context_title?: string
  context_label?: string
  
  // Launch Information
  launch_presentation_return_url?: string
  launch_presentation_document_target?: string
  launch_presentation_width?: string
  launch_presentation_height?: string
  
  // Custom Parameters
  custom_subject?: string
  custom_course_code?: string
  custom_assignment_id?: string
  
  // Grade Passback
  lis_outcome_service_url?: string
  lis_result_sourcedid?: string
  
  // OAuth Parameters
  oauth_consumer_key: string
  oauth_signature_method: string
  oauth_timestamp: string
  oauth_nonce: string
  oauth_version: string
  oauth_signature: string
}

export interface MoodleUser {
  id: string
  moodleUserId: string
  firstName?: string
  lastName?: string
  email?: string
  roles: string[]
  contextId: string
  resourceLinkId: string
  lastAccessed: Date
}

export interface LTISession {
  sessionId: string
  userId: string
  resourceLinkId: string
  contextId: string
  consumerKey: string
  roles: string[]
  returnUrl?: string
  gradePassbackUrl?: string
  sourcedId?: string
  customParams: Record<string, string>
  createdAt: Date
  expiresAt: Date
}

export interface GradePassback {
  userId: string
  resourceLinkId: string
  score: number
  maxScore: number
  timestamp: Date
  status: 'pending' | 'sent' | 'failed'
}

export interface LTIConfig {
  consumerKey: string
  consumerSecret: string
  toolUrl: string
  toolTitle: string
  toolDescription: string
  iconUrl?: string
  secureIconUrl?: string
}

export interface HSFYSubject {
  code: string
  name: string
  description: string
  questionCount: number
  topics: string[]
}

export const HSFY_SUBJECTS: HSFYSubject[] = [
  {
    code: 'BIOL111',
    name: 'Biology for Health Sciences',
    description: 'Fundamental biological concepts for health science students',
    questionCount: 250,
    topics: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology', 'Human Biology']
  },
  {
    code: 'CHEM111', 
    name: 'Chemistry for Health Sciences',
    description: 'Chemical principles applied to health sciences',
    questionCount: 200,
    topics: ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry', 'Biochemistry']
  },
  {
    code: 'PHSI111',
    name: 'Physics for Health Sciences', 
    description: 'Physics principles relevant to health sciences',
    questionCount: 180,
    topics: ['Mechanics', 'Thermodynamics', 'Waves', 'Electricity', 'Medical Physics']
  },
  {
    code: 'HSCI111',
    name: 'Introduction to Health Sciences',
    description: 'Foundational concepts in health sciences',
    questionCount: 150,
    topics: ['Health Systems', 'Epidemiology', 'Research Methods', 'Ethics', 'Public Health']
  }
]

export const LTI_ROLES = {
  LEARNER: 'Learner',
  INSTRUCTOR: 'Instructor',
  CONTENT_DEVELOPER: 'ContentDeveloper',
  TEACHING_ASSISTANT: 'TeachingAssistant',
  ADMIN: 'Administrator'
} as const

export type LTIRole = typeof LTI_ROLES[keyof typeof LTI_ROLES]
