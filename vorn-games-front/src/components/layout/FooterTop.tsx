import { FooterAbout } from './FooterAbout'
import { FooterContacts } from './FooterContacts'
import { FooterRequisites } from './FooterRequisites'

export function FooterTop() {
  return (
    <div className="flex justify-between w-full max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-[40px] max-lg:gap-y-[29px] max-sm:grid-cols-1">
      <FooterAbout />
      <FooterRequisites />
      <FooterContacts />
    </div>
  )
}
