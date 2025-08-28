'use client'

// useState removed - not used
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Trophy, CheckCircle, Target, Zap } from 'lucide-react'

export default function HomePage() {

  const stats = [
    { label: 'HSFY Students Helped', value: '500+' },
    { label: 'Success Rate', value: '94%' },
    { label: 'MCQ Questions', value: '10K+' },
    { label: 'Expert Tutors', value: '50+' }
  ]

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'MCQ Question Banks',
      description: 'Comprehensive question banks for all HSFY papers at University of Otago'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Expert Tutoring',
      description: 'One-on-one sessions with top-performing health science students'
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      title: 'Compete & Learn',
      description: 'Challenge friends and climb leaderboards while studying'
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: 'Targeted Learning',
      description: 'Focus on your weak areas with AI-powered recommendations'
    }
  ]

  const subjects = [
    'PHSI191 - Human Body Systems',
    'CHEM191 - Molecular Science',
    'BCHM191 - Biological Chemistry',
    'PHSI192 - Cellular Physiology',
    'CHEM192 - Chemical Reactions',
    'BCHM192 - Biochemical Processes'
  ]

  const pricing = [
    {
      name: 'Single Subject',
      price: '$19.99',
      original: '$29.99',
      features: ['1 MCQ Question Bank', '500+ Questions', '30 Days Access', 'Progress Tracking']
    },
    {
      name: 'HSFY Complete',
      price: '$89.99',
      original: '$179.99',
      popular: true,
      features: ['All 6 Subject Banks', '3000+ Questions', '1 Year Access', 'Priority Support', 'Leaderboards', 'Study Groups']
    },
    {
      name: 'Premium + Tutoring',
      price: '$199.99',
      original: '$299.99',
      features: ['Everything in Complete', '4 Private Tutoring Sessions', 'Custom Study Plans', 'Exam Prep Sessions']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">JoltVolt</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</Link>
                <Link href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</Link>
                <Link href="/demo" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Careers</Link>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Login</Link>
                <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Try Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ace Your <span className="text-blue-600">HSFY</span> at Otago
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The smartest way to study Health Sciences First Year. Get access to premium MCQ banks, 
              expert tutoring, and compete with peers. Better than LearnQuick, at half the price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#demo" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50">
                See Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JoltVolt?</h2>
            <p className="text-xl text-gray-600">Everything you need to excel in HSFY</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete HSFY Coverage</h2>
            <p className="text-xl text-gray-600">All the subjects you need to master</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-900">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Affordable Pricing</h2>
            <p className="text-xl text-gray-600">Better than LearnQuick, at half the cost</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 line-through ml-2">{plan.original}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${
                    plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}>
                    Try Free Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Excel in HSFY?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of successful Otago students</p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">JoltVolt</span>
              </div>
              <p className="text-gray-400">Empowering HSFY students at University of Otago to achieve their dreams.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/demo">Demo</Link></li>
                <li><Link href="/api">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/demo">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/security">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 JoltVolt. All rights reserved. Helping Otago HSFY students succeed.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
