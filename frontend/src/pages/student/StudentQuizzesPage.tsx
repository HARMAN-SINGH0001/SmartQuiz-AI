import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Modal } from '../../components/ui/Modal'
import { quizzes, yesterdayQuiz } from '../../data/mockData'

export function StudentQuizzesPage() {
  const [previewQuizId, setPreviewQuizId] = useState<string | null>(null)
  const previewQuiz = quizzes.find((quiz) => quiz.id === previewQuizId) ?? quizzes[0]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Assigned Quizzes</h2>
        <p className="mt-1 text-sm text-slate-400">Open a quiz to start the timed attempt flow or reattempt a past assignment.</p>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {quizzes.map((quiz) => (
          <Card key={quiz.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{quiz.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{quiz.description}</p>
              </div>
              <Badge tone={quiz.published ? 'success' : 'warning'}>{quiz.published ? 'Assigned' : 'Pending'}</Badge>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">{quiz.duration} min</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">{quiz.questions.length} questions</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3">Reattempt ready</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to={`/student/attempt/${quiz.id}`}>
                <Button>Start Quiz</Button>
              </Link>
              <Button variant="secondary" onClick={() => setPreviewQuizId(quiz.id)}>Preview</Button>
              <Button variant="secondary">Reattempt</Button>
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">Yesterday's Quiz Status</h3>
            <p className="mt-1 text-sm text-slate-400">A preview card for the most recently assigned quiz.</p>
          </div>
          <Badge tone="accent">No repeated questions</Badge>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
          <div>
            <p className="font-medium text-white">{yesterdayQuiz.title}</p>
            <p className="text-sm text-slate-400">{yesterdayQuiz.description}</p>
          </div>
          <Button variant="secondary" onClick={() => setPreviewQuizId(yesterdayQuiz.id)}>Open Modal</Button>
        </div>
      </Card>
      <Modal
        open={Boolean(previewQuizId)}
        title={previewQuiz.title}
        onClose={() => setPreviewQuizId(null)}
        footer={
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setPreviewQuizId(null)}>Close</Button>
            <Link to={`/student/attempt/${previewQuiz.id}`}>
              <Button>Start Quiz</Button>
            </Link>
          </div>
        }
      >
        <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-slate-400">Course</p>
            <p className="mt-1 text-white">{previewQuiz.course}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-slate-400">Subject</p>
            <p className="mt-1 text-white">{previewQuiz.subject}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-slate-400">Duration</p>
            <p className="mt-1 text-white">{previewQuiz.duration} minutes</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-slate-400">Question check</p>
            <p className="mt-1 text-emerald-100">No repeated questions</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}