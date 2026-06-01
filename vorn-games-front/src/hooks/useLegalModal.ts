import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { LegalModalId } from '../layout/constants'

export function useLegalModal() {
  const { t } = useTranslation()
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

  const title = activeId ? t(`legal.modals.${activeId}.title`) : undefined

  return {
    open,
    activeId,
    title,
    openModal,
    closeModal,
    handleExited,
  }
}
