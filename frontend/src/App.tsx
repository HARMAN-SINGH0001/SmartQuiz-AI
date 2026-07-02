import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { ToastProvider } from './components/ui/Toast'
import { adminNavItems, studentNavItems } from './config/navigation'
import { adminPages, studentPages } from './routes/pageMap'

function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route
          path="/admin"
          element={<AppShell role="admin" navItems={adminNavItems} />}
        >
          {adminPages.map((page) => (
            <Route key={page.path} path={page.path} element={<page.component />} />
          ))}
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
        <Route
          path="/student"
          element={<AppShell role="student" navItems={studentNavItems} />}
        >
          {studentPages.map((page) => (
            <Route key={page.path} path={page.path} element={<page.component />} />
          ))}
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </ToastProvider>
  )
}

export default App