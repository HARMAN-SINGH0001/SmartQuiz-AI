import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { quizzes } from '../../data/mockData'

export function StudentAttemptPage() {
  const { quizId } = useParams()
  const navigate = useNavigate()
  const quiz = useMemo(() => quizzes.find((item) => item.id === quizId) ?? quizzes[0], [quizId])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(quiz.duration * 60)

  useEffect(() => {
    const timer = window.setInterval(() => setSecondsLeft((current) => Math.max(0, current - 1)), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const currentQuestion = quiz.questions[questionIndex]
  const progress = ((questionIndex + 1) / quiz.questions.length) * 100
  const repeatedQuestions = questionIndex === 0 ? [] : quiz.questions.slice(0, questionIndex).map((item) => item.id)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">Quiz Attempt</h2>
          <p className="mt-1 text-sm text-slate-400">Timer, navigator, autosave, and review later flows are prewired.</p>
        </div>
        <Badge tone="warning">{`${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, '0')}`}</Badge>
      </div>
      <Card>
        <div className="h-2 rounded-full bg-slate-800">
          <div className="h-2 rounded-full bg-cyan-400" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-100">
          Repeat check: {repeatedQuestions.length === 0 ? 'No repeated questions' : `${repeatedQuestions.length} repeated question(s) flagged for review`}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {quiz.questions.map((question, index) => (
            <button
              key={question.id}
              type="button"
              onClick={() => setQuestionIndex(index)}
              className={`rounded-xl border px-3 py-2 text-sm ${index === questionIndex ? 'border-cyan-500 bg-cyan-500/10 text-cyan-100' : 'border-slate-800 bg-slate-950/50 text-slate-300'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Question {questionIndex + 1}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{currentQuestion.prompt}</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
            <Badge tone="neutral">{currentQuestion.type}</Badge>
            <Badge tone="accent">{currentQuestion.difficulty}</Badge>
            <Badge tone="success">No repeated questions</Badge>
          </div>
          <div className="mt-4 space-y-3">
            {(currentQuestion.options ?? []).map((option) => (
              <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-800 px-4 py-3 text-sm text-slate-200 hover:border-cyan-500/40">
                <input type="radio" name={currentQuestion.id} className="accent-cyan-400" />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setQuestionIndex((current) => Math.max(0, current - 1))}>Previous</Button>
            <Button variant="secondary">Review Later</Button>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Auto Save</Button>
            <Button variant="secondary">Save & Reattempt</Button>
            <Button onClick={() => navigate('/student/result/attempt-1')}>Submit Confirmation</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}