'use client'

// useState removed - not used
import Link from 'next/link'
import { Zap, DollarSign, Clock, Users, BookOpen, Video, Edit3, ArrowRight, Star, CheckCircle } from 'lucide-react'

export default function CareersPage() {

  const jobTypes = [
    {
      id: 'tutor',
      title: 'Online Tutor',
      hourlyRate: '$35-50/hour',
      description: 'Conduct one-on-one tutoring sessions via Zoom',
      requirements: ['HSFY graduate with A+ grades', 'Excellent communication skills', 'Flexible schedule'],
      benefits: ['Flexible hours', 'Work from home', 'High hourly rate', 'Build your reputation']
    },
    {
      id: 'content-creator',
      title: 'MCQ Content Creator',
      hourlyRate: '$25-40/hour',
      description: 'Create high-quality MCQ questions for HSFY subjects',
      requirements: ['Strong HSFY knowledge', 'Attention to detail', 'Research skills'],
      benefits: ['Flexible hours', 'Remote work', 'Skill development', 'Academic contribution']
    },
    {
      id: 'lead-tutor',
      title: 'Lead Subject Tutor',
      hourlyRate: '$50-75/hour',
      description: 'Lead tutor for specific subjects, mentor other tutors',
      requirements: ['2+ years tutoring experience', 'Subject matter expertise', 'Leadership skills'],
      benefits: ['Premium rate', 'Leadership role', 'Mentor others', 'Career advancement']
    }
  ]

  const currentOpenings = [
    {
      title: 'PHSI191 Tutor',
      type: 'Part-time',
      rate: '$40/hour',
      location: 'Remote',
      description: 'Seeking experienced tutor for Human Body Systems',
      requirements: ['A+ in PHSI191', '20+ hours availability/week'],
      urgent: true
    },
    {
      title: 'Chemistry MCQ Creator',
      type: 'Contract',
      rate: '$30/hour',
      location: 'Remote',
      description: 'Create 200+ MCQ questions for CHEM191/192',
      requirements: ['Strong chemistry background', 'Question writing experience'],
      urgent: false
    },
    {
      title: 'Biochemistry Lead Tutor',
      type: 'Part-time',
      rate: '$60/hour',
      location: 'Remote',
      description: 'Lead our biochemistry tutoring team',
      requirements: ['BCHM expertise', 'Management experience'],
      urgent: true
    },
    {
      title: 'Study Group Facilitator',
      type: 'Casual',
      rate: '$35/hour',
      location: 'Remote',
      description: 'Facilitate online study groups for HSFY students',
      requirements: ['Group management skills', 'HSFY background'],
      urgent: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'PHSI Tutor',
      image: '/avatars/sarah.jpg',
      quote: 'Working with JoltVolt has been amazing. I make $45/hour helping students while building my CV for med school.',
      rating: 5
    },
    {
      name: 'James L.',
      role: 'Content Creator',
      image: '/avatars/james.jpg',
      quote: 'Creating MCQ questions is perfect for my schedule. Great pay and I get to contribute to student success.',
      rating: 5
    },
    {
      name: 'Emily R.',
      role: 'Lead Tutor',
      image: '/avatars/emily.jpg',
      quote: 'The leadership opportunities here are incredible. I run my own team and earn $65/hour.',
      rating: 5
    }
  ]

  const stats = [
    { label: 'Average Hourly Rate', value: '$42' },
    { label: 'Tutors Earning 40+/hr', value: '85%' },
    { label: 'Flexible Schedule', value: '100%' },
    { label: 'Student Success Rate', value: '94%' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">JoltVolt</span>
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
                <Link href="/careers" className="text-blue-600 px-3 py-2 text-sm font-medium">Careers</Link>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Login</Link>
                <Link href="/apply" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Apply Now
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
              Join Our <span className="text-blue-600">Elite</span> Tutor Team
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Earn $35-75/hour helping HSFY students succeed. Flexible hours, remote work, 
              and the satisfaction of making a real difference in students&apos; academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#jobs" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50">
                Browse Jobs
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

      {/* Job Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Multiple ways to earn with JoltVolt</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {jobTypes.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {job.id === 'tutor' && <Video className="h-8 w-8 text-blue-600" />}
                    {job.id === 'content-creator' && <Edit3 className="h-8 w-8 text-blue-600" />}
                    {job.id === 'lead-tutor' && <Users className="h-8 w-8 text-blue-600" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-4">{job.hourlyRate}</div>
                  <p className="text-gray-600 mb-6">{job.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply for {job.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">High-paying positions available now</p>
          </div>
          
          <div className="space-y-6">
            {currentOpenings.map((opening, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{opening.title}</h3>
                      {opening.urgent && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          URGENT
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {opening.type}
                      </span>
                      <span className="flex items-center text-green-600">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {opening.rate}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {opening.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{opening.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {opening.requirements.map((req, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Tutors Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic"><p className="text-gray-600 italic">                <p className="text-gray-600 italic">"{testimonial.quote}"ldquo;{testimonial.quote}"{testimonial.quote}"rdquo;</p>ldquo;{testimonial.quote}                <p className="text-gray-600 italic">"{testimonial.quote}"ldquo;{testimonial.quote}"{testimonial.quote}"rdquo;</p>rdquo;</p>ldquo;{testimonial.quote}<p className="text-gray-600 italic">                <p className="text-gray-600 italic">"{testimonial.quote}"ldquo;{testimonial.quote}"{testimonial.quote}"rdquo;</p>ldquo;{testimonial.quote}                <p className="text-gray-600 italic">"{testimonial.quote}"ldquo;{testimonial.quote}"{testimonial.quote}"rdquo;</p>rdquo;</p>rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
          <p className="text-xl text-blue-100 mb-8">Join our elite team of tutors and content creators</p>
          <Link href="/apply" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            Apply Today <ArrowRight className="ml-2 h-5 w-5" />
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
              <p className="text-gray-400">Join our mission to help HSFY students succeed at University of Otago.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Tutors</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/apply">Apply Now</Link></li>
                <li><Link href="/tutor-resources">Resources</Link></li>
                <li><Link href="/training">Training</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/careers">Careers</Link></li>
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
                <li>careers@joltvolt.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 JoltVolt. All rights reserved. Building the future of HSFY education.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
