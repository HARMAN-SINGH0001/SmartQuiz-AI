import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

export function StudentQuizResultPage() {
  const metrics = [
    ['Score', '8/10'],
    ['Percentage', '80%'],
    ['Correct', '8'],
    ['Wrong', '2'],
    ['Skipped', '0'],
    ['Time Taken', '18m 21s'],
    ['Pass/Fail', 'Pass'],
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Quiz Result</h2>
        <p className="mt-1 text-sm text-slate-400">Result summary and review mode for the completed attempt.</p>
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
          </Card>
        ))}
      </section>
      <Card>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">Review Answers</h3>
            <p className="mt-1 text-sm text-slate-400">Compare selected answers with the correct responses.</p>
          </div>
          <Button variant="secondary">Review Answers</Button>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Badge tone="success">No repeated questions</Badge>
          <Badge tone="accent">Reattempt available</Badge>
        </div>
      </Card>
    </div>
  )
}