'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, User, ExternalLink, BookOpen, Users, GraduationCap } from 'lucide-react'
import { redirectToMoodleLogin, redirectToMoodleRegistration, redirectToMoodleCourse } from '@/lib/moodle-config'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleMoodleAction = (action: 'login' | 'register' | 'trial') => {
    setIsLoading(true)
    setMessage('Redirecting to Moodle Learning Platform...')
    
    setTimeout(() => {
      if (action === 'login') {
        redirectToMoodleLogin('/course/enrol.php?id=1') // Redirect to trial course after login
      } else if (action === 'register') {
        redirectToMoodleRegistration('trial') // Register and enroll in trial
      } else if (action === 'trial') {
        redirectToMoodleCourse('trial') // Direct to trial course
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="text-2xl font-bold text-gray-900">
              JoltVolt
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full space-y-8">
          {/* Main Header */}
          <div className="text-center">
            <div className="mx-auto h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Access Your HSFY Learning Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of University of Otago students mastering HSFY with our interactive question banks
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Existing Students */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Existing Students
                </h2>
                <p className="text-gray-600">
                  Already have a Moodle account? Sign in to continue your learning journey.
                </p>
              </div>

              <button
                onClick={() => handleMoodleAction('login')}
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <ExternalLink className="mr-3 h-6 w-6" />
                    Sign In to Moodle
                  </>
                )}
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                Access all your enrolled courses and track your progress
              </div>
            </div>

            {/* New Students */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  New Students
                </h2>
                <p className="text-gray-600">
                  Create your free account and get instant access to our HSFY trial course.
                </p>
              </div>

              <button
                onClick={() => handleMoodleAction('register')}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <BookOpen className="mr-3 h-6 w-6" />
                    Create Free Account
                  </>
                )}
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                Start with our FREE trial - no payment required
              </div>
            </div>
          </div>

          {/* Free Trial CTA */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Start Your FREE Trial</h3>
            <p className="text-lg text-indigo-100 mb-6">
              Get immediate access to sample questions from all HSFY subjects. 
              No registration required - perfect for trying before you commit!
            </p>
            
            <button
              onClick={() => handleMoodleAction('trial')}
              disabled={isLoading}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center text-lg"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
              ) : (
                <>
                  <ExternalLink className="mr-3 h-6 w-6" />
                  Access Free Trial Course
                </>
              )}
            </button>
          </div>

          {/* Status Message */}
          {message && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
                <span className="text-blue-800 font-medium">{message}</span>
              </div>
            </div>
          )}

          {/* Course Information */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Available Courses</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-800">BIOL111</div>
                <div className="text-sm text-green-600">Biology</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-800">CHEM111</div>
                <div className="text-sm text-blue-600">Chemistry</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-800">PHSI111</div>
                <div className="text-sm text-purple-600">Physics</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-semibold text-orange-800">HSCI111</div>
                <div className="text-sm text-orange-600">Health Sci</div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center text-gray-600">
            <p className="text-sm">
              🔒 Secure Moodle platform • 📱 Mobile friendly • 🎓 University approved
            </p>
            <p className="text-xs mt-2">
              By using our platform, you agree to our{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
