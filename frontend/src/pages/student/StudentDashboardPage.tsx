import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Modal } from '../../components/ui/Modal'
import { leaderboard, attempts, yesterdayQuiz, studentProfile } from '../../data/mockData'

export function StudentDashboardPage() {
  const [showYesterdayQuiz, setShowYesterdayQuiz] = useState(false)

  const topLeaderboard = leaderboard.slice(0, 3)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">Student Dashboard</h2>
          <p className="mt-1 text-sm text-slate-400">See the latest assignments, yesterday's quiz, and leaderboard momentum.</p>
        </div>
        <Button variant="secondary" onClick={() => setShowYesterdayQuiz(true)}>Open Yesterday's Quiz</Button>
      </div>
      <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        {[
          ['Assigned Quizzes', 4],
          ['Completed', studentProfile.completedQuizzes],
          ['Average Score', `${studentProfile.averageScore}%`],
          ['Streak', `${studentProfile.streakDays} days`],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          </Card>
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-white">Leaderboard Preview</h3>
              <p className="mt-1 text-sm text-slate-400">A quick look at your current standing.</p>
            </div>
            <Link to="/student/leaderboard">
              <Button variant="secondary">View Full Leaderboard</Button>
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {topLeaderboard.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                <div>
                  <p className="font-medium text-white">#{entry.rank} {entry.name}</p>
                  <p className="text-sm text-slate-400">{entry.quizzesCompleted} quizzes completed · {entry.streak} day streak</p>
                </div>
                <Badge tone={entry.rank === 1 ? 'success' : 'accent'}>{`${entry.percentage}%`}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-white">Yesterday's Quiz Preview</h3>
              <p className="mt-1 text-sm text-slate-400">A modal-ready preview for the last assigned quiz.</p>
            </div>
            <Badge tone="warning">New</Badge>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>{yesterdayQuiz.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">
                <p className="text-slate-400">Duration</p>
                <p className="mt-1 text-lg font-semibold text-white">{yesterdayQuiz.duration} min</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">
                <p className="text-slate-400">Questions</p>
                <p className="mt-1 text-lg font-semibold text-white">{yesterdayQuiz.questionCount}</p>
              </div>
            </div>
            <Button className="w-full" onClick={() => setShowYesterdayQuiz(true)}>Review Yesterday's Quiz</Button>
          </div>
        </Card>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold text-white">Recent Attempts</h3>
          <div className="mt-4 space-y-3">
            {attempts.map((attempt) => (
              <div key={attempt.id} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{attempt.quizTitle}</p>
                    <p className="text-sm text-slate-400">Completed {new Date(attempt.completedAt).toLocaleDateString()}</p>
                  </div>
                  <Badge tone={attempt.passed ? 'success' : 'warning'}>{`${attempt.percentage}%`}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/student/quizzes"><Button>Start Assigned Quiz</Button></Link>
            <Link to="/student/history"><Button variant="secondary">View History</Button></Link>
            <Link to="/student/profile"><Button variant="secondary">Open Profile</Button></Link>
          </div>
        </Card>
      </section>
      <Modal
        open={showYesterdayQuiz}
        title={yesterdayQuiz.title}
        onClose={() => setShowYesterdayQuiz(false)}
        footer={<Button onClick={() => setShowYesterdayQuiz(false)}>Start Quiz</Button>}
      >
        <div className="space-y-4 text-sm text-slate-300">
          <p>{yesterdayQuiz.description}</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-slate-400">Course</p>
              <p className="mt-1 text-white">{yesterdayQuiz.course}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-slate-400">Module</p>
              <p className="mt-1 text-white">{yesterdayQuiz.module}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-100">
            No repeated questions detected for this preview.
          </div>
        </div>
      </Modal>
    </div>
  )
}