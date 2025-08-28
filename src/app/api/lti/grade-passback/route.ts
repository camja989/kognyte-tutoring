import { NextRequest, NextResponse } from 'next/server'
import { LTILaunchData } from '@/lib/lti/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionToken, score, maxScore, resourceLinkId } = body

    // Decode the LTI session
    let sessionData: LTILaunchData
    try {
      sessionData = JSON.parse(Buffer.from(sessionToken, 'base64url').toString())
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid session token' },
        { status: 400 }
      )
    }

    // Calculate grade as percentage
    const grade = (score / maxScore) * 100

    // For LTI 1.1 grade passback, we need to construct an XML payload
    // and send it to the lis_outcome_service_url if available
    if (sessionData.lis_outcome_service_url && sessionData.lis_result_sourcedid) {
      const gradePassbackXML = `<?xml version="1.0" encoding="UTF-8"?>
<imsx_POXEnvelopeRequest xmlns="http://www.imsglobal.org/services/ltiv1p1/xsd/imsoms_v1p0">
  <imsx_POXHeader>
    <imsx_POXRequestHeaderInfo>
      <imsx_version>V1.0</imsx_version>
      <imsx_messageIdentifier>${Date.now()}</imsx_messageIdentifier>
    </imsx_POXRequestHeaderInfo>
  </imsx_POXHeader>
  <imsx_POXBody>
    <replaceResultRequest>
      <resultRecord>
        <sourcedGUID>
          <sourcedId>${sessionData.lis_result_sourcedid}</sourcedId>
        </sourcedGUID>
        <result>
          <resultScore>
            <language>en</language>
            <textString>${(grade / 100).toFixed(2)}</textString>
          </resultScore>
        </result>
      </resultRecord>
    </replaceResultRequest>
  </imsx_POXBody>
</imsx_POXEnvelopeRequest>`

      // Send the grade back to Moodle
      try {
        const response = await fetch(sessionData.lis_outcome_service_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/xml',
            'Authorization': `OAuth realm="", oauth_consumer_key="${sessionData.oauth_consumer_key}", oauth_nonce="${generateNonce()}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_version="1.0"`
          },
          body: gradePassbackXML
        })

        if (response.ok) {
          console.log('Grade successfully sent to Moodle')
          return NextResponse.json({
            success: true,
            message: 'Grade sent to Moodle successfully',
            grade: grade,
            score: score,
            maxScore: maxScore
          })
        } else {
          console.error('Failed to send grade to Moodle:', response.statusText)
          // Don't fail the entire request if grade passback fails
          return NextResponse.json({
            success: true,
            message: 'Score recorded locally (Moodle sync failed)',
            grade: grade,
            score: score,
            maxScore: maxScore,
            warning: 'Could not sync with Moodle gradebook'
          })
        }
      } catch (fetchError) {
        console.error('Error sending grade to Moodle:', fetchError)
        return NextResponse.json({
          success: true,
          message: 'Score recorded locally (Moodle sync failed)',
          grade: grade,
          score: score,
          maxScore: maxScore,
          warning: 'Could not sync with Moodle gradebook'
        })
      }
    } else {
      // No grade passback URL available, just acknowledge the score
      console.log('No grade passback URL available, score recorded locally only')
      return NextResponse.json({
        success: true,
        message: 'Score recorded (no Moodle sync configured)',
        grade: grade,
        score: score,
        maxScore: maxScore
      })
    }

  } catch (error) {
    console.error('Grade passback error:', error)
    return NextResponse.json(
      { error: 'Failed to process grade passback' },
      { status: 500 }
    )
  }
}

function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}
