import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input, Select } from '../../components/ui/Fields'
import { quizzes } from '../../data/mockData'

export function AdminAssignQuizPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Assign Quiz</h2>
        <p className="mt-1 text-sm text-slate-400">Assign quizzes to learners, classes, or departments.</p>
      </div>
      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Select>
            {quizzes.map((quiz) => <option key={quiz.id}>{quiz.title}</option>)}
          </Select>
          <Input placeholder="Assign to class or employee group" />
          <Input placeholder="Due date" />
          <Select>
            <option>Notify via email</option>
            <option>Notify via in-app only</option>
          </Select>
        </div>
        <div className="mt-5 flex justify-end">
          <Button>Assign</Button>
        </div>
      </Card>
    </div>
  )
}