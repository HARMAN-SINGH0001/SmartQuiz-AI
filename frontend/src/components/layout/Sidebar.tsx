import { NavLink } from 'react-router-dom'
import type { NavItem } from '../../config/navigation'
import type { Role } from '../../types'
import { cn } from '../../utils/cn'

type Props = {
  role: Role
  navItems: NavItem[]
}

export function Sidebar({ role, navItems }: Props) {
  return (
    <aside className="border-r border-slate-800 bg-slate-950 px-4 py-6 lg:sticky lg:top-0 lg:h-screen lg:px-6">
      <div className="flex h-full flex-col gap-6">
        {role === 'student' ? (
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 p-5 shadow-2xl shadow-cyan-950/20">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Student Profile</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-lg font-semibold text-cyan-100 ring-1 ring-cyan-400/30">
                AP
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Ariana Patel</h2>
                <p className="text-sm text-slate-400">Computer Science · Level 2 Learner</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-slate-400">Streak</p>
                <p className="mt-1 text-lg font-semibold text-white">5 days</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-slate-400">Average</p>
                <p className="mt-1 text-lg font-semibold text-white">70%</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-2xl shadow-cyan-950/20">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">ERP module</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Quiz Management</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Build, assign, monitor, and refine assessments from one dashboard.
            </p>
          </div>
        )}
        <nav className="flex flex-1 flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'rounded-2xl border px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200 shadow-lg shadow-cyan-950/20'
                    : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
          Mock API mode is active. Swap services in <span className="text-cyan-200">src/services/mockApi.ts</span>
          when backend endpoints are ready.
        </div>
      </div>
    </aside>
  )
}