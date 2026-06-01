import { cn } from '../../utils/cn'
import type { DonatPack } from '../../layout/constants'

type DonatPackImageProps = {
  pack: DonatPack
}

export function DonatPackImage({ pack }: DonatPackImageProps) {
  return (
    <div
      className={cn(
        'vorn-case-block-donat h-[200px]',
        pack.featured && 'vorn-case-block-donat--featured',
      )}
    >
      <img src={pack.image} alt="" className="vorn-case-block-donat__image" />
    </div>
  )
}
