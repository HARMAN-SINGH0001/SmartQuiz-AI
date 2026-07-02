import { Card } from '../../components/ui/Card'
import { quizzes } from '../../data/mockData'

export function AdminQuizPreviewPage() {
  const quiz = quizzes[0]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Quiz Preview</h2>
        <p className="mt-1 text-sm text-slate-400">A clean preview of what learners will see before publishing.</p>
      </div>
      <Card>
        <h3 className="text-xl font-semibold text-white">{quiz.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{quiz.description}</p>
        <div className="mt-5 space-y-4">
          {quiz.questions.map((question, index) => (
            <div key={question.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Question {index + 1}</p>
              <h4 className="mt-2 text-base font-semibold text-white">{question.prompt}</h4>
              <ul className="mt-4 space-y-2">
                {(question.options ?? []).map((option) => (
                  <li key={option.id} className="rounded-xl border border-slate-800 px-3 py-2 text-sm text-slate-300">
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}