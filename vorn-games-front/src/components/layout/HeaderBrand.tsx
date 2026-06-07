import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function HeaderBrand() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center gap-[14px] max-md:min-w-0 max-md:w-full max-md:gap-2">
      <Logo />
      <Button
        variant="primary"
        className="max-md:min-w-0 max-md:flex-1"
        leftIcon={<img src="/icons/cart.svg" alt="" />}
      >
        {t('header.supermarket')}
      </Button>
      <LanguageSwitcher />
    </div>
  )
}
