import { ThemeSwitcher } from '../ThemeSwitcher'
import { useGetMeQuery } from '../../store/services/authApi'
import { BalanceActions } from './BalanceActions'
import { SteamLoginButton } from './SteamLoginButton'

export function HeaderAuth() {
  const { data: user, isLoading } = useGetMeQuery()

  return (
    <div className="flex items-center gap-[14px] max-lg:self-end max-md:min-w-0 max-md:w-full max-md:flex-wrap max-md:gap-2">
      {isLoading ? null : user ? <BalanceActions user={user} /> : <SteamLoginButton />}
      <ThemeSwitcher />
    </div>
  )
}
