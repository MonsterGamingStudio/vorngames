import { useEffect, useState } from 'react'

const MIN_VISIBLE_MS = 700
const EXIT_MS = 450

function waitForPageReady(): Promise<void> {
  if (document.readyState === 'complete') {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true })
  })
}

export function usePageLoader() {
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>('loading')

  useEffect(() => {
    let exitTimer: ReturnType<typeof setTimeout> | undefined
    let doneTimer: ReturnType<typeof setTimeout> | undefined
    let cancelled = false

    const start = Date.now()

    void waitForPageReady().then(() => {
      if (cancelled) return

      const elapsed = Date.now() - start
      const delay = Math.max(0, MIN_VISIBLE_MS - elapsed)

      exitTimer = setTimeout(() => {
        if (cancelled) return
        setPhase('exiting')

        doneTimer = setTimeout(() => {
          if (!cancelled) setPhase('done')
        }, EXIT_MS)
      }, delay)
    })

    return () => {
      cancelled = true
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  return {
    visible: phase !== 'done',
    exiting: phase === 'exiting',
  }
}
