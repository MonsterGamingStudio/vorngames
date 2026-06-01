export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export function getSystemTheme(): ResolvedTheme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme
}

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

function setResolvedTheme(resolved: ResolvedTheme) {
  document.documentElement.dataset.theme = resolved
  document.documentElement.style.colorScheme = resolved
}

export function applyTheme(theme: Theme, options?: { animate?: boolean }) {
  const resolved = resolveTheme(theme)
  const animate = options?.animate ?? true

  if (!animate || prefersReducedMotion()) {
    setResolvedTheme(resolved)
    return
  }

  if (document.startViewTransition) {
    document.startViewTransition(() => setResolvedTheme(resolved))
    return
  }

  document.documentElement.classList.add('theme-transition')
  setResolvedTheme(resolved)
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transition')
  }, 350)
}
