import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, BookOpen, TrendingUp, Clock, Award, ExternalLink } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Kognyte</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</Link>
              <Link href="/careers" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Careers</Link>
              <Link href="/apply" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Apply</Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Login</Link>
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                Try Free Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master HSFY with
              <span className="text-blue-600"> Expert Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of University of Otago students who are acing their Health Sciences First Year 
              with our comprehensive question banks and detailed explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <BookOpen className="mr-2 h-6 w-6" />
                Start Free Trial
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">✅ No credit card required • ✅ Instant access • ✅ University approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Kognyte?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is specifically designed for HSFY students, with content created by top-performing graduates and current tutors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subject-Specific Banks</h3>
              <p className="text-gray-600">
                Comprehensive question collections for BIOL111, CHEM111, PHSI111, and HSCI111 
                with detailed explanations for every answer.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-green-50 border border-green-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Your Progress</h3>
              <p className="text-gray-600">
                Monitor your improvement across all subjects with detailed analytics 
                and performance insights that help identify weak areas.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tutors</h3>
              <p className="text-gray-600">
                Content created by University of Otago graduates who achieved A+ grades 
                in HSFY and current top-performing students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moodle Integration Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Seamless Moodle Integration</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Access Kognyte directly from your University of Otago Moodle course. 
              No separate login required - grades sync automatically to your gradebook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
                Try Moodle Integration
              </Link>
              <a 
                href="/MOODLE_INTEGRATION.md" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                target="_blank"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Integration Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Excel in HSFY?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the thousands of students already using Kognyte to master their Health Sciences studies. 
            Start your free trial today and see the difference quality questions make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login" 
              className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <ExternalLink className="mr-3 h-6 w-6" />
              Access Learning Platform
            </Link>
            <Link 
              href="/careers" 
              className="border-2 border-gray-300 text-gray-700 px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Users className="mr-3 h-6 w-6" />
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Kognyte</div>
              <p className="text-gray-400 mb-4">
                Empowering HSFY students at the University of Otago with expert-crafted practice questions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/login" className="hover:text-white transition-colors">Access Courses</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Free Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Join Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/careers" className="hover:text-white transition-colors">Become a Tutor</Link></li>
                <li><Link href="/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@kognyte.com" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kognyte. All rights reserved. Designed for University of Otago HSFY students.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
