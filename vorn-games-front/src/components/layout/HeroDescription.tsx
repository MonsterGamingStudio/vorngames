import { useTranslation } from 'react-i18next'

export function HeroDescription() {
  const { t } = useTranslation()

  return (
    <p className="w-[350px] max-lg:w-full font-gilroy-medium text-[14px] text-outline">
      {t('hero.description')}
    </p>
  )
}
