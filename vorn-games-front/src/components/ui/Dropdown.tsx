import * as React from 'react'
import { cn } from '../../utils/cn'

export type DropdownOption<T extends string = string> = {
  value: T
  label: string
  disabled?: boolean
}

export type DropdownProps<T extends string = string> = {
  label?: string
  value: T
  onChange: (value: T) => void
  options: Array<DropdownOption<T>>
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function Dropdown<T extends string>({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select…',
  disabled,
  className,
}: DropdownProps<T>) {
  const [open, setOpen] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const panelRef = React.useRef<HTMLDivElement | null>(null)
  const rootId = React.useId()

  const selected = options.find((o) => o.value === value)

  React.useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null
      if (!target) return
      if (panelRef.current?.contains(target)) return
      if (buttonRef.current?.contains(target)) return
      setOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className={cn('grid gap-1.5', className)}>
      {label ? (
        <label className="text-sm font-medium" htmlFor={`${rootId}-button`}>
          {label}
        </label>
      ) : null}

      <div className="relative">
        <button
          id={`${rootId}-button`}
          ref={buttonRef}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm shadow-sm shadow-black/5 outline-none transition focus:border-[var(--color-accent)]/50 focus:ring-2 focus:ring-[var(--color-accent)]/20 disabled:opacity-50',
          )}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn(!selected ? 'text-[var(--color-muted)]' : '')}>
            {selected?.label ?? placeholder}
          </span>
          <span aria-hidden className="text-[var(--color-muted)]">
            ▾
          </span>
        </button>

        {open ? (
          <div
            ref={panelRef}
            role="listbox"
            aria-label={label ?? 'Dropdown'}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg shadow-black/10"
          >
            <div className="max-h-56 overflow-auto py-1">
              {options.map((o) => {
                const isSelected = o.value === value
                return (
                  <button
                    key={o.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    disabled={o.disabled}
                    className={cn(
                      'flex w-full items-center justify-between px-3 py-2 text-left text-sm transition',
                      'hover:bg-black/5 disabled:opacity-50 disabled:pointer-events-none',
                      isSelected ? 'bg-black/6' : '',
                    )}
                    onClick={() => {
                      onChange(o.value)
                      setOpen(false)
                    }}
                  >
                    <span>{o.label}</span>
                    {isSelected ? (
                      <span className="text-[var(--color-muted)]">✓</span>
                    ) : null}
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

