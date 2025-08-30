# Moodle LTI Integration Guide for Kognyte Tutoring

## Overview
Kognyte Tutoring Platform now supports seamless integration with Moodle via LTI (Learning Tools Interoperability) 1.1. This enables University of Otago HSFY students to access our specialized question banks directly from their course pages without leaving the Moodle environment.

## For University of Otago Learning Technology Services

### Contact Information
**To set up LTI integration:**
- Email: its-help@otago.ac.nz
- Subject: "LTI External Tool Integration Request - Kognyte Tutoring Platform"

### Technical Integration Details

#### LTI Configuration
```
Tool Name: Kognyte HSFY Tutoring
Launch URL: https://kognyte-tutoring.netlify.app/api/lti/launch
Consumer Key: otago_hsfy_2024
Shared Secret: [To be provided securely]
Privacy Settings: Send names and email addresses
Grade Settings: Accept grades from tool (for gradebook integration)
```

#### Supported HSFY Subjects
- BIOL111 - Biology
- CHEM111 - Chemistry  
- PHSI111 - Physics
- HSCI111 - Health Sciences

#### Features
✅ **OAuth 1.0a Authentication** - Secure LTI standard compliance
✅ **Single Sign-On** - Students use existing Moodle credentials
✅ **Grade Passback** - Automatic score sync to Moodle gradebook
✅ **Subject-Specific Content** - Questions tailored to each HSFY paper
✅ **Progress Tracking** - Real-time completion and performance analytics
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

## Implementation Steps

### 1. Moodle Administrator Setup
1. Navigate to Site Administration → Plugins → Activity modules → External tool
2. Add new external tool with the configuration above
3. Set privacy and grade settings as specified
4. Configure tool to appear in course activity picker

### 2. Course Coordinator Setup
1. In your HSFY course, click "Turn editing on"
2. Add activity → External tool → Kognyte HSFY Tutoring
3. Configure activity name (e.g., "BIOL111 Practice Questions")
4. Set grade settings if you want scores in gradebook
5. Save and display

### 3. Student Experience
1. Students click the Kognyte activity link in their course
2. Automatically logged in via LTI (no separate account needed)
3. Access subject-specific question banks
4. Complete interactive quizzes with instant feedback
5. Scores automatically sync back to Moodle gradebook

## Security & Privacy

### Data Protection
- **Minimal Data Collection**: Only username, email, and course context
- **No Password Storage**: Uses Moodle's authentication system
- **GDPR Compliant**: Data processing limited to educational purposes
- **Secure Transport**: All data encrypted via HTTPS/TLS

### OAuth Security
- Industry-standard OAuth 1.0a signature validation
- Timestamp-based replay attack prevention
- Consumer key/secret authentication
- Signature validation on all requests

## Technical Architecture

### LTI Flow
```
Moodle Course → LTI Launch → OAuth Validation → Subject Detection → Question Bank → Grade Passback
```

### API Endpoints
- `POST /api/lti/launch` - Main LTI launch handler
- `POST /api/lti/grade-passback` - Score synchronization
- `GET /lti/questions/[subject]` - Subject-specific question interface

### Grade Passback XML Schema
Compliant with IMS LTI 1.1 Basic Outcomes Service for automatic gradebook updates.

## Benefits for University of Otago

### For Students
- **Seamless Access**: No additional login required
- **Integrated Experience**: Questions appear within course context
- **Immediate Feedback**: Detailed explanations for all answers
- **Progress Tracking**: Performance data available to instructors
- **Mobile Friendly**: Study anywhere, anytime

### For Instructors
- **Gradebook Integration**: Automatic score recording
- **Analytics Dashboard**: Student engagement and performance data
- **Content Alignment**: Questions specifically designed for HSFY curriculum
- **No Setup Required**: Works immediately after administrator configuration

### For IT Administration
- **Standards Compliant**: Full LTI 1.1 implementation
- **Secure Integration**: OAuth-based authentication
- **Minimal Maintenance**: Cloud-hosted, auto-updating platform
- **Support Available**: Technical support for integration issues

## Getting Started

### Immediate Next Steps
1. **Contact IT Services**: Email its-help@otago.ac.nz with integration request
2. **Pilot Program**: Start with one HSFY paper (suggest BIOL111)
3. **Faculty Coordination**: Involve course coordinators in setup process
4. **Student Communication**: Announce new resource availability

### Timeline
- **Week 1**: Initial contact and technical discussion
- **Week 2**: LTI configuration and testing
- **Week 3**: Pilot deployment with one course
- **Week 4**: Full rollout across all HSFY papers

## Support & Troubleshooting

### Technical Support
- **Email**: support@kognyte.com
- **Response Time**: Within 24 hours for integration issues
- **Documentation**: Complete API documentation available
- **Testing Environment**: Sandbox available for pre-deployment testing

### Common Issues
1. **OAuth Signature Mismatch**: Verify consumer key/secret configuration
2. **Grade Passback Failures**: Check LTI grade settings in Moodle
3. **Student Access Issues**: Verify privacy settings allow name/email sharing

## Future Enhancements

### Planned Features (Q2 2024)
- **Adaptive Learning**: AI-powered question difficulty adjustment
- **Peer Competition**: Leaderboards and study group features
- **Advanced Analytics**: Detailed learning outcome predictions
- **Video Explanations**: Multimedia content for complex concepts

### Expansion Opportunities
- **Additional Subjects**: Other University of Otago health science papers
- **Custom Content**: University-specific question development
- **Integration Partnerships**: Collaboration with other NZ universities

## Contact for Integration

**Primary Contact**: support@kognyte.com
**Technical Lead**: Available for video calls to demonstrate integration
**Documentation**: Full technical specifications available upon request

---

*Kognyte Tutoring Platform - Empowering HSFY student success through innovative educational technology*
