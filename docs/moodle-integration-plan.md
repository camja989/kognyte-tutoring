# Moodle Integration Plan for JoltVolt

## Overview
This document outlines the strategy for integrating JoltVolt with Moodle LMS systems, specifically targeting University of Otago's HSFY courses.

## Phase 1: Research & Planning (Week 1-2)

### University of Otago Moodle Investigation
- [ ] Contact University of Otago IT department about LTI integration possibilities
- [ ] Research their current Moodle version and supported LTI standards
- [ ] Analyze existing third-party integrations they support
- [ ] Understand their data privacy and security requirements

### Technical Requirements Analysis
- [ ] Study Moodle LTI (Learning Tools Interoperability) standards
- [ ] Review Moodle External Tool configuration options
- [ ] Understand grade passback mechanisms
- [ ] Research single sign-on (SSO) integration options

## Phase 2: Demo Integration Setup (Week 3-4)

### LTI Tool Development
```javascript
// Basic LTI integration structure
const ltiConfig = {
  tool_consumer_instance_guid: 'otago.ac.nz',
  resource_link_id: 'hsfy-question-bank',
  user_id: 'student_id',
  roles: 'Learner',
  launch_presentation_return_url: 'https://moodle.otago.ac.nz/...'
}
```

### Key Integration Features
1. **Single Sign-On (SSO)**
   - Automatic user authentication from Moodle
   - No separate login required for students
   - Role-based access (Student, Instructor, Admin)

2. **Grade Passback**
   - Automatically send quiz scores back to Moodle gradebook
   - Support for both formative and summative assessments
   - Configurable grading scales

3. **Deep Linking**
   - Allow instructors to embed specific question sets
   - Direct links to subject-specific content
   - Custom assignments within Moodle courses

## Phase 3: Technical Implementation (Week 5-8)

### Backend Requirements
```typescript
// LTI Authentication endpoint
app.post('/api/lti/launch', async (req, res) => {
  const { oauth_consumer_key, user_id, resource_link_id } = req.body
  
  // Validate LTI request
  const isValid = await validateLTIRequest(req.body)
  
  if (isValid) {
    // Create/update user session
    const user = await findOrCreateUser(user_id)
    // Redirect to appropriate content
    res.redirect(`/app/questions/${resource_link_id}`)
  }
})

// Grade passback endpoint
app.post('/api/lti/grades', async (req, res) => {
  const { user_id, score, resource_link_id } = req.body
  
  // Send grade back to Moodle
  await sendGradeToMoodle({
    userId: user_id,
    score: score,
    maxScore: 100,
    resourceLinkId: resource_link_id
  })
})
```

### Frontend Components
```tsx
// LTI-embedded question component
const LTIQuestionBank = ({ ltiData }) => {
  const { user_id, resource_link_id, custom_subject } = ltiData
  
  return (
    <div className="lti-embedded">
      <QuestionBank 
        subject={custom_subject}
        userId={user_id}
        onScoreUpdate={(score) => sendScoreToMoodle(score, resource_link_id)}
      />
    </div>
  )
}
```

### Security Implementation
- OAuth 1.0a signature validation
- SSL/TLS encryption for all communications
- User data privacy compliance (FERPA, local regulations)
- Secure session management

## Phase 4: Pilot Program (Week 9-12)

### Target Courses for Pilot
1. **BIOL 111** - Biology for Health Sciences
2. **CHEM 111** - Chemistry for Health Sciences  
3. **PHSI 111** - Physics for Health Sciences
4. **HSCI 111** - Introduction to Health Sciences

### Pilot Metrics
- Student engagement rates
- Quiz completion rates
- Grade improvement correlation
- User feedback scores
- Technical performance metrics

### Instructor Training
- LTI setup guide for course coordinators
- Best practices for question bank usage
- Analytics and reporting features
- Troubleshooting common issues

## Phase 5: Full Deployment (Week 13-16)

### University Partnership
- Formal agreement with University of Otago
- Official LTI tool certification
- Listed in Moodle App Directory
- Support documentation and training materials

### Scaling Considerations
- Load balancing for high concurrent usage
- Database optimization for large question banks
- CDN integration for global performance
- Monitoring and alerting systems

## Technical Specifications

### Moodle LTI Configuration
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cartridge_basiclti_link>
  <blti:title>JoltVolt HSFY Question Bank</blti:title>
  <blti:description>Interactive question bank for Health Sciences First Year</blti:description>
  <blti:launch_url>https://joltvolt.com/api/lti/launch</blti:launch_url>
  <blti:secure_launch_url>https://joltvolt.com/api/lti/launch</blti:secure_launch_url>
  <blti:vendor>
    <lticp:code>joltvolt</lticp:code>
    <lticp:name>JoltVolt</lticp:name>
  </blti:vendor>
</cartridge_basiclti_link>
```

### Required LTI Parameters
- `oauth_consumer_key`: Unique identifier for the institution
- `user_id`: Moodle user identifier
- `resource_link_id`: Specific course/activity identifier
- `roles`: User role (Learner, Instructor, etc.)
- `custom_subject`: HSFY subject code (BIOL111, CHEM111, etc.)

## Data Flow Architecture

```
Moodle Course → LTI Launch → JoltVolt Authentication → Question Bank
                    ↓
Student Progress ← Grade Passback ← Quiz Completion ← Answer Submission
```

## Success Metrics

### Technical KPIs
- 99.9% uptime during peak usage
- <2 second response time for question loading
- Zero data security incidents
- 100% grade passback success rate

### Educational KPIs
- 25% increase in practice question completion
- 15% improvement in exam scores
- 90%+ student satisfaction with integration
- 80%+ instructor adoption rate

## Implementation Timeline

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 1-2  | Research & Planning | Requirements document |
| 3-4  | Demo Setup | Working LTI prototype |
| 5-6  | Backend Development | LTI endpoints and authentication |
| 7-8  | Frontend Integration | Embedded question bank UI |
| 9-10 | Pilot Testing | Beta deployment with select courses |
| 11-12| Feedback & Iteration | Refined integration based on feedback |
| 13-14| Full Deployment | Production-ready LTI tool |
| 15-16| Documentation & Training | Complete user guides and training |

## Next Steps

1. **Contact University of Otago**
   - Reach out to Learning Technology Services
   - Schedule meeting with HSFY course coordinators
   - Discuss partnership opportunities

2. **Technical Proof of Concept**
   - Set up development Moodle instance
   - Build basic LTI integration
   - Test with sample HSFY content

3. **Regulatory Compliance**
   - Review University data policies
   - Ensure FERPA compliance
   - Implement required security measures

## Contact Information

**University of Otago Learning Technology Services**
- Email: its-help@otago.ac.nz
- Phone: +64 3 479 8888

**Key Stakeholders**
- HSFY Course Coordinators
- Moodle Administrators  
- Student Learning Support

---

*This document should be updated as we progress through each phase and gather more information about University of Otago's specific requirements.*
