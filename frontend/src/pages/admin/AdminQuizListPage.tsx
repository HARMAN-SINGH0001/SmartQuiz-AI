import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { quizzes } from '../../data/mockData'

export function AdminQuizListPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">Quiz List</h2>
          <p className="mt-1 text-sm text-slate-400">Manage active quizzes, drafts, and assignments.</p>
        </div>
        <Link to="/admin/quizzes/create">
          <Button>Create Quiz</Button>
        </Link>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {quizzes.map((quiz) => (
          <Card key={quiz.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{quiz.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{quiz.description}</p>
              </div>
              <Badge tone={quiz.published ? 'success' : 'warning'}>{quiz.published ? 'Published' : 'Draft'}</Badge>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-4">
              <Stat label="Duration" value={`${quiz.duration}m`} />
              <Stat label="Passing" value={`${quiz.passingMarks}%`} />
              <Stat label="Attempts" value={`${quiz.attempts}`} />
              <Stat label="Questions" value={`${quiz.questions.length}`} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to="/admin/quizzes/preview">
                <Button variant="secondary" size="sm">Preview</Button>
              </Link>
              <Link to={`/admin/quizzes/edit/${quiz.id}`}>
                <Button variant="secondary" size="sm">Edit</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-base font-medium text-white">{value}</p>
    </div>
  )
}