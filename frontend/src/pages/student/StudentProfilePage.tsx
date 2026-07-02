import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { studentProfile } from '../../data/mockData'

export function StudentProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Student Profile</h2>
        <p className="mt-1 text-sm text-slate-400">Review your learner details and performance snapshot.</p>
      </div>
      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/15 text-2xl font-semibold text-cyan-100 ring-1 ring-cyan-400/30">
              {studentProfile.avatarInitials}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{studentProfile.name}</h3>
              <p className="text-sm text-slate-400">{studentProfile.email}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-slate-400">Program</p>
              <p className="mt-1 text-white">{studentProfile.program}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-slate-400">Cohort</p>
              <p className="mt-1 text-white">{studentProfile.cohort}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-slate-400">Level</p>
              <p className="mt-1 text-white">{studentProfile.level}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-slate-400">Streak</p>
              <p className="mt-1 text-white">{studentProfile.streakDays} days</p>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold text-white">Performance Snapshot</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-sm text-slate-400">Completed</p>
              <p className="mt-2 text-3xl font-semibold text-white">{studentProfile.completedQuizzes}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-sm text-slate-400">Average Score</p>
              <p className="mt-2 text-3xl font-semibold text-white">{studentProfile.averageScore}%</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-sm text-slate-400">Rank</p>
              <p className="mt-2 text-3xl font-semibold text-white">#3</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Badge tone="success">No repeated questions</Badge>
            <Badge tone="accent">Reattempt enabled</Badge>
          </div>
        </Card>
      </section>
    </div>
  )
}