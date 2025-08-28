'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight, Zap, BookOpen, BarChart3, Clock, Users, Trophy } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Demo Access',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for trying out our platform',
      features: [
        '5 sample questions',
        'Basic explanations',
        'No time limits',
        'Mobile friendly'
      ],
      cta: 'Try Demo',
      href: '/demo',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'HSFY Complete',
      price: '$29',
      period: 'per semester',
      description: 'Everything you need to ace HSFY',
      features: [
        '10,000+ practice questions',
        'All HSFY subjects covered',
        'Detailed explanations',
        'Progress tracking',
        'Weak area identification',
        'Exam simulation mode',
        'Mobile & desktop access',
        'Study streak tracking'
      ],
      cta: 'Start Learning',
      href: '/signup',
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'HSFY Premium',
      price: '$49',
      period: 'per semester',
      description: 'For serious students who want the best',
      features: [
        'Everything in Complete',
        'Private 1-on-1 tutoring (2 hours)',
        'Priority support',
        'Study plan creation',
        'Performance analytics',
        'Predictive scoring',
        'Group study sessions',
        'Early access to new content'
      ],
      cta: 'Go Premium',
      href: '/signup?plan=premium',
      popular: false,
      color: 'border-purple-500'
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Coverage',
      description: 'Questions covering all HSFY papers: Biology, Chemistry, Physics, and Health Sciences'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track your progress, identify weak areas, and get personalized study recommendations'
    },
    {
      icon: Clock,
      title: 'Exam Simulation',
      description: 'Practice with timed tests that mirror real HSFY exam conditions'
    },
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Connect with other HSFY students and learn together'
    },
    {
      icon: Trophy,
      title: 'Success Guarantee',
      description: 'Join the 94% of our students who improve their grades significantly'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate explanations and understand your mistakes right away'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Choose Your <span className="text-blue-600">Success</span> Plan
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Start with our free demo, then unlock the complete HSFY question bank. 
          Join thousands of students who&apos;ve improved their grades with JoltVolt.
        </p>
        
        {/* Pricing comparison */}
        <div className="bg-blue-600 text-white px-6 py-3 rounded-full inline-block mb-12">
          <span className="font-semibold">💡 Save 40% compared to LearnQuick NZ!</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period !== 'Forever' && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full block text-center px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for HSFY students, with features 
              that address the unique challenges of health science studies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join 500+ HSFY Students Already Succeeding
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
              <div className="text-gray-600">Average Grade Increase</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Questions Completed Daily</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Student Satisfaction</div>
            </div>
          </div>
          
          <blockquote className="text-xl text-gray-600 italic max-w-4xl mx-auto">
            &ldquo;JoltVolt&apos;s question bank is exactly what I needed for HSFY. The explanations are 
            clear, the questions are challenging, and the price is unbeatable. I improved my grades 
            by 20% in just one semester!&rdquo;
            <cite className="block mt-4 text-gray-900 font-semibold">- Sarah M., HSFY Student</cite>
          </blockquote>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "How does JoltVolt compare to LearnQuick NZ?",
                answer: "We offer 40% better value with more questions, better explanations, and modern technology. Our platform is specifically designed for HSFY students with University of Otago-focused content."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes! Our subscriptions are semester-based with no long-term commitments. You can cancel anytime and keep access until the end of your current semester."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Absolutely. If you're not satisfied within the first 14 days, we'll provide a full refund, no questions asked."
              },
              {
                question: "Do you have content for all HSFY papers?",
                answer: "Yes, we cover all core HSFY subjects: Biology (BIOL 111), Chemistry (CHEM 111), Physics (PHSI 111), and Health Sciences (HSCI 111)."
              },
              {
                question: "Can I access this on my phone?",
                answer: "Yes! Our platform works perfectly on desktop, tablet, and mobile devices. Study anywhere, anytime."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your HSFY Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful HSFY students. Start with our free demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Try Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/signup"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 inline-flex items-center justify-center"
            >
              Start Full Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
