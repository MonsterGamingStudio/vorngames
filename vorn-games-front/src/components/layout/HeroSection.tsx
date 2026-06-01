import { HeroContent } from './HeroContent'
import { HeroPlayBlock } from './HeroPlayBlock'

export function HeroSection() {
  return (
    <div className="flex justify-between items-center bg-surface gap-[14px] pl-[40px] pr-[35px] pt-[28px] pb-[28px] border border-gray/20 rounded-[40px] max-lg:flex-col max-lg:items-stretch">
      <HeroContent />
      <HeroPlayBlock />
    </div>
  )
}
