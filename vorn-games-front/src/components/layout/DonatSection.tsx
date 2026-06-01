import { DonatPacksGrid } from './DonatPacksGrid'
import { DonatSectionHeader } from './DonatSectionHeader'

export function DonatSection() {
  return (
    <div className="flex flex-col gap-[29px] bg-surface p-[40px] border border-gray/20 rounded-[40px] vorn-case-block">
      <DonatSectionHeader />
      <DonatPacksGrid />
    </div>
  )
}
