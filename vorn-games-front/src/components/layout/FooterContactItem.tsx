type FooterContactItemProps = {
  title: string
  value: string
}

export function FooterContactItem({ title, value }: FooterContactItemProps) {
  return (
    <div className="text-outline text-[20px] max-sm:text-[18px] flex flex-col gap-[8px]">
      <span className="text-[16px] font-gilroy-medium text-secondary">{title}</span>
      <span>{value}</span>
    </div>
  )
}
