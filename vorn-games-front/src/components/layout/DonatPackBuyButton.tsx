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
    <Button
      variant="primary"
      size={pack.buttonSize}
      className="w-full whitespace-normal text-center max-sm:px-4 max-sm:text-[14px]"
    >
      {t('donat.buyFor', { price })}
    </Button>
  )
}
