import { PageLoader } from './components/PageLoader'
import { usePageLoader } from './hooks/usePageLoader'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  const { visible, exiting } = usePageLoader()

  return (
    <>
      {visible ? <PageLoader exiting={exiting} /> : null}
      <AppRoutes />
    </>
  )
}

export default App
