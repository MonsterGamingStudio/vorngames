import { cn } from '../../utils/cn'

type DonatPackAmountProps = {
  amount: string
  featured: boolean
}

export function DonatPackAmount({ amount, featured }: DonatPackAmountProps) {
  return (
    <span
      className={cn(
        'text-secondary mb-5',
        featured ? 'text-[30px]' : 'text-[24px]',
      )}
    >
      {amount}
    </span>
  )
}
