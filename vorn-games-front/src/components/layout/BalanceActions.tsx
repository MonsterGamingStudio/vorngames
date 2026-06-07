import { useTranslation } from 'react-i18next'
import type { User } from '../../store/services/authApi'
import { Button } from '../ui/Button'
import { BalanceDisplay } from './BalanceDisplay'

type BalanceActionsProps = {
  user: User
}

export function BalanceActions({ user }: BalanceActionsProps) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-[14px] max-md:min-w-0 max-md:w-full max-md:flex-wrap max-md:gap-2">
      <BalanceDisplay balance={user.balance} />
      <Button
        variant="primary"
        className="max-md:min-w-0 max-md:flex-1"
        leftIcon={<img src="/icons/plus.svg" alt="" />}
      >
        {t('header.topUp')}
      </Button>
      <Button
        variant="secondary"
        leftIcon={<img src={user.avatarUrl} alt="" className="size-[24px] rounded-full object-cover" />}
        size="square-40"
        title={user.username}
      />
    </div>
  )
}
