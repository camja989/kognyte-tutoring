# Complete MoodleCloud Setup - Step by Step

## Phase 1: Create MoodleCloud Account

### 1. Sign Up for MoodleCloud
1. Go to: https://moodlecloud.com/
2. Click "Get started for free"
3. Fill in details:
   - **Site name**: joltvolt-hsfy
   - **Site URL**: joltvolt-hsfy.moodlecloud.com
   - **Admin first name**: Your name
   - **Admin surname**: Your surname  
   - **Admin email**: your-email@domain.com
   - **Country**: New Zealand
   - **Admin username**: admin
   - **Password**: [Strong password]

### 2. Verify Email and Complete Setup
1. Check your email for verification link
2. Click verification link
3. Complete Moodle setup wizard
4. Note down your admin credentials

## Phase 2: Configure Moodle Site

### 1. Access Admin Panel
1. Go to: https://joltvolt-hsfy.moodlecloud.com
2. Login with admin credentials
3. Navigate to **Site administration**

### 2. Enable Self-Registration
1. Go to **Site administration → Users → Accounts → Authentication**
2. Find **Email-based self-registration**
3. Click the "eye" icon to enable it
4. Click **Settings** next to it
5. Configure:
   - **Default role for all users**: Student
   - **Email confirmation**: Yes
   - **reCAPTCHA**: Optional but recommended

### 3. Configure Site Settings
1. Go to **Site administration → Appearance → Themes → Theme settings**
2. Set:
   - **Site name**: JoltVolt HSFY Learning Platform
   - **Site description**: Practice questions for University of Otago HSFY students
   - **Front page**: Course list + Site news

### 4. Create Course Category
1. Go to **Site administration → Courses → Manage courses and categories**
2. Click **Create new category**
3. Set:
   - **Category name**: HSFY - Health Sciences First Year
   - **Category ID**: hsfy
   - **Description**: University of Otago Health Sciences First Year courses

## Phase 3: Create Courses

### Course 1: FREE TRIAL
1. Click **Create new course** in HSFY category
2. Configure:
   - **Course full name**: HSFY Practice Questions - FREE TRIAL
   - **Course short name**: HSFY-TRIAL
   - **Course ID**: hsfy-trial
   - **Course summary**: Get started with sample questions from all HSFY subjects
   - **Course format**: Topics format
   - **Number of sections**: 4
   - **Hidden sections**: Collapsed
3. **Enrollment methods**:
   - Enable **Self enrollment**
   - Leave **Enrollment key** empty
   - **Allow guest access**: Yes

### Course 2: BIOL111
1. Create new course:
   - **Course full name**: BIOL111 - Biology Fundamentals  
   - **Course short name**: BIOL111
   - **Course ID**: biol111
   - **Course summary**: Comprehensive biology question bank for HSFY students
3. **Enrollment methods**: Self enrollment (no key required)

### Course 3: CHEM111  
1. Create new course:
   - **Course full name**: CHEM111 - Chemistry Fundamentals
   - **Course short name**: CHEM111
   - **Course ID**: chem111
   - **Course summary**: Master chemistry concepts with targeted practice questions

### Course 4: PHSI111
1. Create new course:
   - **Course full name**: PHSI111 - Physics Fundamentals
   - **Course short name**: PHSI111  
   - **Course ID**: phsi111
   - **Course summary**: Physics problem-solving and conceptual understanding

### Course 5: HSCI111
1. Create new course:
   - **Course full name**: HSCI111 - Health Sciences
   - **Course short name**: HSCI111
   - **Course ID**: hsci111
   - **Course summary**: Health sciences foundations and applications

## Phase 4: Configure External Tool (JoltVolt Integration)

### 1. Add External Tool Configuration
1. Go to **Site administration → Plugins → Activity modules → External tool**
2. Click **Manage tools**
3. Click **Configure a tool manually**
4. Configure:
   - **Tool name**: JoltVolt Question Bank
   - **Tool URL**: https://joltvolt-tutoring.netlify.app/api/lti/launch
   - **LTI version**: LTI 1.0/1.1
   - **Consumer key**: joltvolt_hsfy_2024
   - **Shared secret**: [Generate a secure random string - save this!]
   - **Tool configuration usage**: Show in activity chooser and as a preconfigured tool
   - **Default launch container**: New window
   - **Accept grades from tool**: Yes
   - **Share launcher's name with tool**: Always
   - **Share launcher's email with tool**: Always
   - **Accept SSL certificates**: Yes

### 2. Test External Tool
1. Go to any course
2. Turn editing on
3. Add activity → External tool → JoltVolt Question Bank
4. Verify it appears in the activity list

## Phase 5: Add JoltVolt Activities to Each Course

### HSFY Trial Course
1. Enter the HSFY-TRIAL course
2. Turn editing on
3. In Section 1, click **Add an activity or resource**
4. Select **External tool**
5. Choose **JoltVolt Question Bank**
6. Configure:
   - **Activity name**: All HSFY Practice Questions - FREE ACCESS
   - **Custom parameters**: subject=hsfy-trial
   - **Grade → Type**: Point
   - **Grade → Maximum grade**: 100
7. Save and display

### BIOL111 Course
1. Add JoltVolt activity:
   - **Activity name**: Biology Practice Questions
   - **Custom parameters**: subject=biol111
   - **Maximum grade**: 100

### CHEM111 Course
1. Add JoltVolt activity:
   - **Activity name**: Chemistry Practice Questions  
   - **Custom parameters**: subject=chem111
   - **Maximum grade**: 100

### PHSI111 Course
1. Add JoltVolt activity:
   - **Activity name**: Physics Practice Questions
   - **Custom parameters**: subject=phsi111
   - **Maximum grade**: 100

### HSCI111 Course
1. Add JoltVolt activity:
   - **Activity name**: Health Sciences Practice Questions
   - **Custom parameters**: subject=hsci111
   - **Maximum grade**: 100

## Phase 6: Configure Front Page

### 1. Front Page Settings
1. Go to **Site administration → Front page → Front page settings**
2. Configure:
   - **Front page**: Course list + Site news
   - **Include a topic section**: 1
   - **Course list**: Display course list
   - **Maximum category depth**: 2

### 2. Add Welcome Content
1. Go to site front page
2. Turn editing on
3. Add text in the topic section:

```
Welcome to JoltVolt HSFY Learning Platform

🎓 Designed specifically for University of Otago Health Sciences First Year students

🎯 **Start Here**: Try our FREE TRIAL course with sample questions from all subjects
📚 **Subject Courses**: Enroll in specific courses for comprehensive practice
📊 **Track Progress**: Monitor your improvement with detailed analytics
🏆 **Expert Content**: Created by top-performing HSFY graduates

Ready to excel in your HSFY studies? Choose a course below to get started!
```

## Phase 7: Test Complete User Journey

### 1. Test Registration Flow
1. Open incognito browser
2. Go to https://joltvolt-hsfy.moodlecloud.com
3. Click "Create new account"
4. Fill in student details
5. Verify email confirmation works
6. Login successfully

### 2. Test Course Enrollment
1. While logged in as test student
2. Click on "HSFY Practice Questions - FREE TRIAL"
3. Verify self-enrollment works
4. Access the course

### 3. Test JoltVolt Integration
1. In the trial course, click "All HSFY Practice Questions"
2. Verify it redirects to JoltVolt with LTI authentication
3. Complete some questions
4. Return to Moodle and check if grade appears

## Phase 8: Update JoltVolt Website

### 1. Update Moodle Configuration
Update `src/lib/moodle-config.ts` with actual course IDs:
```typescript
export const MOODLE_CONFIG = {
  moodleSiteUrl: 'https://joltvolt-hsfy.moodlecloud.com',
  courses: {
    trial: '/course/view.php?id=1',     // FREE TRIAL course ID
    biol111: '/course/view.php?id=2',   // BIOL111 course ID  
    chem111: '/course/view.php?id=3',   // CHEM111 course ID
    phsi111: '/course/view.php?id=4',   // PHSI111 course ID
    hsci111: '/course/view.php?id=5'    // HSCI111 course ID
  },
  registerUrl: '/login/signup.php',
  loginUrl: '/login/index.php'
}
```

### 2. Test Website Integration
1. Go to your JoltVolt website
2. Click "Try Free Demo" or "Login"
3. Verify it redirects to correct Moodle URLs
4. Test the complete user flow

## Phase 9: Launch Preparation

### 1. Security Checklist
- [ ] Strong admin password set
- [ ] reCAPTCHA enabled for registration
- [ ] Email confirmation required
- [ ] Guest access limited to trial course only
- [ ] External tool shared secret is secure

### 2. Content Checklist  
- [ ] All 5 courses created
- [ ] JoltVolt activities added to each course
- [ ] Course descriptions are complete
- [ ] Front page welcome message added
- [ ] Category structure is clear

### 3. Testing Checklist
- [ ] User registration works
- [ ] Course enrollment works  
- [ ] LTI integration launches JoltVolt
- [ ] Grade passback functions
- [ ] Mobile responsiveness verified

## Phase 10: Go Live!

1. **Announce to Students**: Share https://joltvolt-hsfy.moodlecloud.com
2. **Monitor Usage**: Check enrollment and activity logs
3. **Gather Feedback**: Survey users about experience
4. **Iterate**: Improve based on student feedback

---

**Your complete Moodle learning platform is now ready for University of Otago HSFY students!**

🎯 **Trial Course**: Immediate access, no registration required  
📚 **Subject Courses**: Comprehensive question banks by subject
🔐 **Secure Platform**: Professional Moodle hosting
📱 **Mobile Ready**: Works on all devices
