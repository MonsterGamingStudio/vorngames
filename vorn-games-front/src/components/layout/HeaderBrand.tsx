import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function HeaderBrand() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap gap-[14px] items-center">
      <Logo />
      <Button variant="primary" leftIcon={<img src="/icons/cart.svg" alt="" />}>
        {t('header.supermarket')}
      </Button>
      <LanguageSwitcher />
    </div>
  )
}
