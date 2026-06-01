import type { LegalModalId } from '../../layout/constants'
import { Modal } from '../ui/Modal'
import { OfferLegalContent } from './legal/OfferLegalContent'
import { LegalModalContent } from './LegalModalContent'

type LegalModalHostProps = {
  open: boolean
  modalId?: LegalModalId
  title?: string
  content?: string
  onClose: () => void
  onExited: () => void
}

export function LegalModalHost({
  open,
  modalId,
  title,
  content,
  onClose,
  onExited,
}: LegalModalHostProps) {
  const isOffer = modalId === 'offer'

  return (
    <Modal
      open={open}
      onClose={onClose}
      onExited={onExited}
      title={title}
      className={isOffer ? 'max-w-2xl' : undefined}
      scrollClassName={isOffer ? 'max-h-[min(75vh,40rem)]' : undefined}
    >
      {isOffer ? (
        <OfferLegalContent />
      ) : content ? (
        <LegalModalContent content={content} />
      ) : null}
    </Modal>
  )
}
