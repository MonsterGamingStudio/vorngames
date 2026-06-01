import type { User } from '../../store/services/authApi'
import { Button } from '../ui/Button'
import { BalanceDisplay } from './BalanceDisplay'

type BalanceActionsProps = {
  user: User
}

export function BalanceActions({ user }: BalanceActionsProps) {
  return (
    <>
      <BalanceDisplay balance={user.balance} />
      <Button variant="primary" leftIcon={<img src="/icons/plus.svg" alt="" />}>
        Пополнить баланс
      </Button>
      <Button
        variant="secondary"
        leftIcon={<img src={user.avatarUrl} alt="" className="size-[24px] rounded-full object-cover" />}
        size="square-40"
        title={user.username}
      />
    </>
  )
}
