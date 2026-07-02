import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Table } from '../../components/ui/Table'
import { attempts } from '../../data/mockData'

export function StudentHistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">History</h2>
        <p className="mt-1 text-sm text-slate-400">Track prior attempts and pass/fail outcomes over time.</p>
      </div>
      <Card>
        <Table
          data={attempts}
          columns={[
            { header: 'Quiz', render: (attempt) => attempt.quizTitle },
            { header: 'Completed', render: (attempt) => new Date(attempt.completedAt).toLocaleDateString() },
            { header: 'Score', render: (attempt) => `${attempt.percentage}%` },
            {
              header: 'Status',
              render: (attempt) => <Badge tone={attempt.passed ? 'success' : 'warning'}>{attempt.passed ? 'Pass' : 'Fail'}</Badge>,
            },
            {
              header: 'Action',
              render: (attempt) => (
                <Link to={`/student/history/${attempt.id}`}>
                  <Button variant="secondary" size="sm">View Details</Button>
                </Link>
              ),
            },
          ]}
        />
      </Card>
    </div>
  )
}