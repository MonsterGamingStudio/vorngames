import { legalBodyClass } from './legal/LegalDocument'

type LegalModalContentProps = {
  content: string
}

export function LegalModalContent({ content }: LegalModalContentProps) {
  return <p className={`${legalBodyClass} whitespace-pre-line`}>{content}</p>
}
