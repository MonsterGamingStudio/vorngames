import { FooterAbout } from './FooterAbout'
import { FooterContacts } from './FooterContacts'
import { FooterRequisites } from './FooterRequisites'

export function FooterTop() {
  return (
    <div className="flex w-full min-w-0 justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-5 max-sm:grid-cols-1 sm:max-lg:gap-x-[40px] sm:max-lg:gap-y-[29px]">
      <FooterAbout />
      <FooterRequisites />
      <FooterContacts />
    </div>
  )
}
