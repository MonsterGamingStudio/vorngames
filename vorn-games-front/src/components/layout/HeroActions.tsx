import { useTranslation } from 'react-i18next'
import { PLAY_GAME_URL } from '../../layout/constants'
import { Button } from '../ui/Button'

export function HeroActions() {
  const { t } = useTranslation()

  return (
    <Button
      variant="primary"
      size="50"
      leftIcon={<img src="/icons/play.svg" alt="" />}
      onClick={() => window.open(PLAY_GAME_URL, '_blank', 'noopener,noreferrer')}
    >
      {t('hero.startPlaying')}
    </Button>
  )
}
