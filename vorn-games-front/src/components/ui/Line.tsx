import { useEffect, useRef, useState } from 'react'
import './Line.css'

const WORDS = [
    'SUPERMARKET',
    'TYCOON',
    'BUSINESS',
    'CASHFLOW',
    'MULTIPLAYER',
    'DELIVERY',
    'MANAGEMENT',
    'PROFITS',
    'UPGRADE',
    'EMPLOYEES',
    'STORAGE',
    'PREMIUM',
    'REWARDS',
] as const

function MarqueeGroup({ words }: { words: readonly string[] }) {
    return (
        <div className="vorn-line-marquee__group">
            {words.map((word) => (
                <span key={word}>{word}</span>
            ))}
        </div>
    )
}

function MarqueeHalf({
    words,
    count,
    ariaHidden,
}: {
    words: readonly string[]
    count: number
    ariaHidden?: boolean
}) {
    return (
        <div className="vorn-line-marquee__half" aria-hidden={ariaHidden}>
            {Array.from({ length: count }, (_, index) => (
                <MarqueeGroup key={index} words={words} />
            ))}
        </div>
    )
}

export function Line() {
    const containerRef = useRef<HTMLDivElement>(null)
    const measureRef = useRef<HTMLDivElement>(null)
    const [copiesPerHalf, setCopiesPerHalf] = useState(2)

    useEffect(() => {
        const container = containerRef.current
        const measure = measureRef.current
        if (!container || !measure) return

        const update = () => {
            const containerWidth = container.clientWidth
            const groupWidth = measure.offsetWidth
            if (groupWidth <= 0) return

            setCopiesPerHalf(Math.max(1, Math.ceil(containerWidth / groupWidth) + 1))
        }

        update()

        const observer = new ResizeObserver(update)
        observer.observe(container)
        observer.observe(measure)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={containerRef}
            className="vorn-line-primary-bg vorn-line-marquee h-[50px] w-full font-bebas-bold text-[24px] text-white"
        >
            <div ref={measureRef} className="vorn-line-marquee__measure" aria-hidden="true">
                <MarqueeGroup words={WORDS} />
            </div>

            <div className="vorn-line-marquee__track" aria-label="Vorn games categories" role="marquee">
                <MarqueeHalf words={WORDS} count={copiesPerHalf} ariaHidden />
                <MarqueeHalf words={WORDS} count={copiesPerHalf} />
            </div>
        </div>
    )
}
