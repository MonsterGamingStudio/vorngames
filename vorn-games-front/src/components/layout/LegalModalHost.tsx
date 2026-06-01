import { Modal } from '../ui/Modal'
import { LegalModalContent } from './LegalModalContent'

type LegalModalHostProps = {
  open: boolean
  title?: string
  onClose: () => void
  onExited: () => void
}

export function LegalModalHost({ open, title, onClose, onExited }: LegalModalHostProps) {
  return (
    <Modal open={open} onClose={onClose} onExited={onExited} title={title}>
      <LegalModalContent />
    </Modal>
  )
}
