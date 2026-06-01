import { donatPacks } from '../../layout/constants'
import { DonatPackCard } from './DonatPackCard'

export function DonatPacksGrid() {
  return (
    <div className="mt-[25px] grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
      {donatPacks.map((pack) => (
        <DonatPackCard key={pack.image} pack={pack} />
      ))}
    </div>
  )
}
