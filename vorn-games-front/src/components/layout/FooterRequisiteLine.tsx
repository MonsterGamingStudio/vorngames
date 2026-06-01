type FooterRequisiteLineProps = {
  label: string
  value: string
}

export function FooterRequisiteLine({ label, value }: FooterRequisiteLineProps) {
  return (
    <span>
      <span className="text-outline">{label}</span> {value}
    </span>
  )
}
