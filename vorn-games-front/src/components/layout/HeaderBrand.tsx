import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function HeaderBrand() {
  return (
    <div className="flex gap-[14px]">
      <Logo />
      <Button variant="primary" leftIcon={<img src="/icons/cart.svg" alt="" />}>
        Supermarket
      </Button>
    </div>
  )
}
