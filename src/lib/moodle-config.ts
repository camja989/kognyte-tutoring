// Moodle integration configuration
export const MOODLE_CONFIG = {
  // MoodleCloud instance (will be created)
  moodleSiteUrl: 'https://joltvolt-hsfy.moodlecloud.com',
  
  // Course enrollment URLs
  courses: {
    trial: '/course/enrol.php?id=1', // FREE TRIAL course
    biol111: '/course/enrol.php?id=2', 
    chem111: '/course/enrol.php?id=3',
    phsi111: '/course/enrol.php?id=4', 
    hsci111: '/course/enrol.php?id=5'
  },
  
  // Registration and login URLs
  registerUrl: '/login/signup.php',
  loginUrl: '/login/index.php',
  
  // LTI configuration
  lti: {
    consumerKey: 'joltvolt_hsfy_2024',
    launchUrl: 'https://joltvolt-tutoring.netlify.app/api/lti/launch'
  }
}

// Utility functions for Moodle integration
export const redirectToMoodleLogin = (returnTo?: string) => {
  const params = new URLSearchParams()
  if (returnTo) {
    params.append('wantsurl', returnTo)
  }
  
  const url = `${MOODLE_CONFIG.moodleSiteUrl}${MOODLE_CONFIG.loginUrl}?${params.toString()}`
  window.location.href = url
}

export const redirectToMoodleRegistration = (course?: string) => {
  let url = `${MOODLE_CONFIG.moodleSiteUrl}${MOODLE_CONFIG.registerUrl}`
  
  // If specific course, redirect to that course after registration
  if (course && MOODLE_CONFIG.courses[course as keyof typeof MOODLE_CONFIG.courses]) {
    const courseUrl = MOODLE_CONFIG.courses[course as keyof typeof MOODLE_CONFIG.courses]
    url += `?wantsurl=${encodeURIComponent(courseUrl)}`
  }
  
  window.location.href = url
}

export const redirectToMoodleCourse = (courseId: string) => {
  const courseUrl = MOODLE_CONFIG.courses[courseId as keyof typeof MOODLE_CONFIG.courses]
  if (courseUrl) {
    window.location.href = `${MOODLE_CONFIG.moodleSiteUrl}${courseUrl}`
  } else {
    // Default to trial course
    window.location.href = `${MOODLE_CONFIG.moodleSiteUrl}${MOODLE_CONFIG.courses.trial}`
  }
}
