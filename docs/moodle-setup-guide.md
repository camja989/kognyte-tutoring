# JoltVolt Moodle Setup Guide

## Step 1: Create MoodleCloud Instance

1. **Go to MoodleCloud**: https://moodlecloud.com/
2. **Create Free Trial**: 
   - Site name: "joltvolt-hsfy"
   - URL: https://joltvolt-hsfy.moodlecloud.com
   - Admin email: your-email@domain.com
3. **Complete Setup**: Follow the registration process

## Step 2: Configure Moodle Site

### 2.1 Enable Self-Registration
1. Go to **Site Administration → Users → Accounts → Authentication**
2. Enable **Email-based self-registration**
3. Set **Default role for all users**: Student
4. Enable **Email confirmation**: Yes

### 2.2 Create HSFY Course Category
1. Go to **Site Administration → Courses → Manage courses and categories**
2. Create category: "HSFY - Health Sciences First Year"

### 2.3 Create Courses
Create these courses in the HSFY category:
- **BIOL111 - Biology Fundamentals** (Course ID: biol111)
- **CHEM111 - Chemistry Fundamentals** (Course ID: chem111)  
- **PHSI111 - Physics Fundamentals** (Course ID: phsi111)
- **HSCI111 - Health Sciences** (Course ID: hsci111)
- **HSFY Practice Questions - FREE TRIAL** (Course ID: hsfy-trial)

### 2.4 Course Settings
For each course:
- **Enrollment method**: Self enrollment
- **Enrollment key**: Leave empty for free access
- **Course format**: Topics format
- **Visible**: Yes

## Step 3: Add JoltVolt External Tool

### 3.1 Configure External Tool
1. Go to **Site Administration → Plugins → Activity modules → External tool**
2. Click **Manage tools**
3. Add new external tool:
   ```
   Tool name: JoltVolt Question Bank
   Tool URL: https://joltvolt-tutoring.netlify.app/api/lti/launch
   Consumer key: joltvolt_hsfy_2024
   Shared secret: [Generate secure secret]
   ```

### 3.2 Tool Configuration
- **Launch container**: New window
- **Accept grades from tool**: Yes
- **Privacy settings**: 
  - Share launcher's name: Yes
  - Share launcher's email: Yes
  - Accept SSL certificates: Yes
