// Kognyte Moodle Configuration for FREE DigitalOcean Deployment

export const MOODLE_CONFIG = {
  // DigitalOcean droplet URL (update after deployment)
  moodleSiteUrl: "http://209.38.23.129",
  courses: {
    trial: '/course/view.php?id=2',     // FREE TRIAL course ID
    biol111: '/course/view.php?id=3',   // BIOL111 course ID  
    chem111: '/course/view.php?id=4',   // CHEM111 course ID
    phsi111: '/course/view.php?id=5',   // PHSI111 course ID
    hsci111: '/course/view.php?id=6'    // HSCI111 course ID
  },
  registerUrl: '/login/signup.php',
  loginUrl: '/login/index.php'
}

// LTI Configuration for DigitalOcean Moodle
export const LTI_CONFIG = {
  consumerKey: 'kognyte_hsfy_digitalocean_2024',
  sharedSecret: 'kognyte-do-secret-2024',
  launchUrl: 'https://kognyte-tutoring.netlify.app/api/lti/launch'
}

// Helper functions for Moodle redirections
export function redirectToMoodleLogin() {
  const url = `${MOODLE_CONFIG.moodleSiteUrl}${MOODLE_CONFIG.loginUrl}`
  if (typeof window !== 'undefined') {
    window.location.href = url
  }
  return url
}

export function redirectToMoodleRegistration() {
  const url = `${MOODLE_CONFIG.moodleSiteUrl}${MOODLE_CONFIG.registerUrl}`
  if (typeof window !== 'undefined') {
    window.location.href = url
  }
  return url
}

export function redirectToMoodleCourse(courseKey: keyof typeof MOODLE_CONFIG.courses) {
  const coursePath = MOODLE_CONFIG.courses[courseKey]
  const url = `${MOODLE_CONFIG.moodleSiteUrl}${coursePath}`
  if (typeof window !== 'undefined') {
    window.location.href = url
  }
  return url
}

// Subject mapping for course enrollment
export const SUBJECT_COURSE_MAPPING = {
  'hsfy-trial': 'trial',
  'biol111': 'biol111', 
  'chem111': 'chem111',
  'phsi111': 'phsi111',
  'hsci111': 'hsci111'
} as const

export type SubjectCode = keyof typeof SUBJECT_COURSE_MAPPING
export type CourseKey = typeof SUBJECT_COURSE_MAPPING[SubjectCode]
