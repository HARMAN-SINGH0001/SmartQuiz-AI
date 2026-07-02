import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { quizzes, attempts } from '../../data/mockData'

export function AdminDashboardPage() {
  const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0)
  const passRate = Math.round((attempts.filter((attempt) => attempt.passed).length / attempts.length) * 100)

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-4">
        {[
          ['Quizzes', quizzes.length],
          ['Questions', totalQuestions],
          ['Pass rate', `${passRate}%`],
          ['Attempts', attempts.length],
        ].map(([label, value]) => (
          <Card key={label} className="p-6">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Quiz health</p>
              <h2 className="mt-1 text-xl font-semibold text-white">Recent platform activity</h2>
            </div>
            <Badge tone="accent">Live mock data</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm text-cyan-200">{quiz.title}</p>
                <p className="mt-2 text-xs text-slate-400">{quiz.questions.length} questions</p>
                <div className="mt-4 h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-cyan-400" style={{ width: `${quiz.published ? 86 : 44}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Alerts</p>
          <h2 className="mt-1 text-xl font-semibold text-white">Operational notes</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Two quizzes are ready for assignment.</li>
            <li>• One draft is pending final review.</li>
            <li>• AI generation is connected to the mock response layer.</li>
          </ul>
        </Card>
      </section>
    </div>
  )
}