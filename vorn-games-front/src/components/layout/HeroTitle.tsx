import { useTranslation } from 'react-i18next'

export function HeroTitle() {
  const { t } = useTranslation()

  return (
    <h1 className="w-full max-w-[350px] text-[22px] text-secondary leading-[120%] sm:text-[26px] lg:text-[28px] 2xl:text-[40px]">
      {t('hero.title')}
    </h1>
  )
}
