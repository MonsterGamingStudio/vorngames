import { footerRequisites } from '../../layout/constants'
import { FooterRequisiteLine } from './FooterRequisiteLine'

export function FooterRequisites() {
  return (
    <div className="flex flex-col gap-[14px]">
      <span className="text-[16px] font-gilroy-medium text-outline">Реквизиты</span>
      <div className="text-secondary text-[20px] max-sm:text-[18px] flex flex-col gap-[10px]">
        {footerRequisites.map((item) => (
          <FooterRequisiteLine key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  )
}
