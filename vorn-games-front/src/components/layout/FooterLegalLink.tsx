import { Button } from '../ui/Button'

type FooterLegalLinkProps = {
  label: string
  onClick: () => void
}

export function FooterLegalLink({ label, onClick }: FooterLegalLinkProps) {
  return (
    <Button
      variant="outline"
      className="footer-legal-link w-full min-w-0 whitespace-normal text-center"
      onClick={onClick}
    >
      {label}
    </Button>
  )
}
