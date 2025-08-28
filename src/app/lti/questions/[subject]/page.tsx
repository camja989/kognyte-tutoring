'use client'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle, XCircle, BookOpen, BarChart3, Home } from 'lucide-react'
import { HSFY_SUBJECTS } from '@/lib/lti/types'

interface LTISession {
  userId: string
  roles: string[]
  resourceLinkId: string
  contextId: string
  consumerKey: string
  returnUrl?: string
  subject?: string
  sessionId: string
}

interface Question {
  id: number
  subject: string
  topic: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

// Sample questions for each HSFY subject
const subjectQuestions: Record<string, Question[]> = {
  biol111: [
    {
      id: 1,
      subject: 'BIOL111',
      topic: 'Cell Biology',
      question: 'Which of the following organelles is responsible for protein synthesis?',
      options: ['Mitochondria', 'Ribosomes', 'Lysosomes', 'Golgi apparatus'],
      correctAnswer: 1,
      explanation: 'Ribosomes are the cellular organelles responsible for protein synthesis. They translate mRNA into proteins by linking amino acids together.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      subject: 'BIOL111',
      topic: 'Genetics',
      question: 'What is the probability of two heterozygous parents (Aa × Aa) producing a homozygous recessive offspring?',
      options: ['25%', '50%', '75%', '100%'],
      correctAnswer: 0,
      explanation: 'In a Punnett square for Aa × Aa, the possible offspring are AA, Aa, Aa, aa. The probability of aa (homozygous recessive) is 1/4 or 25%.',
      difficulty: 'Medium'
    }
  ],
  chem111: [
    {
      id: 3,
      subject: 'CHEM111',
      topic: 'Atomic Structure',
      question: 'How many electrons can the third electron shell (n=3) hold at maximum?',
      options: ['8 electrons', '18 electrons', '32 electrons', '2 electrons'],
      correctAnswer: 1,
      explanation: 'The maximum number of electrons in a shell is given by 2n². For n=3: 2(3)² = 2 × 9 = 18 electrons.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      subject: 'CHEM111', 
      topic: 'Organic Chemistry',
      question: 'What is the molecular formula for glucose?',
      options: ['C₆H₁₂O₆', 'C₆H₁₀O₅', 'C₅H₁₀O₅', 'C₆H₁₄O₆'],
      correctAnswer: 0,
      explanation: 'Glucose has the molecular formula C₆H₁₂O₆. It is a simple sugar and an important energy source for living organisms.',
      difficulty: 'Easy'
    }
  ],
  phsi111: [
    {
      id: 5,
      subject: 'PHSI111',
      topic: 'Mechanics',
      question: 'If an object is dropped from rest and falls for 3 seconds (ignoring air resistance), what is its final velocity? (g = 9.8 m/s²)',
      options: ['9.8 m/s', '19.6 m/s', '29.4 m/s', '39.2 m/s'],
      correctAnswer: 2,
      explanation: 'Using the equation v = gt, where g = 9.8 m/s² and t = 3s, the final velocity is 9.8 × 3 = 29.4 m/s.',
      difficulty: 'Medium'
    }
  ],
  hsci111: [
    {
      id: 6,
      subject: 'HSCI111',
      topic: 'Health Systems',
      question: 'Which of the following is a primary healthcare intervention?',
      options: ['Emergency surgery', 'Vaccination programs', 'Intensive care treatment', 'Specialist consultation'],
      correctAnswer: 1,
      explanation: 'Vaccination programs are primary healthcare interventions focused on prevention. Primary care prevents disease before it occurs.',
      difficulty: 'Easy'
    }
  ]
}

export default function LTIQuestionPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const subject = params.subject as string
  const ltiSessionToken = searchParams.get('lti_session')

  const [session, setSession] = useState<LTISession | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])

  // Parse LTI session on component mount
  useEffect(() => {
    if (ltiSessionToken) {
      if (ltiSessionToken === 'demo_session') {
        // Demo session for testing
        setSession({
          userId: 'demo_student',
          roles: ['Learner'],
          resourceLinkId: 'demo_resource',
          contextId: 'demo_context',
          consumerKey: 'demo_consumer',
          subject: subject,
          sessionId: 'demo_session'
        })
      } else {
        try {
          const sessionData = JSON.parse(Buffer.from(ltiSessionToken, 'base64url').toString())
          setSession(sessionData)
        } catch (error) {
          console.error('Error parsing LTI session:', error)
        }
      }
    }
  }, [ltiSessionToken, subject])

  // Load questions for the subject
  useEffect(() => {
    const subjectQuestions = getQuestionsForSubject(subject)
    setQuestions(subjectQuestions)
    setAnsweredQuestions(new Array(subjectQuestions.length).fill(false))
  }, [subject])

  const getQuestionsForSubject = (subjectCode: string): Question[] => {
    return subjectQuestions[subjectCode.toLowerCase()] || []
  }

  const getSubjectInfo = (subjectCode: string) => {
    return HSFY_SUBJECTS.find(s => s.code.toLowerCase() === subjectCode.toLowerCase())
  }

  const handleAnswerSelect = async (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)
    
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    // Send score to Moodle if grade passback is available
    if (session?.resourceLinkId && isCorrect) {
      await sendScoreToMoodle(score + 1, questions.length)
    }
  }

  const sendScoreToMoodle = async (currentScore: number, totalQuestions: number) => {
    try {
      await fetch('/api/lti/grade-passback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionToken: ltiSessionToken,
          score: currentScore,
          maxScore: totalQuestions,
          resourceLinkId: session?.resourceLinkId
        })
      })
    } catch (error) {
      console.error('Error sending grade to Moodle:', error)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const returnToMoodle = () => {
    if (session?.returnUrl) {
      window.location.href = session.returnUrl
    }
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading LTI Session...</h1>
          <p className="text-gray-600">Please wait while we verify your Moodle session.</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t find questions for {subject.toUpperCase()}. 
            This might be a new subject we&apos;re still developing.
          </p>
          {session.returnUrl && (
            <button
              onClick={returnToMoodle}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              <Home className="inline mr-2 h-4 w-4" />
              Return to Moodle
            </button>
          )}
        </div>
      </div>
    )
  }

  const subjectInfo = getSubjectInfo(subject)
  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {subjectInfo?.name || subject.toUpperCase()}
              </h1>
              <p className="text-sm text-gray-600">
                LTI Session • User: {session.userId} • Context: {session.contextId}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Score: {score}/{questions.length}</div>
                <div className="text-xs text-gray-600">{Math.round((score/questions.length) * 100)}%</div>
              </div>
              {session.returnUrl && (
                <button
                  onClick={returnToMoodle}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
                >
                  <Home className="inline mr-1 h-4 w-4" />
                  Return to Moodle
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {currentQ.subject}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {currentQ.topic}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentQ.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                currentQ.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentQ.difficulty}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQ.question}</h2>
          </div>

          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 hover:border-blue-300"
              
              if (showExplanation) {
                if (index === currentQ.correctAnswer) {
                  buttonClass += " border-green-500 bg-green-50 text-green-900"
                } else if (index === selectedAnswer && index !== currentQ.correctAnswer) {
                  buttonClass += " border-red-500 bg-red-50 text-red-900"
                } else {
                  buttonClass += " border-gray-200 bg-gray-50 text-gray-600"
                }
              } else {
                buttonClass += selectedAnswer === index ? " border-blue-500 bg-blue-50" : " border-gray-200 hover:bg-gray-50"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answeredQuestions[currentQuestion]}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-4 text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showExplanation && index === currentQ.correctAnswer && (
                      <CheckCircle className="h-6 w-6 text-green-600 ml-2" />
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQ.correctAnswer && (
                      <XCircle className="h-6 w-6 text-red-600 ml-2" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">Explanation:</h3>
              <p className="text-blue-800">{currentQ.explanation}</p>
            </div>
          )}

          {showExplanation && currentQuestion < questions.length - 1 && (
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center"
              >
                Next Question
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}

          {showExplanation && currentQuestion === questions.length - 1 && (
            <div className="text-center space-y-4">
              <div className="text-2xl font-bold text-gray-900">
                Quiz Complete! Final Score: {score}/{questions.length} ({Math.round((score/questions.length) * 100)}%)
              </div>
              {session.returnUrl && (
                <button
                  onClick={returnToMoodle}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 inline-flex items-center"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Return to Moodle
                </button>
              )}
            </div>
          )}
        </div>

        {/* LTI Integration Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            🎓 Integrated with your Moodle course
          </h3>
          <p className="text-blue-800">
            Your progress and scores are automatically synced with your course gradebook. 
            Complete more questions to improve your understanding of {subjectInfo?.name}.
          </p>
        </div>
      </div>
    </div>
  )
}
