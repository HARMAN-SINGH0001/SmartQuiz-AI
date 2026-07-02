export type Role = 'admin' | 'student'

export type Option = {
  id: string
  label: string
  correct?: boolean
}

export type QuestionType =
  | 'mcq'
  | 'multiple-select'
  | 'true-false'
  | 'fill-blank'
  | 'short-answer'
  | 'long-answer'

export type Question = {
  id: string
  type: QuestionType
  title: string
  prompt: string
  options?: Option[]
  answer?: string | string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  tags: string[]
  explanation?: string
}

export type Quiz = {
  id: string
  title: string
  description: string
  course: string
  subject: string
  module: string
  duration: number
  passingMarks: number
  attempts: number
  instructions: string
  shuffleQuestions: boolean
  shuffleOptions: boolean
  negativeMarking: boolean
  published: boolean
  questions: Question[]
}

export type Attempt = {
  id: string
  quizId: string
  quizTitle: string
  score: number
  percentage: number
  correct: number
  wrong: number
  skipped: number
  timeTaken: string
  passed: boolean
  completedAt: string
  questionIds: string[]
}

export type StudentProfile = {
  name: string
  email: string
  program: string
  cohort: string
  level: string
  avatarInitials: string
  completedQuizzes: number
  averageScore: number
  streakDays: number
}

export type LeaderboardEntry = {
  id: string
  name: string
  initials: string
  score: number
  percentage: number
  quizzesCompleted: number
  streak: number
  rank: number
}

export type QuizPreview = {
  id: string
  title: string
  description: string
  course: string
  subject: string
  module: string
  duration: number
  instructions: string
  questionCount: number
  repeatedQuestionIds: string[]
}

export type FilterState = {
  search: string
  tag: string
  difficulty: string
}

export type AiGenerationRequest = {
  course: string
  subject: string
  module: string
  difficulty: string
  questionType: QuestionType | 'mixed'
  numberOfQuestions: number
  language: string
  instructions: string
}