import { ThemeSwitcher } from '../ThemeSwitcher'
import { useGetMeQuery } from '../../store/services/authApi'
import { BalanceActions } from './BalanceActions'
import { SteamLoginButton } from './SteamLoginButton'

export function HeaderAuth() {
  const { data: user, isLoading } = useGetMeQuery()

  return (
    <div className="flex gap-[14px] max-lg:self-end">
      {isLoading ? null : user ? <BalanceActions user={user} /> : <SteamLoginButton />}
      <ThemeSwitcher />
    </div>
  )
}
