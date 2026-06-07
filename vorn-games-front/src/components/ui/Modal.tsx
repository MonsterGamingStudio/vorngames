import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'
import { lockBodyScroll } from '../../utils/lockBodyScroll'

export type ModalProps = {
  open: boolean
  onClose: () => void
  onExited?: () => void
  title?: string
  children: React.ReactNode
  className?: string
  scrollClassName?: string
}

function useEscapeKey(open: boolean, onClose: () => void) {
  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])
}

export function Modal({
  open,
  onClose,
  onExited,
  title,
  children,
  className,
  scrollClassName,
}: ModalProps) {
  useEscapeKey(open, onClose)

  const [mounted, setMounted] = React.useState(open)
  const [visible, setVisible] = React.useState(false)
  const [displayTitle, setDisplayTitle] = React.useState(title)

  React.useEffect(() => {
    if (title) setDisplayTitle(title)
  }, [title])

  React.useEffect(() => {
    if (open) {
      setMounted(true)
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
      return () => cancelAnimationFrame(frame)
    }

    setVisible(false)
  }, [open])

  React.useEffect(() => {
    if (!mounted) return
    return lockBodyScroll()
  }, [mounted])

  if (!mounted) return null

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4',
        visible ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!visible}
    >
      <div
        className={cn(
          'absolute inset-0 bg-[var(--color-modal-overlay)] transition-opacity duration-300 ease-out motion-reduce:transition-none',
          visible ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={displayTitle}
        className={cn(
          'relative w-full max-w-lg rounded-2xl border border-gray/20 bg-surface p-4 shadow-lg transition-all duration-300 ease-out motion-reduce:transition-none sm:p-6',
          visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.97]',
          className,
        )}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget || open) return
          setMounted(false)
          onExited?.()
        }}
      >
        {displayTitle ? (
          <div className="mb-4 flex min-w-0 items-center gap-3 sm:gap-4">
            <img src="/icons/modal.svg" alt="" className="shrink-0" aria-hidden />
            <div className="min-w-0 flex-1 text-[18px] leading-tight text-secondary sm:text-[22px]">
              {displayTitle}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="ml-auto shrink-0 cursor-pointer border-0 bg-transparent p-0"
              aria-label="Close"
            >
              <img src="/icons/close.svg" alt="" className="h-9 w-9 sm:h-10 sm:w-10" />
            </button>
          </div>
        ) : null}
        <div
          className={cn(
            'vorn-scrollbar max-h-[min(60vh,28rem)] overflow-y-auto pr-1 -mr-1',
            scrollClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}

