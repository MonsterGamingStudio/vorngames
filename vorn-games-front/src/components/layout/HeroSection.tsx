import { HeroContent } from './HeroContent'
import { HeroPlayBlock } from './HeroPlayBlock'

export function HeroSection() {
  return (
    <div className="flex justify-between gap-3 border border-gray/20 bg-surface px-4 py-5 max-lg:flex-col sm:gap-[14px] sm:px-6 sm:py-6 sm:rounded-[24px] md:px-8 md:py-7 lg:pl-[40px] lg:pr-[35px] lg:pt-[28px] lg:pb-[28px] lg:rounded-[40px]">
      <HeroContent />
      <HeroPlayBlock />
    </div>
  )
}
