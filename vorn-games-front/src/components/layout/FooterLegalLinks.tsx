import { useTranslation } from 'react-i18next'
import { footerLegalLinkIds, type LegalModalId } from '../../layout/constants'
import { FooterLegalLink } from './FooterLegalLink'
import { FooterTelegramButton } from './FooterTelegramButton'
import './FooterLegalLinks.css'

type FooterLegalLinksProps = {
  onOpenLegal: (id: LegalModalId) => void
}

export function FooterLegalLinks({ onOpenLegal }: FooterLegalLinksProps) {
  const { t } = useTranslation()

  return (
    <div className="footer-legal-links grid w-full min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-[14px] 3xl:grid-cols-6">
      {footerLegalLinkIds.map((id) => (
        <FooterLegalLink
          key={id}
          label={t(`legal.modals.${id}.title`)}
          onClick={() => onOpenLegal(id)}
        />
      ))}
      <FooterTelegramButton />
    </div>
  )
}
