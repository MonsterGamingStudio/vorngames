import { footerLegalLinks, type LegalModalId } from '../../layout/constants'
import { FooterLegalLink } from './FooterLegalLink'
import { FooterTelegramButton } from './FooterTelegramButton'

type FooterLegalLinksProps = {
  onOpenLegal: (id: LegalModalId) => void
}

export function FooterLegalLinks({ onOpenLegal }: FooterLegalLinksProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-[14px] lg:flex lg:flex-row lg:flex-wrap lg:justify-between">
      {footerLegalLinks.map((link) => (
        <FooterLegalLink
          key={link.id}
          label={link.label}
          onClick={() => onOpenLegal(link.id)}
        />
      ))}
      <FooterTelegramButton />
    </div>
  )
}
