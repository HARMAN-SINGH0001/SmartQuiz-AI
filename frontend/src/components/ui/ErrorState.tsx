import { Button } from './Button'

type Props = {
  title?: string
  description?: string
  onRetry?: () => void
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'The request could not be completed. Try again in a moment.',
  onRetry,
}: Props) {
  return (
    <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 px-6 py-10 text-center">
      <h3 className="text-lg font-semibold text-rose-100">{title}</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-rose-100/70">{description}</p>
      {onRetry ? (
        <Button className="mt-6" variant="secondary" onClick={onRetry}>
          Retry
        </Button>
      ) : null}
    </div>
  )
}