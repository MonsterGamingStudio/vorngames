import { useTranslation } from 'react-i18next'

export function FooterPoweredBy() {
  const { t } = useTranslation()

  return (
    <a href="https://starlakedigital.pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[10px]">
      <span className="font-medium text-[16px] text-outline">{t('footer.poweredBy')}</span>
      <img src="/starlake_logo.svg" alt="StarLake" className="h-5 w-auto" />
    </a>
  )
}
