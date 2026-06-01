import { useTranslation } from 'react-i18next'
import { TELEGRAM_URL } from '../../layout/constants'
import { Button } from '../ui/Button'

export function FooterTelegramButton() {
  const { t } = useTranslation()

  return (
    <Button
      variant="outline"
      className="h-auto min-h-10 w-full whitespace-normal px-3 py-2 text-center"
      leftIcon={<img src="/icons/tg.svg" alt="" />}
      leftIconDark={<img src="/icons/tgDark.svg" alt="" />}
      onClick={() => window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer')}
    >
      {t('footer.telegram')}
    </Button>
  )
}
