import { useTranslation } from 'react-i18next'

export function HeroDescription() {
  const { t } = useTranslation()

  return (
    <p className="w-full max-w-[350px] font-gilroy-medium text-[13px] leading-[140%] text-outline sm:text-[14px] 2xl:text-[26px]">
      {t('hero.description')}
    </p>
  )
}
