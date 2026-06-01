import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { getSteamLoginUrl } from '../../store/services/authApi'

export function SteamLoginButton() {
  const { t } = useTranslation()

  const handleLogin = () => {
    window.location.href = getSteamLoginUrl()
  }

  return (
    <Button
      variant="secondary"
      onClick={handleLogin}
      leftIcon={<img src="/icons/steam.svg" alt="" />}
    >
      {t('header.steamLogin')}
    </Button>
  )
}
