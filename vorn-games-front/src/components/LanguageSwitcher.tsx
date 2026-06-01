import { useTranslation } from 'react-i18next'
import { type AppLanguage, persistLanguage, SUPPORTED_LANGUAGES } from '../i18n'
import { Dropdown } from './ui/Dropdown'
import './LanguageSwitcher.css'

function normalizeLanguage(code: string): AppLanguage {
  return code.startsWith('en') ? 'en' : 'ru'
}

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const language = normalizeLanguage(i18n.language)

  const options = SUPPORTED_LANGUAGES.map((value) => ({
    value,
    label: t(`language.${value}`),
  }))

  const onChange = (next: AppLanguage) => {
    void i18n.changeLanguage(next)
    persistLanguage(next)
  }

  return (
    <Dropdown
      className="vorn-language-switcher"
      value={language}
      onChange={onChange}
      options={options}
      aria-label={t('language.label')}
      placeholder={t('language.label')}
    />
  )
}
