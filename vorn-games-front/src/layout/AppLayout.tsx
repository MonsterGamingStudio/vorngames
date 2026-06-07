import { Line } from '../components/ui/Line'
import { AppFooter } from '../components/layout/AppFooter'
import { AppHeader } from '../components/layout/AppHeader'
import { DonatSection } from '../components/layout/DonatSection'
import { HeroSection } from '../components/layout/HeroSection'
import { LegalModalHost } from '../components/layout/LegalModalHost'
import { PageContainer } from '../components/layout/PageContainer'
import { useLegalModal } from '../hooks/useLegalModal'
import './AppLayout.css'

export function AppLayout() {
  const legalModal = useLegalModal()

  return (
    <main className="min-h-dvh min-w-0 overflow-x-clip">
      <PageContainer>
        <AppHeader />
        <HeroSection />
      </PageContainer>

      <Line />

      <PageContainer>
        <DonatSection />
        <AppFooter onOpenLegal={legalModal.openModal} />
      </PageContainer>

      <LegalModalHost
        open={legalModal.open}
        modalId={legalModal.activeId ?? undefined}
        title={legalModal.title}
        onClose={legalModal.closeModal}
        onExited={legalModal.handleExited}
      />
    </main>
  )
}
