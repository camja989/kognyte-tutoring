# Deploy FREE Moodle on Railway - Complete Guide

## 🎯 Overview
Deploy your Kognyte HSFY Moodle platform completely **FREE** on Railway with MySQL database.

**Total Cost: $0/month** (Railway Hobby Plan)

## 🚀 Step 1: Set Up Railway Account

### 1. Create Railway Account
1. Go to https://railway.app
2. Click **"Start a New Project"**  
3. Sign up with GitHub (recommended for easy deployment)
4. Verify your account

### 2. Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Connect your GitHub account
4. Select `kognyte-tutoring` repository

## 🗄️ Step 2: Add MySQL Database

### 1. Add Database Service
1. In your Railway project dashboard
2. Click **"+ New Service"**
3. Select **"Database"** → **"Add MySQL"**
4. Railway will automatically provision a MySQL database

### 2. Note Database Variables
Railway automatically creates these environment variables:
- `MYSQLHOST`
- `MYSQLDATABASE` 
- `MYSQLUSER`
- `MYSQLPASSWORD`
- `MYSQLPORT`

## 🐳 Step 3: Deploy Moodle

### 1. Configure Deployment
1. In Railway project dashboard
2. Click on your **kognyte-tutoring** service
3. Go to **"Settings"** → **"Environment"**
4. Add these variables:

```
MOODLE_SALT=kognyte-hsfy-production-salt-2024
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 2. Deploy from Repository
1. Go to **"Deployments"** tab
2. Click **"Deploy"**
3. Railway will:
   - Pull your code from GitHub
   - Build the Docker container
   - Deploy Moodle with MySQL
   - Provide a public URL

### 3. Wait for Deployment (5-10 minutes)
- Monitor the build logs in Railway dashboard
- Look for "Deployment successful" message
- Note your public URL (e.g., `kognyte-production.up.railway.app`)

## ⚙️ Step 4: Complete Moodle Setup

### 1. Access Your Moodle Site
1. Open the Railway-provided URL
2. You'll see Moodle installation wizard
3. Follow the setup steps:

### 2. Installation Wizard
1. **Language**: English
2. **Database**: Already configured (Railway handles this)
3. **Admin Account Setup**:
   - Username: `admin`
   - Password: `[Strong password]`
   - Email: `your-email@domain.com`
   - First name: `Kognyte`
   - Surname: `Admin`

### 3. Site Settings
- **Site name**: Kognyte HSFY Learning Platform
- **Site description**: Practice questions for University of Otago HSFY students
- **Time zone**: Pacific/Auckland

## 📚 Step 5: Create HSFY Courses

### 1. Create Course Category
1. Go to **Site administration** → **Courses** → **Manage courses and categories**
2. Click **"Create new category"**
3. Settings:
   - **Category name**: HSFY - Health Sciences First Year
   - **Category ID**: hsfy

### 2. Create the 5 Courses

#### Course 1: FREE TRIAL
- **Course name**: HSFY Practice Questions - FREE TRIAL  
- **Course short name**: HSFY-TRIAL
- **Enrollment**: Self enrollment (no key)
- **Guest access**: Yes

#### Course 2: BIOL111
- **Course name**: BIOL111 - Biology Fundamentals
- **Course short name**: BIOL111
- **Enrollment**: Self enrollment

#### Course 3: CHEM111
- **Course name**: CHEM111 - Chemistry Fundamentals  
- **Course short name**: CHEM111
- **Enrollment**: Self enrollment

#### Course 4: PHSI111
- **Course name**: PHSI111 - Physics Fundamentals
- **Course short name**: PHSI111
- **Enrollment**: Self enrollment

#### Course 5: HSCI111
- **Course name**: HSCI111 - Health Sciences
- **Course short name**: HSCI111
- **Enrollment**: Self enrollment

## 🔗 Step 6: Configure LTI Integration

### 1. Add External Tool
1. **Site administration** → **Plugins** → **Activity modules** → **External tool**
2. Click **"Manage tools"** → **"Configure a tool manually"**
3. Settings:
   - **Tool name**: Kognyte Question Bank
   - **Tool URL**: `https://kognyte-tutoring.netlify.app/api/lti/launch`
   - **Consumer key**: `kognyte_hsfy_railway_2024`
   - **Shared secret**: `kognyte-railway-secret-2024` 
   - **Accept grades**: Yes
   - **Share name/email**: Always

### 2. Add Activities to Each Course
For each course, add **External tool** activity:
- **Activity name**: [Subject] Practice Questions
- **External tool**: Kognyte Question Bank
- **Custom parameters**: `subject=[course-code]`

## 📝 Step 7: Update Kognyte Website

### 1. Update Moodle Configuration
Update `src/lib/moodle-config.ts`:

```typescript
export const MOODLE_CONFIG = {
  moodleSiteUrl: 'https://kognyte-production.up.railway.app', // Your Railway URL
  courses: {
    trial: '/course/view.php?id=2',     // Check actual course IDs
    biol111: '/course/view.php?id=3',   
    chem111: '/course/view.php?id=4',   
    phsi111: '/course/view.php?id=5',   
    hsci111: '/course/view.php?id=6'    
  },
  registerUrl: '/login/signup.php',
  loginUrl: '/login/index.php'
}
```

### 2. Update LTI Configuration
Update `src/app/api/lti/launch/route.ts` with new shared secret:

```typescript
const SHARED_SECRET = 'kognyte-railway-secret-2024';
```

### 3. Deploy Website Updates
```bash
git add -A
git commit -m "Update Moodle config for Railway deployment"
git push origin main
```

## 🎯 Step 8: Test Complete System

### 1. Test Website Integration
1. Go to https://kognyte-tutoring.netlify.app
2. Click **"Try Free Demo"** → Should redirect to Railway Moodle
3. Register new student account
4. Enroll in FREE TRIAL course
5. Launch Kognyte questions via LTI

### 2. Test All User Flows
- ✅ Student registration
- ✅ Course enrollment  
- ✅ LTI question launch
- ✅ Grade passback to Moodle
- ✅ Progress tracking

## 💰 Cost Analysis

### Railway Free Tier Limits
- **Execution time**: 500 hours/month (plenty for student usage)
- **Memory**: 512MB (sufficient for Moodle)
- **Storage**: 1GB (adequate for question bank)
- **Bandwidth**: 100GB/month (handles hundreds of students)

### When You Might Need to Upgrade
- **1000+ active students**: Consider Railway Pro ($5/month)
- **Heavy file uploads**: Upgrade storage
- **24/7 high traffic**: Consider dedicated hosting

**For HSFY launch: FREE tier is perfect!**

## 🚀 Going Live Checklist

- [ ] Railway Moodle deployed and accessible
- [ ] MySQL database connected and working  
- [ ] All 5 HSFY courses created
- [ ] LTI integration configured
- [ ] Kognyte website updated with Railway URLs
- [ ] End-to-end user flow tested
- [ ] Admin account secured
- [ ] Email notifications configured

## 📊 Monitoring & Analytics

### Railway Dashboard
- Monitor CPU/memory usage
- Check deployment logs
- Track database performance

### Moodle Analytics  
- **Site administration** → **Reports** → **Live logs**
- Track student enrollments
- Monitor question completion rates
- Analyze popular subjects

## 🎓 Launch Strategy

### 1. Soft Launch (Week 1)
- Test with 10-20 HSFY students
- Gather feedback and fix issues
- Monitor system performance

### 2. Public Launch (Week 2)
- Announce on University of Otago Facebook groups
- Email HSFY student mailing lists
- Create Instagram/TikTok content

### 3. Scale Up (Month 1+)
- Monitor Railway usage metrics
- Upgrade to Pro plan if needed ($5/month)
- Add more question content based on demand

---

## 🎉 Your FREE Professional Moodle Platform is Ready!

**Total setup time**: 45 minutes  
**Monthly cost**: $0  
**Capacity**: Hundreds of HSFY students  
**Features**: Full LTI integration, progress tracking, mobile-responsive

**Your complete learning platform is now running on professional infrastructure at zero cost!** 🚀📚⚡
