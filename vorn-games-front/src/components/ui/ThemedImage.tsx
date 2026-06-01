import { cn } from '../../utils/cn'
import './ThemedImage.css'

export type ThemedImageProps = {
  lightSrc: string
  darkSrc: string
  alt?: string
  className?: string
  imgClassName?: string
  width?: number
  height?: number
}

export function ThemedImage({
  lightSrc,
  darkSrc,
  alt = '',
  className,
  imgClassName,
  width,
  height,
}: ThemedImageProps) {
  return (
    <span className={cn('vorn-themed-image', className)}>
      <img
        className={cn('vorn-themed-image__img vorn-themed-image__img--light', imgClassName)}
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
      <img
        className={cn('vorn-themed-image__img vorn-themed-image__img--dark', imgClassName)}
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </span>
  )
}

