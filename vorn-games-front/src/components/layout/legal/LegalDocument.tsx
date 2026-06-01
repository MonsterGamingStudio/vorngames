import type { ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export const legalBodyClass =
  'font-gilroy-medium text-[14px] text-outline leading-[150%]'

export function LegalDocument({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={cn('flex flex-col gap-8', className)}>{children}</article>
}

export function LegalDocHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <header className="space-y-2 border-b border-gray/20 pb-6 text-center">
      <h2 className="text-[18px] font-gilroy-bold uppercase tracking-wide text-secondary">{title}</h2>
      {subtitle ? (
        <p className={cn(legalBodyClass, 'text-secondary/90')}>{subtitle}</p>
      ) : null}
    </header>
  )
}

export function LegalSection({
  title,
  children,
  number,
}: {
  title: string
  number?: number
  children: ReactNode
}) {
  return (
    <section className="space-y-4">
      <h3 className="text-[16px] font-gilroy-bold text-secondary">
        {number != null ? `${number}. ` : ''}
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2 pl-3 border-l-2 border-gray/15">
      <h4 className="text-[15px] font-gilroy-bold text-secondary/95">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className={legalBodyClass}>{children}</p>
}

export function LegalOl({ children }: { children: ReactNode }) {
  return (
    <ol className={cn(legalBodyClass, 'list-decimal space-y-2 pl-5 marker:text-secondary/80')}>
      {children}
    </ol>
  )
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className={cn(legalBodyClass, 'list-disc space-y-1.5 pl-5 marker:text-secondary/60')}>
      {children}
    </ul>
  )
}

export function LegalLi({ children }: { children: ReactNode }) {
  return <li className="pl-1">{children}</li>
}

export function LegalDefinitions({ items }: { items: { term: string; definition: ReactNode }[] }) {
  return (
    <dl className="space-y-3 rounded-xl border border-gray/15 bg-black/[0.02] p-4 dark:bg-white/[0.03]">
      {items.map(({ term, definition }) => (
        <div key={term} className="space-y-1">
          <dt className="text-[14px] font-gilroy-bold text-secondary">{term}</dt>
          <dd className={legalBodyClass}>{definition}</dd>
        </div>
      ))}
    </dl>
  )
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary underline decoration-secondary/30 underline-offset-2 transition hover:decoration-secondary"
    >
      {children}
    </a>
  )
}

export function LegalRequisites({
  items,
}: {
  items: { label: string; value: ReactNode }[]
}) {
  return (
    <dl className="space-y-3 rounded-xl border border-gray/20 bg-black/[0.02] p-4 dark:bg-white/[0.03]">
      {items.map(({ label, value }) => (
        <div key={label} className="grid gap-1 sm:grid-cols-[minmax(7rem,auto)_1fr] sm:gap-x-4">
          <dt className="text-[13px] font-gilroy-bold uppercase tracking-wide text-secondary/80">{label}</dt>
          <dd className={cn(legalBodyClass, 'text-secondary')}>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
