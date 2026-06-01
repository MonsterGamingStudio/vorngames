import { formatBalance } from '../../utils/formatBalance'

type BalanceDisplayProps = {
  balance: number
}

export function BalanceDisplay({ balance }: BalanceDisplayProps) {
  return (
    <div className="flex items-center gap-[14px]">
      <div className="flex flex-col text-gray mr-[6px]">
        <span className="text-[14px] font-gilroy-medium">Баланс</span>
        <span className="text-[20px] text-secondary">{formatBalance(balance)}</span>
      </div>
    </div>
  )
}
