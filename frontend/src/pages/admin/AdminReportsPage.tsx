import { Card } from '../../components/ui/Card'
import { Table } from '../../components/ui/Table'
import { attempts } from '../../data/mockData'

export function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Reports</h2>
        <p className="mt-1 text-sm text-slate-400">Charts, tables, leaderboard, average score, and attempt history.</p>
      </div>
      <section className="grid gap-4 lg:grid-cols-3">
        {['Average Score', 'Leaderboard', 'Attempt History'].map((item) => (
          <Card key={item} className="h-44">
            <p className="text-sm text-slate-400">{item}</p>
            <div className="mt-8 h-20 rounded-2xl border border-dashed border-slate-700 bg-slate-950/50" />
          </Card>
        ))}
      </section>
      <Table
        data={attempts}
        columns={[
          { header: 'Quiz', render: (attempt) => attempt.quizTitle },
          { header: 'Score', render: (attempt) => `${attempt.score}/${attempt.correct + attempt.wrong + attempt.skipped}` },
          { header: 'Percentage', render: (attempt) => `${attempt.percentage}%` },
          { header: 'Pass/Fail', render: (attempt) => (attempt.passed ? 'Pass' : 'Fail') },
        ]}
      />
    </div>
  )
}