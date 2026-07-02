import { useState } from 'react'
import type { ReactNode } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { FieldLabel, Input, Select, Textarea } from '../../components/ui/Fields'
import { Badge } from '../../components/ui/Badge'
import { quizApi } from '../../services/mockApi'
import type { Question } from '../../types'
import { useToast } from '../../components/ui/Toast'
import { courses, modules, subjects } from '../../data/mockData'

const schema = z.object({
  course: z.string().min(1),
  subject: z.string().min(1),
  module: z.string().min(1),
  difficulty: z.string().min(1),
  questionType: z.enum(['mcq', 'multiple-select', 'true-false', 'fill-blank', 'short-answer', 'long-answer', 'mixed']),
  numberOfQuestions: z.coerce.number().min(1).max(20),
  language: z.string().min(1),
  instructions: z.string().min(3),
})

type FormValues = z.infer<typeof schema>

export function AdminAiGeneratorPage() {
  const { toast } = useToast()
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([])

  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: {
      course: courses[0],
      subject: subjects[0],
      module: modules[0],
      difficulty: 'Medium',
      questionType: 'mcq',
      numberOfQuestions: 5,
      language: 'English',
      instructions: 'Generate practical questions for ERP evaluation.',
    },
  })

  const onSubmit = handleSubmit(async (values) => {
    const response = await quizApi.generateAiQuiz(values)
    setGeneratedQuestions(response.questions)
    toast({ title: 'AI quiz generated', description: 'Mock response loaded successfully.', type: 'success' })
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">AI Quiz Generator</h2>
        <p className="mt-1 text-sm text-slate-400">Build quiz drafts from the mock POST /api/ai/generate response.</p>
      </div>
      <form onSubmit={onSubmit} className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Field title="Course"><Select {...register('course')}>{courses.map((item) => <option key={item}>{item}</option>)}</Select></Field>
            <Field title="Subject"><Select {...register('subject')}>{subjects.map((item) => <option key={item}>{item}</option>)}</Select></Field>
            <Field title="Module"><Select {...register('module')}>{modules.map((item) => <option key={item}>{item}</option>)}</Select></Field>
            <Field title="Difficulty"><Select {...register('difficulty')}><option>Easy</option><option>Medium</option><option>Hard</option></Select></Field>
            <Field title="Question Type"><Select {...register('questionType')}><option>mcq</option><option>multiple-select</option><option>true-false</option><option>fill-blank</option><option>short-answer</option><option>long-answer</option><option>mixed</option></Select></Field>
            <Field title="Number of Questions"><Input type="number" {...register('numberOfQuestions')} /></Field>
            <Field title="Language"><Input {...register('language')} /></Field>
            <Field title="Instructions" full><Textarea rows={4} {...register('instructions')} /></Field>
          </div>
          <div className="mt-5 flex justify-end">
            <Button type="submit">Generate</Button>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Generated questions</p>
              <h3 className="text-xl font-semibold text-white">Accept, reject, edit, save</h3>
            </div>
            <Badge tone="accent">Mock JSON</Badge>
          </div>
          <div className="mt-5 space-y-4">
            {generatedQuestions.length === 0 ? (
              <p className="text-sm text-slate-400">Run the generator to populate the question list.</p>
            ) : null}
            {generatedQuestions.map((question) => (
              <div key={question.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <h4 className="font-semibold text-white">{question.prompt}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Accept', 'Reject', 'Edit', 'Save'].map((action) => (
                    <Button key={action} variant="secondary" size="sm" type="button">{action}</Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </form>
    </div>
  )
}

function Field({ title, children, full }: { title: string; children: ReactNode; full?: boolean }) {
  return (
    <div className={full ? 'md:col-span-2' : ''}>
      <FieldLabel>{title}</FieldLabel>
      {children}
    </div>
  )
}