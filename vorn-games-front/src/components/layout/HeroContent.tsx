// import { HeroActions } from './HeroActions'
import { HeroDescription } from './HeroDescription'
import { HeroTitle } from './HeroTitle'

export function HeroContent() {
  return (
    <div className="flex min-w-0 flex-col gap-4 text-gray leading-[120%] sm:gap-[25px]">
      <HeroTitle />
      <HeroDescription />
      {/* <HeroActions /> */}
    </div>
  )
}
