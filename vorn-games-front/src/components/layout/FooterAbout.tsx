import { useTranslation } from 'react-i18next'
import { Logo } from '../ui/Logo'

export function FooterAbout() {
  const { t } = useTranslation()

  return (
    <div className="max-lg:col-span-2 max-sm:col-span-1">
      <Logo />
      <p className="mt-[29px] text-[14px] font-gilroy-medium text-outline leading-[120%] w-[350px] max-lg:w-full">
        {t('footer.about')}
      </p>
    </div>
  )
}
