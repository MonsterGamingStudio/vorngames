import { DonatPacksGrid } from './DonatPacksGrid'
import { DonatSectionHeader } from './DonatSectionHeader'

export function DonatSection() {
  return (
    <div className="vorn-case-block flex flex-col gap-5 border border-gray/20 bg-surface p-4 sm:gap-[29px] sm:p-6 sm:rounded-[24px] md:p-8 lg:p-[40px] lg:rounded-[40px]">
      <DonatSectionHeader />
      <DonatPacksGrid />
    </div>
  )
}
