import { HeroActions } from './HeroActions'
import { HeroDescription } from './HeroDescription'
import { HeroTitle } from './HeroTitle'

export function HeroContent() {
  return (
    <div className="flex flex-col gap-[25px] text-gray leading-[120%]">
      <HeroTitle />
      <HeroDescription />
      <HeroActions />
    </div>
  )
}
