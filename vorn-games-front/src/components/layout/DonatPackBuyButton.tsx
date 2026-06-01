import { useTranslation } from 'react-i18next'
import type { DonatPack } from '../../layout/constants'
import { Button } from '../ui/Button'

type DonatPackBuyButtonProps = {
  pack: DonatPack
}

export function DonatPackBuyButton({ pack }: DonatPackBuyButtonProps) {
  const { t } = useTranslation()
  const price = t(`donat.packs.${pack.id}.price`)

  return (
    <Button variant="primary" size={pack.buttonSize}>
      {t('donat.buyFor', { price })}
    </Button>
  )
}
