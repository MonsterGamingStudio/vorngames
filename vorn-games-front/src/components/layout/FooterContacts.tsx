import { footerContacts } from '../../layout/constants'
import { FooterContactItem } from './FooterContactItem'

export function FooterContacts() {
  return (
    <div className="flex flex-col gap-[22px]">
      {footerContacts.map((contact) => (
        <FooterContactItem key={contact.title} title={contact.title} value={contact.value} />
      ))}
    </div>
  )
}
