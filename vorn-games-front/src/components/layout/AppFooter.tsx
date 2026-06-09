import type { LegalModalId } from '../../layout/constants'
import { FooterLegalLinks } from './FooterLegalLinks'
import { FooterPoweredBy } from './FooterPoweredBy'
import { FooterTop } from './FooterTop'

type AppFooterProps = {
  onOpenLegal: (id: LegalModalId) => void
}

export function AppFooter({ onOpenLegal }: AppFooterProps) {
  return (
    <footer className="mt-6 flex flex-col gap-5 border border-gray/20 bg-surface p-4 sm:mt-10 sm:gap-[29px] sm:p-6 sm:rounded-[24px] md:p-8 lg:p-[40px] lg:rounded-[40px] max-md:rounded-[20px]">
      <FooterTop />
      <FooterLegalLinks onOpenLegal={onOpenLegal} />
      <FooterPoweredBy />
    </footer>
  )
}
