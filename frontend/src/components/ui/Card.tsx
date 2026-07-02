import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/25',
        className,
      )}
      {...props}
    />
  )
}