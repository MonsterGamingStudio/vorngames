import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'

export function HeroActions() {
  const { t } = useTranslation()

  return (
    <div className="flex gap-[14px] items-center">
      <Button variant="primary" size="50" leftIcon={<img src="/icons/play.svg" alt="" />}>
        {t('hero.connectServer')}
      </Button>
      <Button
        variant="outline"
        leftIcon={<img src="/icons/copy.svg" alt="" />}
        leftIconDark={<img src="/icons/copy.svg" alt="" />}
      >
        {t('hero.copyIp')}
      </Button>
    </div>
  )
}
