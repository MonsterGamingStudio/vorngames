import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '../utils/cn'
import { applyTheme, getSystemTheme, resolveTheme, type ResolvedTheme, type Theme } from '../utils/theme'
import './ThemeSwitcher.css'

export function ThemeSwitcher() {
  const { t } = useTranslation()
  const isFirstRender = React.useRef(true)
  const [theme, setTheme] = React.useState<Theme>(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
    } catch {}
    return 'dark'
  })

  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(() => {
    const initial = document.documentElement.dataset.theme
    return initial === 'dark' ? 'dark' : 'light'
  })

  React.useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch {}
    setResolvedTheme(resolveTheme(theme))
    applyTheme(theme, { animate: !isFirstRender.current })
    isFirstRender.current = false
  }, [theme])

  React.useEffect(() => {
    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const nextResolved = getSystemTheme()
      setResolvedTheme(nextResolved)
      applyTheme('system')
    }
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [theme])

  const onToggle = () => {
    const currentResolved =
      theme === 'system' ? resolvedTheme : (theme as ResolvedTheme)
    const next = currentResolved === 'dark' ? 'light' : 'dark'
    setResolvedTheme(next)
    setTheme(next)
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      className="vorn-theme-switcher"
      onClick={onToggle}
      aria-label={isDark ? t('header.themeLight') : t('header.themeDark')}
    >
      <span
        className={cn(
          'vorn-theme-switcher__icon',
          !isDark && 'vorn-theme-switcher__icon--visible',
        )}
        aria-hidden="true"
      >
        <img src="/icons/moon.svg" alt="" />
      </span>
      <span
        className={cn(
          'vorn-theme-switcher__icon',
          isDark && 'vorn-theme-switcher__icon--visible',
        )}
        aria-hidden="true"
      >
        <img src="/icons/sun.svg" alt="" />
      </span>
    </button>
  )
}
