type FooterContactItemProps = {
  title: string
  value: string
}

export function FooterContactItem({ title, value }: FooterContactItemProps) {
  return (
    <div className="flex flex-col gap-[8px] text-[16px] text-outline sm:text-[20px]">
      <span className="text-[16px] font-gilroy-medium text-secondary">{title}</span>
      <span>{value}</span>
    </div>
  )
}
