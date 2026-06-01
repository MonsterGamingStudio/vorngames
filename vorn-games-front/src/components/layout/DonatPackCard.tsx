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
        'border border-gray/20 w-full rounded-[20px] overflow-hidden flex flex-col',
        pack.featured && 'col-span-2 max-lg:col-span-1',
      )}
    >
      <DonatPackImage pack={pack} />
      <DonatPackDetails pack={pack} />
    </div>
  )
}
