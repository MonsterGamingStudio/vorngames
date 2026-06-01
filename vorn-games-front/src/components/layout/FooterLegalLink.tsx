import { Button } from '../ui/Button'

type FooterLegalLinkProps = {
  label: string
  onClick: () => void
}

export function FooterLegalLink({ label, onClick }: FooterLegalLinkProps) {
  return (
    <Button variant="outline" className="h-auto min-h-10 w-full whitespace-normal px-3 py-2 text-center" onClick={onClick}>
      {label}
    </Button>
  )
}
