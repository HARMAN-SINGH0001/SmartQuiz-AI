export type NavItem = {
  label: string
  path: string
  icon: string
}

export const adminNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'overview' },
  { label: 'Quiz List', path: '/admin/quizzes', icon: 'list' },
  { label: 'Create Quiz', path: '/admin/quizzes/create', icon: 'create' },
  { label: 'Question Bank', path: '/admin/question-bank', icon: 'bank' },
  { label: 'Quiz Preview', path: '/admin/quizzes/preview', icon: 'preview' },
  { label: 'Assign Quiz', path: '/admin/assign-quiz', icon: 'assign' },
  { label: 'Reports', path: '/admin/reports', icon: 'report' },
  { label: 'AI Quiz Generator', path: '/admin/ai-generator', icon: 'ai' },
]

export const studentNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/student/dashboard', icon: 'overview' },
  { label: 'Assigned Quizzes', path: '/student/quizzes', icon: 'list' },
  { label: 'History', path: '/student/history', icon: 'history' },
  { label: 'Leaderboard', path: '/student/leaderboard', icon: 'leaderboard' },
  { label: 'Profile', path: '/student/profile', icon: 'profile' },
]