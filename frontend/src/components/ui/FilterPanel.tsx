import { Input, Select } from './Fields'

type Props = {
  search: string
  onSearch: (value: string) => void
  tag: string
  onTagChange: (value: string) => void
  difficulty: string
  onDifficultyChange: (value: string) => void
}

export function FilterPanel({ search, onSearch, tag, onTagChange, difficulty, onDifficultyChange }: Props) {
  return (
    <div className="grid gap-3 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-3">
      <Input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search questions" />
      <Select value={tag} onChange={(event) => onTagChange(event.target.value)}>
        <option value="">All tags</option>
        <option value="react">React</option>
        <option value="typescript">TypeScript</option>
        <option value="router">Router</option>
      </Select>
      <Select value={difficulty} onChange={(event) => onDifficultyChange(event.target.value)}>
        <option value="">All difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </Select>
    </div>
  )
}