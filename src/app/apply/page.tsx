'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Upload, CheckCircle, User, Mail, Phone, GraduationCap, Clock, DollarSign } from 'lucide-react'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    graduationYear: '',
    currentYear: '',
    gpa: '',
    subjects: [],
    position: '',
    experience: '',
    availability: '',
    hourlyRate: '',
    motivation: '',
    resume: null,
    transcript: null
  })

  const [step, setStep] = useState(1)
  const totalSteps = 4

  const hsyfSubjects = [
    'PHSI191 - Human Body Systems I',
    'PHSI192 - Human Body Systems II', 
    'CHEM191 - Molecular Science',
    'CHEM192 - Chemical Reactivity',
    'BCHM191 - Biological Chemistry',
    'MATH151 - Intro Statistics & Modelling',
    'PHYS191 - Physics for Life Sciences',
    'GENE191 - Genes, Development & Evolution'
  ]

  const positions = [
    { id: 'tutor', title: 'Online Tutor', rate: '$35-50/hour' },
    { id: 'content-creator', title: 'MCQ Content Creator', rate: '$25-40/hour' },
    { id: 'lead-tutor', title: 'Lead Subject Tutor', rate: '$50-75/hour' },
    { id: 'facilitator', title: 'Study Group Facilitator', rate: '$35-45/hour' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'transcript') => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, [type]: file }))
    }
  }

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Application submitted:', formData)
    alert('Application submitted successfully! We\'ll be in touch within 48 hours.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                <Link href="/careers" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Careers</Link>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Join Our Elite Tutor Team</h1>
          <p className="text-lg text-gray-600">Start earning $35-75/hour helping HSFY students succeed</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic Background */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Academic Background</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select University</option>
                      <option value="otago">University of Otago</option>
                      <option value="auckland">University of Auckland</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Year of Study</label>
                    <select
                      name="currentYear"
                      value={formData.currentYear}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgrad">Postgraduate</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">HSFY GPA</label>
                    <select
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select GPA Range</option>
                      <option value="8.5-9.0">8.5 - 9.0 (A+)</option>
                      <option value="8.0-8.4">8.0 - 8.4 (A)</option>
                      <option value="7.5-7.9">7.5 - 7.9 (A-)</option>
                      <option value="7.0-7.4">7.0 - 7.4 (B+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Graduation</label>
                    <input
                      type="text"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      placeholder="e.g., 2025"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">HSFY Subjects (Select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {hsyfSubjects.map((subject) => (
                      <label key={subject} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.subjects.includes(subject)}
                          onChange={() => handleSubjectChange(subject)}
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Position & Availability */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Position & Availability</h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Position</label>
                  <div className="space-y-3">
                    {positions.map((position) => (
                      <label key={position.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="position"
                          value={position.id}
                          checked={formData.position === position.id}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{position.title}</div>
                          <div className="text-green-600 font-semibold">{position.rate}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Hours per Week</option>
                    <option value="5-10">5-10 hours</option>
                    <option value="10-15">10-15 hours</option>
                    <option value="15-20">15-20 hours</option>
                    <option value="20+">20+ hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Desired Hourly Rate</label>
                  <select
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Rate Range</option>
                    <option value="25-30">$25-30/hour</option>
                    <option value="30-35">$30-35/hour</option>
                    <option value="35-40">$35-40/hour</option>
                    <option value="40-45">$40-45/hour</option>
                    <option value="45+">$45+/hour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Tutoring Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe any tutoring, mentoring, or teaching experience..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Final Details */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Upload className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Final Details</h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join JoltVolt?</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your motivation to help HSFY students succeed..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume/CV</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(e, 'resume')}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer text-blue-600 hover:text-blue-700">
                        Click to upload or drag and drop
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 5MB</p>
                      {formData.resume && (
                        <div className="mt-2 flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-sm">{formData.resume.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Academic Transcript (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(e, 'transcript')}
                        accept=".pdf"
                        className="hidden"
                        id="transcript-upload"
                      />
                      <label htmlFor="transcript-upload" className="cursor-pointer text-blue-600 hover:text-blue-700">
                        Click to upload or drag and drop
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PDF up to 5MB</p>
                      {formData.transcript && (
                        <div className="mt-2 flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-sm">{formData.transcript.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg font-medium ${
                  step === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-green-700 flex items-center"
                >
                  Submit Application
                  <CheckCircle className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Benefits Sidebar */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Join JoltVolt?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <DollarSign className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">High Earnings</div>
                <div className="text-sm text-gray-600">Earn $35-75/hour</div>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">Flexible Schedule</div>
                <div className="text-sm text-gray-600">Work when you want</div>
              </div>
            </div>
            <div className="flex items-start">
              <GraduationCap className="h-5 w-5 text-purple-600 mt-1 mr-2 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">Build Experience</div>
                <div className="text-sm text-gray-600">Enhance your CV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
