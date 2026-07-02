import { Outlet } from 'react-router-dom'
import type { NavItem, } from '../../config/navigation'
import type { Role } from '../../types'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

type Props = {
  role: Role
  navItems: NavItem[]
}

export function AppShell({ role, navItems }: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <Sidebar role={role} navItems={navItems} />
        <div className="flex min-h-screen flex-col bg-slate-950/95">
          <Navbar role={role} />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}