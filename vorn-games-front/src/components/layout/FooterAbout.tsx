import { useTranslation } from 'react-i18next'
import { Logo } from '../ui/Logo'

export function FooterAbout() {
  const { t } = useTranslation()

  return (
    <div className="max-lg:col-span-2 max-sm:col-span-1">
      <Logo />
      <p className="mt-5 w-full max-w-[350px] text-[13px] font-gilroy-medium leading-[140%] text-outline sm:mt-[29px] sm:text-[14px]">
        {t('footer.about')}
      </p>
    </div>
  )
}
