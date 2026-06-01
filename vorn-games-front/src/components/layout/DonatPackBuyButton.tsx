import type { DonatPack } from '../../layout/constants'
import { Button } from '../ui/Button'

type DonatPackBuyButtonProps = {
  pack: DonatPack
}

export function DonatPackBuyButton({ pack }: DonatPackBuyButtonProps) {
  return (
    <Button variant="primary" size={pack.buttonSize}>
      Купить за {pack.price}
    </Button>
  )
}
