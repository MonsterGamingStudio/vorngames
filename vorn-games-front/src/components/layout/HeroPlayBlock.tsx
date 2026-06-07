import { useState } from 'react'
import { ThemedImage } from '../ui/ThemedImage'

const YT_VIDEO_ID = '1HFzY-KbCQs'
const YT_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`

export function HeroPlayBlock() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <button
      type="button"
      className="vorn-play-block relative aspect-16/9 w-full min-w-0 overflow-hidden rounded-[16px] border border-gray/20 sm:rounded-[20px] lg:h-[360px] lg:w-[640px] lg:aspect-auto"
      aria-label="Play video"
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={YT_EMBED_URL}
          title="VornGames video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <span className="absolute inset-0">
          <img
            src="/banner.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            decoding="async"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/15">
          <ThemedImage
            lightSrc="/icons/playBig.svg"
            darkSrc="/icons/playBigDark.svg"
            className="h-[50px] w-[50px]"
            imgClassName="h-full w-full object-contain"
          />
          </span>
        </span>
      )}
    </button>
  )
}
