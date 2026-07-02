import type { ReactNode } from 'react'

type Column<T> = {
  header: string
  render: (item: T) => ReactNode
}

type Props<T> = {
  columns: Column<T>[]
  data: T[]
}

export function Table<T>({ columns, data }: Props<T>) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
      <table className="min-w-full divide-y divide-slate-800 text-left text-sm text-slate-300">
        <thead className="bg-slate-900 text-xs uppercase tracking-[0.2em] text-slate-400">
          <tr>
            {columns.map((column) => (
              <th key={column.header} className="px-5 py-4 font-medium">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-slate-950/40">
          {data.map((item, index) => (
            <tr key={index} className="transition hover:bg-slate-900/70">
              {columns.map((column) => (
                <td key={column.header} className="px-5 py-4 align-top">
                  {column.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}