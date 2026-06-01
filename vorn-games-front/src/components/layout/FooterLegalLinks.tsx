import { useTranslation } from 'react-i18next'
import { footerLegalLinkIds, type LegalModalId } from '../../layout/constants'
import { FooterLegalLink } from './FooterLegalLink'
import { FooterTelegramButton } from './FooterTelegramButton'

type FooterLegalLinksProps = {
  onOpenLegal: (id: LegalModalId) => void
}

export function FooterLegalLinks({ onOpenLegal }: FooterLegalLinksProps) {
  const { t } = useTranslation()

  return (
    <div className="grid w-full grid-cols-2 gap-[14px] lg:flex lg:flex-row lg:flex-wrap lg:justify-between">
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
