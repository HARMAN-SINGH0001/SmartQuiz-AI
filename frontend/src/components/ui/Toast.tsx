import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type ToastType = 'success' | 'error' | 'info'

type ToastMessage = {
  id: string
  title: string
  description?: string
  type: ToastType
}

type ToastContextValue = {
  toast: (toast: Omit<ToastMessage, 'id'>) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const value = useMemo<ToastContextValue>(
    () => ({
      toast: (toast) => {
        const id = crypto.randomUUID()
        setMessages((current) => [...current, { ...toast, id }])
        window.setTimeout(() => {
          setMessages((current) => current.filter((message) => message.id !== id))
        }, 3000)
      },
    }),
    [],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-4 shadow-xl shadow-black/40"
          >
            <p className="text-sm font-semibold text-white">{message.title}</p>
            {message.description ? <p className="mt-1 text-sm text-slate-400">{message.description}</p> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}