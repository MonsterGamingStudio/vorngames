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

export function Modal({ open, onClose, onExited, title, children, className }: ModalProps) {
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
        'fixed inset-0 z-50 flex items-center justify-center p-4',
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
          'relative w-full max-w-lg rounded-2xl border border-gray/20 bg-surface p-6 shadow-lg transition-all duration-300 ease-out motion-reduce:transition-none',
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
          <div className="mb-4 flex items-center gap-4">
            <img src="/icons/modal.svg" alt="Modal" />
            <div className="text-[22px] text-secondary">{displayTitle}</div>
            <img src="/icons/close.svg" alt="Close"
              onClick={onClose}
              className="ml-auto h-10 w-10 cursor-pointer"
              />
          </div>
        ) : null}
        <div className="vorn-scrollbar max-h-[min(60vh,28rem)] overflow-y-auto pr-1 -mr-1">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}

