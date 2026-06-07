import { cn } from '../../utils/cn'
import type { DonatPack } from '../../layout/constants'
import { DonatPackDetails } from './DonatPackDetails'
import { DonatPackImage } from './DonatPackImage'

type DonatPackCardProps = {
  pack: DonatPack
}

export function DonatPackCard({ pack }: DonatPackCardProps) {
  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-col overflow-hidden rounded-[16px] border border-gray/20 sm:rounded-[20px]',
        pack.featured && 'col-span-2 max-lg:col-span-1',
      )}
    >
      <DonatPackImage pack={pack} />
      <DonatPackDetails pack={pack} />
    </div>
  )
}
