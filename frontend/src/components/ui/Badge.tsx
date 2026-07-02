import { cn } from '../../utils/cn'

type Props = {
  children: string
  tone?: 'accent' | 'success' | 'warning' | 'neutral'
}

const tones = {
  accent: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-200',
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
  warning: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
  neutral: 'border-slate-700 bg-slate-800 text-slate-200',
}

export function Badge({ children, tone = 'neutral' }: Props) {
  return (
    <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-medium', tones[tone])}>
      {children}
    </span>
  )
}