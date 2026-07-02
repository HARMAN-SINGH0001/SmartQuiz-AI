import { Input } from './Fields'

type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Search...' }: Props) {
  return <Input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
}