import { Link, useParams } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { attempts, quizzes } from '../../data/mockData'

export function StudentHistoryDetailPage() {
  const { attemptId } = useParams()
  const attempt = attempts.find((item) => item.id === attemptId) ?? attempts[0]
  const quiz = quizzes.find((item) => item.id === attempt.quizId) ?? quizzes[0]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">Quiz Attempt Detail</h2>
          <p className="mt-1 text-sm text-slate-400">Review scores, repeated question status, and the option to reattempt.</p>
        </div>
        <Link to={`/student/attempt/${quiz.id}`}>
          <Button>Reattempt Quiz</Button>
        </Link>
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Quiz', attempt.quizTitle],
          ['Score', `${attempt.score}/${quiz.questions.length}`],
          ['Percentage', `${attempt.percentage}%`],
          ['Status', attempt.passed ? 'Pass' : 'Fail'],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
          </Card>
        ))}
      </section>
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">Past Attempt Score View</h3>
            <p className="mt-1 text-sm text-slate-400">This attempt completed on {new Date(attempt.completedAt).toLocaleDateString()}.</p>
          </div>
          <Badge tone={attempt.passed ? 'success' : 'warning'}>{attempt.passed ? 'Pass' : 'Retry recommended'}</Badge>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-slate-400">Correct</p>
            <p className="mt-2 text-2xl font-semibold text-white">{attempt.correct}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-slate-400">Wrong</p>
            <p className="mt-2 text-2xl font-semibold text-white">{attempt.wrong}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-slate-400">Skipped</p>
            <p className="mt-2 text-2xl font-semibold text-white">{attempt.skipped}</p>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          No repeated questions in this attempt review.
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="secondary">View Answer Review</Button>
          <Link to="/student/history"><Button variant="secondary">Back to History</Button></Link>
        </div>
      </Card>
    </div>
  )
}