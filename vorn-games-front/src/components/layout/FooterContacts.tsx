import { useTranslation } from 'react-i18next'
import { footerContactEmails } from '../../layout/constants'
import { FooterContactItem } from './FooterContactItem'

export function FooterContacts() {
  const { t } = useTranslation()

  return (
    <div className="flex min-w-0 flex-col gap-4 sm:gap-[22px]">
      {footerContactEmails.map((email) => (
        <FooterContactItem key={email} title={t('footer.email')} value={email} />
      ))}
    </div>
  )
}
