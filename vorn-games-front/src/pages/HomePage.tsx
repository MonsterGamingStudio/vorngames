import { AppLayout } from '../layout/AppLayout'
import { usePageTitle } from '../hooks/usePageTitle'

export default function HomePage() {
  usePageTitle('Supermarket Tycoon')

  return <AppLayout />
}

