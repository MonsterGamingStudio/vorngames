import { useRef, useState } from 'react'
import { legalModals, type LegalModalId } from '../layout/constants'

export function useLegalModal() {
  const [activeId, setActiveId] = useState<LegalModalId | null>(null)
  const [open, setOpen] = useState(false)
  const openRef = useRef(open)
  openRef.current = open

  const openModal = (id: LegalModalId) => {
    setActiveId(id)
    setOpen(true)
  }

  const closeModal = () => setOpen(false)

  const handleExited = () => {
    if (!openRef.current) setActiveId(null)
  }

  const title = activeId ? legalModals[activeId].title : undefined

  return {
    open,
    title,
    openModal,
    closeModal,
    handleExited,
  }
}
