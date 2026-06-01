import * as React from 'react'
import { cn } from '../../utils/cn'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  error?: string
}

export function Input({
  className,
  label,
  hint,
  error,
  id,
  ...props
}: InputProps) {
  const inputId = React.useId()
  const resolvedId = id ?? inputId
  const describedById = React.useId()

  return (
    <div className="grid gap-1.5">
      {label ? (
        <label
          htmlFor={resolvedId}
          className="text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      ) : null}
      <input
        {...props}
        id={resolvedId}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? describedById : undefined}
        className={cn(
          'h-10 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] shadow-sm shadow-black/5 outline-none transition focus:border-[var(--color-accent)]/50 focus:ring-2 focus:ring-[var(--color-accent)]/20 disabled:opacity-50',
          error ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : '',
          className,
        )}
      />
      {hint || error ? (
        <p
          id={describedById}
          className={cn(
            'text-xs',
            error ? 'text-red-500' : 'text-[var(--color-muted)]',
          )}
        >
          {error ?? hint}
        </p>
      ) : null}
    </div>
  )
}

