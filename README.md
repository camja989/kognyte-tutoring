# Kognyte HSFY Learning Platform

🎓 **FREE learning platform for University of Otago Health Sciences First Year students**

## 🆓 **COMPLETELY FREE HOSTING** (GitHub Student Pack)

**Deploy your professional Moodle platform for FREE using DigitalOcean + GitHub Student Pack**
- **Cost**: $0 for 2+ years (GitHub Student Pack $200 credit)
- **Setup Time**: 60 minutes
- **Capacity**: Hundreds of HSFY students
- **Professional Grade**: DigitalOcean infrastructure

## 🚀 Live Platform

- **Website**: https://kognyte-tutoring.netlify.app
- **Moodle Platform**: Deploy FREE on DigitalOcean (see setup guide)
- **GitHub Repository**: https://github.com/camja989/kognyte-tutoring

## 📋 What This Platform Provides

### For HSFY Students
- **FREE Trial Course**: Immediate access to sample questions from all subjects
- **Subject-Specific Courses**: BIOL111, CHEM111, PHSI111, HSCI111
- **Progress Tracking**: Automatic grade recording and analytics
- **Mobile Friendly**: Works perfectly on phones, tablets, and computers
- **University Integration**: Professional Moodle platform for credibility

### For Administrators
- **Zero Cost Hosting**: Completely free with GitHub Student Pack
- **Professional Infrastructure**: DigitalOcean's reliable platform
- **Full Control**: Complete administrative access to customize everything
- **Scalable**: Handle hundreds of students, upgrade as needed
- **Analytics Dashboard**: Track student progress and popular subjects

## 🏗️ Architecture

```
Kognyte Website          DigitalOcean Moodle       Question Bank LTI
(kognyte-tutoring.       (your-droplet-ip)    →    (Integrated with
 netlify.app)       →                                 website)
                                                          ↓
Student Journey: Browse → Register in Moodle → Enroll in Course → Practice Questions → Track Progress
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5.2 with TypeScript and Tailwind CSS
- **Hosting**: Netlify (website) + DigitalOcean (Moodle)
- **Database**: MySQL (DigitalOcean droplet)
- **Integration**: LTI 1.1 standards for educational technology
- **Deployment**: Docker Compose for easy setup

## 📚 Quick Start - FREE Deployment

### **Recommended: DigitalOcean (GitHub Student Pack - FREE)**
Follow the detailed guide: `docs/digitalocean-free-deployment.md`

**What you get FREE:**
- **$200 DigitalOcean credit** (33+ months of hosting)
- **Professional Moodle platform** 
- **Complete administrative control**
- **MySQL database included**
- **1GB RAM, 25GB SSD, 1000GB bandwidth**

### Alternative Options (If no student pack)
- **Railway**: $5/month (see `docs/railway-deployment-guide.md`)
- **MoodleCloud**: $230 AUD/year (see `docs/create-moodle-instance.md`)

## 📁 Project Structure

```
kognyte-tutoring/
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Homepage with Moodle redirections
│   │   ├── login/page.tsx                    # Moodle enrollment interface  
│   │   ├── careers/page.tsx                  # Tutor careers page
│   │   ├── apply/page.tsx                    # Tutor application form
│   │   └── api/lti/                          # LTI integration endpoints
│   ├── lib/
│   │   └── moodle-config.ts                  # DigitalOcean Moodle configuration
│   └── components/                           # Reusable UI components
├── docs/
│   ├── digitalocean-free-deployment.md      # FREE DigitalOcean setup guide
│   ├── railway-deployment-guide.md          # Railway alternative
│   └── create-moodle-instance.md            # MoodleCloud alternative
├── docker-compose.digitalocean.yml          # DigitalOcean deployment
├── Dockerfile                               # Railway deployment container
└── config.php                               # Moodle configuration
```

## 🎯 Deployment Options Comparison

| Option | Cost | Setup Time | Capacity | Control | Recommended For |
|--------|------|------------|----------|---------|-----------------|
| **DigitalOcean + Student Pack** | **$0 for 2+ years** | 60 min | Hundreds | Full | **Everyone with student pack** |
| Railway | $5/month | 45 min | Hundreds | Limited | No student pack |
| MoodleCloud | $230 AUD/year | 30 min | Hundreds | Limited | Enterprise |

## 🚀 Getting Started (FREE)

### Prerequisites
- GitHub account with Student Pack access
- University of Otago email for verification
- Basic command line familiarity

### Step-by-Step
1. **Claim GitHub Student Pack**: https://education.github.com/pack
2. **Get DigitalOcean Credit**: $200 credit through student pack
3. **Follow Deployment Guide**: `docs/digitalocean-free-deployment.md`
4. **Configure Moodle**: Set up courses and LTI integration
5. **Update Website**: Point to your DigitalOcean droplet
6. **Launch**: Announce to HSFY students!

## 💰 Cost Analysis

### FREE DigitalOcean Deployment
- **GitHub Student Credit**: $200
- **Monthly Droplet Cost**: $6 (1GB RAM, 25GB SSD)
- **Free Duration**: 33+ months
- **Database**: MySQL included
- **Bandwidth**: 1000GB/month included

### When You Might Need to Upgrade
- **1000+ Active Students**: Upgrade to 2GB RAM ($12/month)
- **Heavy File Content**: Add more storage
- **Global Performance**: Add CDN
- **After 2+ years**: Either pay $6/month or migrate

## 📊 Features

### Current Implementation ✅
- **Responsive Website**: Works on all devices
- **Free Moodle Hosting**: DigitalOcean deployment with Docker
- **LTI Integration**: Industry-standard educational technology
- **User Management**: Moodle handles registration and authentication
- **Progress Tracking**: Automatic grade passback and analytics
- **Subject Organization**: 5 HSFY courses with self-enrollment
- **Professional Design**: Modern UI with University of Otago branding

### Roadmap 🚧
- **Enhanced Question Bank**: More questions per subject
- **Advanced Analytics**: Detailed progress reports
- **Mobile App**: Native iOS/Android applications
- **Social Features**: Study groups and competitions
- **Multi-University**: Expand to other New Zealand universities

## 🎓 Business Model & Growth

### Revenue Streams
- **Premium Question Banks**: Advanced content for specific subjects
- **Private Tutoring**: Connect students with top HSFY performers
- **University Partnerships**: Work directly with academic departments
- **Expansion**: Template for other universities and subjects

### Competitive Advantages
- **Lower Cost**: Undercut established tutoring services with free platform
- **University Integration**: Official Moodle platform adds credibility
- **Scalable Technology**: Handle growth without technical limitations
- **Student-Focused**: Built by former HSFY students, for current students

## �� Launch Strategy

### Phase 1: HSFY Soft Launch (Week 1)
- Deploy DigitalOcean Moodle following the free guide
- Test with 10-20 University of Otago HSFY students
- Gather feedback and fix any issues
- Monitor system performance and usage

### Phase 2: Public Launch (Week 2)
- Announce on University of Otago Facebook groups
- Email HSFY student mailing lists
- Create social media content (Instagram/TikTok)
- Contact student associations for promotion

### Phase 3: Scale & Expand (Month 1+)
- Monitor DigitalOcean usage and optimize performance
- Add more question content based on popular subjects
- Reach out to other New Zealand universities
- Develop premium features and tutoring marketplace

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/camja989/kognyte-tutoring.git
cd kognyte-tutoring

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🤝 Contributing

This platform is designed to help HSFY students succeed. If you'd like to contribute:

1. **Content Creation**: Add more practice questions
2. **Feature Development**: Implement new functionality
3. **Bug Reports**: Help identify and fix issues
4. **User Feedback**: Share student experiences and suggestions

## 📞 Contact & Support

- **Developer**: Jack Campbell
- **University**: University of Otago (Former HSFY student)
- **Purpose**: Help current HSFY students succeed with affordable, high-quality practice resources

## 📄 License

This project is designed to support University of Otago HSFY students. Feel free to use and adapt for educational purposes.

---

## 🎉 Ready to Launch Your FREE Professional Learning Platform!

**Total Cost**: $0 for 2+ years  
**Setup Time**: 60 minutes  
**Capacity**: Hundreds of HSFY students  
**Professional Infrastructure**: DigitalOcean hosting

### Next Steps:
1. **Get GitHub Student Pack**: https://education.github.com/pack
2. **Follow the FREE guide**: `docs/digitalocean-free-deployment.md`
3. **Launch in 60 minutes**: Start helping HSFY students succeed!

*Your complete learning platform will be running on professional infrastructure at zero cost thanks to the GitHub Student Developer Pack.* 🎓💻⚡
