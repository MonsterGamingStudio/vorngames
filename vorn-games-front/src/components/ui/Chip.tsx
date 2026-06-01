import * as React from 'react'
import { cn } from '../../utils/cn'

type ChipVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger'

export type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: ChipVariant
}

const variants: Record<ChipVariant, string> = {
  default:
    'border border-[var(--color-border)] bg-black/5 text-[var(--color-text)]',
  accent: 'border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-text)]',
  success: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-600',
  warning: 'border border-amber-500/30 bg-amber-500/10 text-amber-600',
  danger: 'border border-red-500/30 bg-red-500/10 text-red-600',
}

export function Chip({
  className,
  variant = 'default',
  ...props
}: ChipProps) {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    />
  )
}

