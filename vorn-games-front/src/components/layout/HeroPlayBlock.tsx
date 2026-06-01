import { ThemedImage } from '../ui/ThemedImage'

export function HeroPlayBlock() {
  return (
    <div className="vorn-play-block w-[500px] h-[224px] max-lg:w-full max-lg:h-auto max-lg:aspect-16/9 rounded-[20px] border border-gray/20 flex items-center justify-center">
      <ThemedImage
        lightSrc="/icons/playBig.svg"
        darkSrc="/icons/playBigDark.svg"
        className="h-[50px] w-[50px]"
        imgClassName="h-full w-full object-contain"
      />
    </div>
  )
}
