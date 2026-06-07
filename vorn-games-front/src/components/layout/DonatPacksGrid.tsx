import { donatPacks } from '../../layout/constants'
import { DonatPackCard } from './DonatPackCard'

export function DonatPacksGrid() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-[25px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-4">
      {donatPacks.map((pack) => (
        <DonatPackCard key={pack.image} pack={pack} />
      ))}
    </div>
  )
}
