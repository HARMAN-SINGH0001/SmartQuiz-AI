import type { Attempt, LeaderboardEntry, Question, Quiz, QuizPreview, StudentProfile } from '../types'

export const courses = ['Computer Science', 'Business', 'Finance', 'Mathematics']
export const subjects = ['React', 'ERP Basics', 'TypeScript', 'Data Analysis']
export const modules = ['Introduction', 'Advanced Concepts', 'Assessment', 'Revision']

export const questionBank: Question[] = [
  {
    id: 'q1',
    type: 'mcq',
    title: 'React rendering',
    prompt: 'Which hook is commonly used for side effects in React components?',
    options: [
      { id: 'a', label: 'useMemo' },
      { id: 'b', label: 'useEffect', correct: true },
      { id: 'c', label: 'useReducer' },
      { id: 'd', label: 'useRef' },
    ],
    answer: 'useEffect',
    difficulty: 'Easy',
    tags: ['react', 'hooks'],
    explanation: 'useEffect is used for side effects such as fetching and subscriptions.',
  },
  {
    id: 'q2',
    type: 'multiple-select',
    title: 'State tools',
    prompt: 'Select the React primitives used for state management.',
    options: [
      { id: 'a', label: 'useState', correct: true },
      { id: 'b', label: 'useReducer', correct: true },
      { id: 'c', label: 'useQuery' },
      { id: 'd', label: 'useNavigate' },
    ],
    answer: ['useState', 'useReducer'],
    difficulty: 'Medium',
    tags: ['react', 'state'],
  },
  {
    id: 'q3',
    type: 'true-false',
    title: 'TypeScript safety',
    prompt: 'TypeScript can help reduce runtime errors in large ERP frontends.',
    options: [
      { id: 'a', label: 'True', correct: true },
      { id: 'b', label: 'False' },
    ],
    answer: 'True',
    difficulty: 'Easy',
    tags: ['typescript'],
  },
  {
    id: 'q4',
    type: 'fill-blank',
    title: 'Routing',
    prompt: 'The library used for client side navigation is ____.',
    answer: 'React Router',
    difficulty: 'Medium',
    tags: ['router'],
  },
]

export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'ERP React Foundation',
    description: 'Foundational quiz for the new ERP frontend training track.',
    course: 'Computer Science',
    subject: 'React',
    module: 'Introduction',
    duration: 30,
    passingMarks: 60,
    attempts: 3,
    instructions: 'Read each question carefully. Review later if uncertain.',
    shuffleQuestions: true,
    shuffleOptions: true,
    negativeMarking: false,
    published: true,
    questions: questionBank.slice(0, 3),
  },
  {
    id: 'quiz-2',
    title: 'TypeScript Essentials',
    description: 'Assessment focused on typing, inference, and safe refactoring.',
    course: 'Computer Science',
    subject: 'TypeScript',
    module: 'Assessment',
    duration: 20,
    passingMarks: 70,
    attempts: 2,
    instructions: 'Keep answers concise and use the review list for uncertain items.',
    shuffleQuestions: false,
    shuffleOptions: true,
    negativeMarking: true,
    published: false,
    questions: [questionBank[2], questionBank[3]],
  },
]

export const attempts: Attempt[] = [
  {
    id: 'attempt-1',
    quizId: 'quiz-1',
    quizTitle: 'ERP React Foundation',
    score: 8,
    percentage: 80,
    correct: 8,
    wrong: 2,
    skipped: 0,
    timeTaken: '18m 21s',
    passed: true,
    completedAt: '2026-06-25T10:15:00Z',
    questionIds: ['q1', 'q2', 'q3'],
  },
  {
    id: 'attempt-2',
    quizId: 'quiz-2',
    quizTitle: 'TypeScript Essentials',
    score: 6,
    percentage: 60,
    correct: 6,
    wrong: 3,
    skipped: 1,
    timeTaken: '15m 04s',
    passed: false,
    completedAt: '2026-06-27T13:10:00Z',
    questionIds: ['q3', 'q4'],
  },
]

export const studentProfile: StudentProfile = {
  name: 'Ariana Patel',
  email: 'ariana.patel@smartquiz.ai',
  program: 'Computer Science',
  cohort: '2026 Spring',
  level: 'Level 2 Learner',
  avatarInitials: 'AP',
  completedQuizzes: attempts.length,
  averageScore: 70,
  streakDays: 5,
}

export const leaderboard: LeaderboardEntry[] = [
  { id: 'leader-1', name: 'Maya Chen', initials: 'MC', score: 96, percentage: 96, quizzesCompleted: 8, streak: 12, rank: 1 },
  { id: 'leader-2', name: 'Noah Williams', initials: 'NW', score: 92, percentage: 92, quizzesCompleted: 8, streak: 10, rank: 2 },
  { id: 'leader-3', name: 'Ariana Patel', initials: 'AP', score: 89, percentage: 89, quizzesCompleted: 7, streak: 5, rank: 3 },
  { id: 'leader-4', name: 'Ibrahim Khan', initials: 'IK', score: 85, percentage: 85, quizzesCompleted: 7, streak: 4, rank: 4 },
  { id: 'leader-5', name: 'Sophia Green', initials: 'SG', score: 82, percentage: 82, quizzesCompleted: 6, streak: 3, rank: 5 },
]

export const yesterdayQuiz: QuizPreview = {
  id: 'quiz-3',
  title: "Yesterday's Rapid Revision",
  description: 'A short revision quiz that was assigned yesterday for catch-up practice.',
  course: 'Computer Science',
  subject: 'Revision',
  module: 'Assessment',
  duration: 12,
  instructions: 'Complete the quiz in one sitting and use the review list before submitting.',
  questionCount: 5,
  repeatedQuestionIds: [],
}

export const aiGeneratedQuestions: Question[] = [
  {
    id: 'ai-1',
    type: 'mcq',
    title: 'AI generated React question',
    prompt: 'Which React feature helps avoid unnecessary recalculation?',
    options: [
      { id: 'a', label: 'useMemo', correct: true },
      { id: 'b', label: 'useId' },
      { id: 'c', label: 'useSyncExternalStore' },
      { id: 'd', label: 'Suspense' },
    ],
    answer: 'useMemo',
    difficulty: 'Medium',
    tags: ['ai', 'react'],
  },
  {
    id: 'ai-2',
    type: 'true-false',
    title: 'AI generated architecture question',
    prompt: 'Mock services can be replaced later without changing the screen layout.',
    options: [
      { id: 'a', label: 'True', correct: true },
      { id: 'b', label: 'False' },
    ],
    answer: 'True',
    difficulty: 'Easy',
    tags: ['ai', 'mock-api'],
  },
]