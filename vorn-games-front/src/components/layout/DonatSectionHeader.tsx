import { useTranslation } from 'react-i18next'

export function DonatSectionHeader() {
  const { t } = useTranslation()

  return (
    <div className="flex gap-[14px] items-center">
      <img src="/icons/donat.svg" alt="" />
      <span className="text-[24px] text-secondary">{t('donat.sectionTitle')}</span>
    </div>
  )
}
