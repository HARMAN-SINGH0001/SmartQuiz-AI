import { Button } from './Button'

type Props = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ page, totalPages, onPageChange }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
      <span>
        Page {page} of {totalPages}
      </span>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => onPageChange(Math.max(1, page - 1))}>
          Previous
        </Button>
        <Button variant="secondary" size="sm" onClick={() => onPageChange(Math.min(totalPages, page + 1))}>
          Next
        </Button>
      </div>
    </div>
  )
}