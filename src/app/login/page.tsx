'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, User, Lock, Mail, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react'

export default function LoginPage() {
  const [loginType, setLoginType] = useState<'student' | 'moodle'>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    if (loginType === 'moodle') {
      // Simulate Moodle integration demo
      setTimeout(() => {
        setMessage('Moodle integration demo - redirecting to question bank...')
        setTimeout(() => {
          window.location.href = '/lti/questions/biol111?lti_session=demo_session'
        }, 1500)
      }, 1000)
      return
    }

    // Regular student login simulation
    setTimeout(() => {
      setIsLoading(false)
      if (email && password) {
        setMessage('Login successful! Redirecting to dashboard...')
        setTimeout(() => {
          window.location.href = '/demo'
        }, 1500)
      } else {
        setMessage('Please enter both email and password')
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
        <div className="max-w-md w-full space-y-8">
          {/* Login Type Selection */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sign In</h2>
            
            <div className="bg-white rounded-lg p-1 mb-6 flex">
              <button
                onClick={() => setLoginType('student')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  loginType === 'student'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Student Login
              </button>
              <button
                onClick={() => setLoginType('moodle')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  loginType === 'moodle'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Via Moodle
              </button>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {loginType === 'moodle' ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <ExternalLink className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Moodle Integration
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Access JoltVolt through your University of Otago Moodle course page, 
                    or try our demo integration below.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
                  <ol className="text-blue-800 text-sm space-y-1">
                    <li>1. Go to your HSFY course in Moodle</li>
                    <li>2. Click the "JoltVolt Practice Questions" activity</li>
                    <li>3. Automatically sign in with your student ID</li>
                    <li>4. Complete questions and sync grades to Moodle</li>
                  </ol>
                </div>

                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Try Moodle Integration Demo
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    For University of Otago students only. 
                    <br />
                    Contact IT Services for Moodle setup.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <User className="mr-2 h-5 w-5" />
                      Sign In
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/demo" className="font-medium text-blue-600 hover:text-blue-500">
                      Try our free demo
                    </Link>
                  </p>
                </div>
              </form>
            )}

            {/* Message Display */}
            {message && (
              <div className={`mt-4 p-4 rounded-lg flex items-center ${
                message.includes('successful') || message.includes('demo') 
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {message.includes('successful') || message.includes('demo') ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <span className="text-sm">{message}</span>
              </div>
            )}
          </div>

          {/* Additional Options */}
          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
            <div className="space-y-3">
              <Link 
                href="/demo" 
                className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Try Free Demo
              </Link>
              <Link 
                href="/pricing" 
                className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View Pricing
              </Link>
              <Link 
                href="/careers" 
                className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Become a Tutor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
