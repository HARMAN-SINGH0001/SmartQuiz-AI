import { useMemo, useState } from 'react'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { FilterPanel } from '../../components/ui/FilterPanel'
import { Pagination } from '../../components/ui/Pagination'
import { questionBank } from '../../data/mockData'

export function AdminQuestionBankPage() {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () =>
      questionBank.filter(
        (question) =>
          question.title.toLowerCase().includes(search.toLowerCase()) &&
          (tag ? question.tags.includes(tag) : true) &&
          (difficulty ? question.difficulty === difficulty : true),
      ),
    [difficulty, search, tag],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / 2))
  const paged = filtered.slice((page - 1) * 2, page * 2)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">Question Bank</h2>
          <p className="mt-1 text-sm text-slate-400">Search, filter, import, export, and page through stored questions.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Import</Button>
          <Button variant="secondary">Export</Button>
        </div>
      </div>

      <FilterPanel
        search={search}
        onSearch={setSearch}
        tag={tag}
        onTagChange={setTag}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
      />

      <div className="grid gap-4">
        {paged.map((question) => (
          <Card key={question.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{question.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{question.prompt}</p>
              </div>
              <div className="text-right text-sm text-slate-400">
                <p>{question.difficulty}</p>
                <p>{question.tags.join(', ')}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}