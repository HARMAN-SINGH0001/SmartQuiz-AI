import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Table } from '../../components/ui/Table'
import { leaderboard } from '../../data/mockData'

export function StudentLeaderboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Student Leaderboard</h2>
        <p className="mt-1 text-sm text-slate-400">Track the highest performing learners and your current placement.</p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {leaderboard.slice(0, 3).map((entry) => (
          <Card key={entry.id}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Rank {entry.rank}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{entry.name}</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 font-semibold text-cyan-100">
                {entry.initials}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <Badge tone={entry.rank === 1 ? 'success' : 'accent'}>{`${entry.percentage}%`}</Badge>
              <p className="text-sm text-slate-400">{entry.quizzesCompleted} quizzes</p>
            </div>
          </Card>
        ))}
      </section>
      <Card>
        <Table
          data={leaderboard}
          columns={[
            { header: 'Rank', render: (entry) => `#${entry.rank}` },
            { header: 'Student', render: (entry) => entry.name },
            { header: 'Score', render: (entry) => `${entry.score}` },
            { header: 'Percentage', render: (entry) => `${entry.percentage}%` },
            { header: 'Quizzes', render: (entry) => `${entry.quizzesCompleted}` },
            { header: 'Streak', render: (entry) => `${entry.streak} days` },
          ]}
        />
      </Card>
    </div>
  )
}