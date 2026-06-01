import { useTranslation } from 'react-i18next'

export function HeroTitle() {
  const { t } = useTranslation()

  return (
    <h1 className="w-[350px] max-lg:w-full text-[28px] text-secondary leading-[120%]">{t('hero.title')}</h1>
  )
}
