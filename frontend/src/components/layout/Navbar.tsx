import { useLocation } from 'react-router-dom'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import type { Role } from '../../types'

type Props = {
  role: Role
}

export function Navbar({ role }: Props) {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">SmartQuiz AI</p>
          <div className="mt-1 flex items-center gap-3">
            <h1 className="text-lg font-semibold text-white">
              {role === 'admin' ? 'ERP Quiz Administration' : 'Learner Workspace'}
            </h1>
            <Badge tone={role === 'admin' ? 'accent' : 'success'}>
              {role.toUpperCase()}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 md:block">
            {location.pathname}
          </div>
          <Button variant="ghost">Notifications</Button>
        </div>
      </div>
    </header>
  )
}