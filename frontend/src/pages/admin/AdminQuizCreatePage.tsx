import { useState } from 'react'
import type { ReactNode } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { FieldLabel, Input, Select, Textarea } from '../../components/ui/Fields'
import { Badge } from '../../components/ui/Badge'
import { questionBank, quizzes, courses, modules, subjects } from '../../data/mockData'
import type { Question } from '../../types'
import { useToast } from '../../components/ui/Toast'

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  course: z.string().min(1),
  subject: z.string().min(1),
  module: z.string().min(1),
  duration: z.coerce.number().min(1),
  passingMarks: z.coerce.number().min(1).max(100),
  attempts: z.coerce.number().min(1),
  instructions: z.string().min(3),
})

type FormValues = z.infer<typeof schema>

export function AdminQuizCreatePage() {
  const { toast } = useToast()
  const [questions, setQuestions] = useState<Question[]>(quizzes[0].questions)
  const [previewId, setPreviewId] = useState<string | null>(questions[0]?.id ?? null)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: {
      title: quizzes[0].title,
      description: quizzes[0].description,
      course: quizzes[0].course,
      subject: quizzes[0].subject,
      module: quizzes[0].module,
      duration: quizzes[0].duration,
      passingMarks: quizzes[0].passingMarks,
      attempts: quizzes[0].attempts,
      instructions: quizzes[0].instructions,
    },
  })

  const onSubmit = handleSubmit((values) => {
    toast({ title: 'Quiz saved', description: `Draft stored for ${values.title}`, type: 'success' })
  })

  const addQuestion = () => {
    const next = questionBank[0]
    const createdQuestion = { ...next, id: `${next.id}-${Date.now()}` }
    setQuestions((current) => [...current, createdQuestion])
    setPreviewId(createdQuestion.id)
  }

  const duplicateQuestion = (question: Question) => {
    const duplicated = { ...question, id: `${question.id}-copy-${Date.now()}` }
    setQuestions((current) => [...current, duplicated])
  }

  const removeQuestion = (questionId: string) => {
    setQuestions((current) => current.filter((question) => question.id !== questionId))
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">Create Quiz</h2>
          <p className="mt-1 text-sm text-slate-400">Compose the quiz and manage its question builder below.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" type="button">Save Draft</Button>
          <Button type="submit">Publish</Button>
        </div>
      </div>

      <Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Field title="Title" error={errors.title?.message}><Input {...register('title')} /></Field>
          <Field title="Course" error={errors.course?.message}><Select {...register('course')}>{courses.map((item) => <option key={item}>{item}</option>)}</Select></Field>
          <Field title="Subject" error={errors.subject?.message}><Select {...register('subject')}>{subjects.map((item) => <option key={item}>{item}</option>)}</Select></Field>
          <Field title="Module" error={errors.module?.message}><Select {...register('module')}>{modules.map((item) => <option key={item}>{item}</option>)}</Select></Field>
          <Field title="Duration" error={errors.duration?.message}><Input type="number" {...register('duration')} /></Field>
          <Field title="Passing Marks" error={errors.passingMarks?.message}><Input type="number" {...register('passingMarks')} /></Field>
          <Field title="Attempts" error={errors.attempts?.message}><Input type="number" {...register('attempts')} /></Field>
          <Field title="Description" error={errors.description?.message} full><Textarea rows={4} {...register('description')} /></Field>
          <Field title="Instructions" error={errors.instructions?.message} full><Textarea rows={4} {...register('instructions')} /></Field>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
          {['Shuffle Questions', 'Shuffle Options', 'Negative Marking', 'Publish'].map((item) => (
            <Badge key={item} tone="neutral">{item}</Badge>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">Question Builder</h3>
            <p className="mt-1 text-sm text-slate-400">Add, duplicate, delete, and preview reusable questions.</p>
          </div>
          <Button type="button" onClick={addQuestion}>Add Question</Button>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {questions.map((question, index) => (
              <article key={question.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Question {index + 1}</p>
                    <h4 className="mt-1 text-base font-semibold text-white">{question.title}</h4>
                    <p className="mt-2 text-sm text-slate-400">{question.prompt}</p>
                  </div>
                  <Badge tone="accent">{question.type}</Badge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm" type="button" onClick={() => setPreviewId(question.id)}>Preview</Button>
                  <Button variant="secondary" size="sm" type="button" onClick={() => duplicateQuestion(question)}>Duplicate</Button>
                  <Button variant="danger" size="sm" type="button" onClick={() => removeQuestion(question.id)}>Delete</Button>
                </div>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Preview Question</p>
            <div className="mt-3 space-y-3">
              {questions
                .filter((question) => question.id === previewId)
                .map((question) => (
                  <div key={question.id}>
                    <h4 className="text-lg font-semibold text-white">{question.title}</h4>
                    <p className="mt-2 text-sm text-slate-300">{question.prompt}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {(question.options ?? []).map((option) => (
                        <li key={option.id} className="rounded-xl border border-slate-800 px-3 py-2">
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Card>
    </form>
  )
}

function Field({ title, error, full, children }: { title: string; error?: string; full?: boolean; children: ReactNode }) {
  return (
    <div className={full ? 'md:col-span-2 xl:col-span-3' : ''}>
      <FieldLabel>{title}</FieldLabel>
      {children}
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </div>
  )
}