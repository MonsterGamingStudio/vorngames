import { useTranslation } from 'react-i18next'
import { TELEGRAM_URL } from '../../layout/constants'
import { Button } from '../ui/Button'

export function FooterTelegramButton() {
  const { t } = useTranslation()

  return (
    <Button
      variant="outline"
      className="w-full lg:w-auto"
      leftIcon={<img src="/icons/tg.svg" alt="" />}
      leftIconDark={<img src="/icons/tgDark.svg" alt="" />}
      onClick={() => window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer')}
    >
      {t('footer.telegram')}
    </Button>
  )
}
