import { AdminAiGeneratorPage } from '../pages/admin/AdminAiGeneratorPage'
import { AdminAssignQuizPage } from '../pages/admin/AdminAssignQuizPage'
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage'
import { AdminQuestionBankPage } from '../pages/admin/AdminQuestionBankPage'
import { AdminQuizCreatePage } from '../pages/admin/AdminQuizCreatePage'
import { AdminQuizListPage } from '../pages/admin/AdminQuizListPage'
import { AdminQuizPreviewPage } from '../pages/admin/AdminQuizPreviewPage'
import { AdminReportsPage } from '../pages/admin/AdminReportsPage'
import { StudentAttemptPage } from '../pages/student/StudentAttemptPage'
import { StudentDashboardPage } from '../pages/student/StudentDashboardPage'
import { StudentHistoryPage } from '../pages/student/StudentHistoryPage'
import { StudentHistoryDetailPage } from '../pages/student/StudentHistoryDetailPage'
import { StudentLeaderboardPage } from '../pages/student/StudentLeaderboardPage'
import { StudentProfilePage } from '../pages/student/StudentProfilePage'
import { StudentQuizResultPage } from '../pages/student/StudentQuizResultPage'
import { StudentQuizzesPage } from '../pages/student/StudentQuizzesPage'

export const adminPages = [
  { path: 'dashboard', component: AdminDashboardPage },
  { path: 'quizzes', component: AdminQuizListPage },
  { path: 'quizzes/create', component: AdminQuizCreatePage },
  { path: 'quizzes/edit/:quizId', component: AdminQuizCreatePage },
  { path: 'quizzes/preview', component: AdminQuizPreviewPage },
  { path: 'question-bank', component: AdminQuestionBankPage },
  { path: 'assign-quiz', component: AdminAssignQuizPage },
  { path: 'reports', component: AdminReportsPage },
  { path: 'ai-generator', component: AdminAiGeneratorPage },
]

export const studentPages = [
  { path: 'dashboard', component: StudentDashboardPage },
  { path: 'quizzes', component: StudentQuizzesPage },
  { path: 'attempt/:quizId', component: StudentAttemptPage },
  { path: 'result/:attemptId', component: StudentQuizResultPage },
  { path: 'history', component: StudentHistoryPage },
  { path: 'history/:attemptId', component: StudentHistoryDetailPage },
  { path: 'leaderboard', component: StudentLeaderboardPage },
  { path: 'profile', component: StudentProfilePage },
]