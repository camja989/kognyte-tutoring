# Deploy FREE Moodle on DigitalOcean - GitHub Student Pack

## 🎓 Overview
Deploy your JoltVolt HSFY Moodle platform **COMPLETELY FREE** using GitHub Student Developer Pack's $200 DigitalOcean credit.

**Total Cost: $0 for 2+ years** (GitHub Student Pack benefit)

## 💰 Cost Breakdown
- **DigitalOcean Droplet**: $6/month (1GB RAM, 25GB SSD)
- **GitHub Student Credit**: $200 
- **Free hosting duration**: 33+ months
- **Database**: Included in droplet
- **Domain**: Free subdomain or use your own

## 🚀 Step 1: Claim GitHub Student Pack

### 1. Verify Student Status
1. Go to https://education.github.com/pack
2. Click **"Get student benefits"**
3. Verify with University of Otago email
4. Complete GitHub Student verification

### 2. Claim DigitalOcean Credit
1. In GitHub Student Pack, find **DigitalOcean**
2. Click **"Get access"**
3. Create DigitalOcean account with student email
4. **$200 credit** will be automatically applied

## 🖥️ Step 2: Create Droplet

### 1. Create New Droplet
1. Login to DigitalOcean dashboard
2. Click **"Create"** → **"Droplets"**
3. Choose configuration:

### 2. Droplet Configuration
**Choose an image:**
- **Distribution**: Ubuntu 22.04 (LTS) x64

**Choose Size:**
- **Basic plan**: $6/month
- **CPU options**: Regular Intel
- **RAM**: 1 GB RAM
- **Storage**: 25 GB SSD

**Choose datacenter region:**
- **Singapore** (closest to New Zealand)
- Or **San Francisco** (good performance)

**Authentication:**
- **SSH keys** (recommended) or **Password**

**Hostname:**
- `joltvolt-moodle`

### 3. Create Droplet
- Click **"Create Droplet"**
- Wait 1-2 minutes for provisioning
- Note your droplet's **IP address**

## 🐳 Step 3: Install Docker and Deploy Moodle

### 1. Connect to Your Droplet
```bash
# Connect via SSH (replace with your IP)
ssh root@your-droplet-ip

# Update system
apt update && apt upgrade -y
```

### 2. Install Docker
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Start Docker service
systemctl start docker
systemctl enable docker
```

### 3. Create Moodle Directory
```bash
# Create project directory
mkdir /opt/joltvolt-moodle
cd /opt/joltvolt-moodle

# Create data directory
mkdir moodledata
chmod 777 moodledata
```

### 4. Create Docker Compose File
```bash
cat > docker-compose.yml << 'DOCKER_EOF'
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: moodle-mysql
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: joltvolt-secure-password-2024
      MYSQL_DATABASE: moodle
      MYSQL_USER: moodleuser
      MYSQL_PASSWORD: moodle-db-password-2024
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - moodle-network

  moodle:
    image: bitnami/moodle:4.3
    container_name: moodle-app
    restart: unless-stopped
    ports:
      - "80:8080"
      - "443:8443"
    environment:
      MOODLE_DATABASE_HOST: mysql
      MOODLE_DATABASE_NAME: moodle
      MOODLE_DATABASE_USER: moodleuser
      MOODLE_DATABASE_PASSWORD: moodle-db-password-2024
      MOODLE_USERNAME: admin
      MOODLE_PASSWORD: JoltVolt-Admin-2024!
      MOODLE_EMAIL: admin@joltvolt.co.nz
      MOODLE_SITE_NAME: "JoltVolt HSFY Learning Platform"
      MOODLE_HOST: your-droplet-ip  # Replace with actual IP
      MOODLE_REVERSEPROXY: "false"
      MOODLE_SSLPROXY: "false"
    volumes:
      - moodle_data:/bitnami/moodle
      - ./moodledata:/bitnami/moodledata
    depends_on:
      - mysql
    networks:
      - moodle-network

volumes:
  mysql_data:
  moodle_data:

networks:
  moodle-network:
    driver: bridge
DOCKER_EOF
```

### 5. Update Configuration
```bash
# Replace 'your-droplet-ip' with actual IP address
sed -i 's/your-droplet-ip/ACTUAL_IP_HERE/g' docker-compose.yml

# Start services
docker-compose up -d

# Check status
docker-compose ps
```

## 🔧 Step 4: Configure Domain (Optional)

### Option 1: Use IP Address
- Access Moodle at: `http://your-droplet-ip`
- Perfect for testing and initial setup

### Option 2: Free Subdomain
```bash
# Install and configure nginx for domain routing
apt install nginx -y

# Create nginx configuration
cat > /etc/nginx/sites-available/joltvolt << 'NGINX_EOF'
server {
    listen 80;
    server_name joltvolt-hsfy.ddns.net;  # Use free DDNS service
    
    location / {
        proxy_pass http://localhost;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
NGINX_EOF

# Enable site
ln -s /etc/nginx/sites-available/joltvolt /etc/nginx/sites-enabled/
systemctl restart nginx
```

## 📚 Step 5: Complete Moodle Setup

### 1. Access Moodle
1. Open browser to `http://your-droplet-ip`
2. Login with:
   - **Username**: admin
   - **Password**: JoltVolt-Admin-2024!

### 2. Configure Site Settings
1. **Site administration** → **Appearance** → **Themes**
2. Set site name: "JoltVolt HSFY Learning Platform"
3. Set timezone: "Pacific/Auckland"

### 3. Enable Self-Registration
1. **Site administration** → **Users** → **Accounts** → **Authentication**
2. Enable **Email-based self-registration**
3. Configure default role: **Student**

### 4. Create HSFY Course Category
1. **Site administration** → **Courses** → **Manage courses and categories**
2. Create category: "HSFY - Health Sciences First Year"

### 5. Create the 5 Courses
Create these courses in the HSFY category:

1. **HSFY Practice Questions - FREE TRIAL** (Course ID: 2)
2. **BIOL111 - Biology Fundamentals** (Course ID: 3)
3. **CHEM111 - Chemistry Fundamentals** (Course ID: 4)
4. **PHSI111 - Physics Fundamentals** (Course ID: 5)
5. **HSCI111 - Health Sciences** (Course ID: 6)

All courses: Enable **Self enrollment** (no key required)

## 🔗 Step 6: Configure LTI Integration

### 1. Add External Tool
1. **Site administration** → **Plugins** → **Activity modules** → **External tool**
2. **Manage tools** → **Configure a tool manually**
3. Settings:
   - **Tool name**: JoltVolt Question Bank
   - **Tool URL**: https://joltvolt-tutoring.netlify.app/api/lti/launch
   - **Consumer key**: joltvolt_hsfy_digitalocean_2024
   - **Shared secret**: joltvolt-do-secret-2024
   - **Accept grades**: Yes
   - **Share name/email**: Always

### 2. Add Activities to Courses
For each course, add **External tool** activity:
- **Activity name**: [Subject] Practice Questions
- **Tool**: JoltVolt Question Bank
- **Custom parameters**: subject=[course-code]

## 📝 Step 7: Update JoltVolt Website

### 1. Update Moodle Configuration
Update `src/lib/moodle-config.ts`:

```typescript
export const MOODLE_CONFIG = {
  moodleSiteUrl: 'http://your-droplet-ip', // Replace with your IP
  courses: {
    trial: '/course/view.php?id=2',
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
Update `src/app/api/lti/launch/route.ts`:
```typescript
const LTI_CONSUMERS = {
  'digitalocean': {
    consumerKey: 'joltvolt_hsfy_digitalocean_2024',
    consumerSecret: 'joltvolt-do-secret-2024',
    institutionName: 'JoltVolt DigitalOcean'
  }
}
```

### 3. Deploy Website Updates
```bash
git add -A
git commit -m "Update for DigitalOcean deployment"
git push origin main
```

## 🎯 Step 8: Test Complete System

### 1. Test Moodle Access
- ✅ Admin login works
- ✅ Student registration enabled
- ✅ All 5 courses created
- ✅ Self-enrollment working

### 2. Test JoltVolt Integration
- ✅ Website redirects to DigitalOcean Moodle
- ✅ Students can register and enroll
- ✅ LTI integration launches questions
- ✅ Grades sync back to Moodle

## 💰 Cost Monitoring

### DigitalOcean Usage Dashboard
1. **Dashboard** → **Billing** → **Usage**
2. Monitor monthly spending
3. **Current**: ~$6/month
4. **Remaining credit**: Check balance
5. **Estimated free duration**: 30+ months

### Optimization Tips
- **Droplet snapshots**: Weekly backups ($1-2/month)
- **Load balancing**: Only if you get 1000+ students
- **CDN**: For faster global access (optional)

## 🚀 Going Live Checklist

- [ ] DigitalOcean droplet created with student credit
- [ ] Docker containers running (MySQL + Moodle)
- [ ] Moodle accessible via droplet IP
- [ ] Admin account configured
- [ ] Self-registration enabled
- [ ] All 5 HSFY courses created with self-enrollment
- [ ] LTI external tool configured
- [ ] JoltVolt website updated with droplet IP
- [ ] End-to-end user flow tested

## 📊 Performance & Scaling

### Current Capacity (1GB RAM)
- **Concurrent users**: 50-100 students
- **Database**: MySQL handles hundreds of students
- **Storage**: 25GB sufficient for question bank
- **Bandwidth**: 1000GB/month included

### When to Upgrade
- **500+ active students**: Upgrade to 2GB RAM ($12/month)
- **Heavy content**: Add more storage
- **Global users**: Add CDN

## 🎓 Student Benefits Summary

### What You Get FREE
- **Professional Moodle hosting**: 2+ years
- **Custom domain capability**: Optional upgrade
- **Full administrative control**: Complete customization
- **Automatic backups**: Available with snapshots
- **Professional infrastructure**: DigitalOcean's reliable platform

### Renewal Strategy
- **After 2+ years**: Either pay $6/month or migrate to another platform
- **By then**: You'll likely have revenue from tutoring platform
- **Alternative**: Apply for more student credits or use profits

---

## 🎉 Your FREE Professional Moodle Platform is Ready!

**Setup time**: 60 minutes  
**Cost**: $0 for 30+ months  
**Capacity**: Hundreds of HSFY students  
**Professional grade**: DigitalOcean infrastructure

**You now have a completely free, professional learning platform that can serve the entire University of Otago HSFY student body!** 🎓💻⚡

Start with the GitHub Student Pack setup and follow this guide step-by-step.
