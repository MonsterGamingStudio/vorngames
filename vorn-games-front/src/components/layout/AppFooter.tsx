import type { LegalModalId } from '../../layout/constants'
import { FooterLegalLinks } from './FooterLegalLinks'
import { FooterPoweredBy } from './FooterPoweredBy'
import { FooterTop } from './FooterTop'

type AppFooterProps = {
  onOpenLegal: (id: LegalModalId) => void
}

export function AppFooter({ onOpenLegal }: AppFooterProps) {
  return (
    <footer className="mt-10 flex flex-col gap-[29px] bg-surface p-[40px] max-md:p-6 border border-gray/20 rounded-[40px] max-md:rounded-[24px]">
      <FooterTop />
      <FooterLegalLinks onOpenLegal={onOpenLegal} />
      <FooterPoweredBy />
    </footer>
  )
}
