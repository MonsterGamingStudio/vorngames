import type { LegalModalId } from '../../layout/constants'
import { Modal } from '../ui/Modal'
import { legalModalContentById } from './legal/legalModalContent'

type LegalModalHostProps = {
  open: boolean
  modalId?: LegalModalId
  title?: string
  onClose: () => void
  onExited: () => void
}

export function LegalModalHost({ open, modalId, title, onClose, onExited }: LegalModalHostProps) {
  const Content = modalId ? legalModalContentById[modalId] : null
  const isStructuredLegal = modalId != null

  return (
    <Modal
      open={open}
      onClose={onClose}
      onExited={onExited}
      title={title}
      className={isStructuredLegal ? 'max-w-2xl' : undefined}
      scrollClassName={isStructuredLegal ? 'max-h-[min(75vh,40rem)]' : undefined}
    >
      {Content ? <Content /> : null}
    </Modal>
  )
}
