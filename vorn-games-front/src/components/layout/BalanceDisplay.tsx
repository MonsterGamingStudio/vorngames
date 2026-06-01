import { useTranslation } from 'react-i18next'
import { formatBalance } from '../../utils/formatBalance'

type BalanceDisplayProps = {
  balance: number
}

export function BalanceDisplay({ balance }: BalanceDisplayProps) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-[14px]">
      <div className="flex flex-col text-gray mr-[6px]">
        <span className="text-[14px] font-gilroy-medium">{t('header.balance')}</span>
        <span className="text-[20px] text-secondary">{formatBalance(balance)}</span>
      </div>
    </div>
  )
}
