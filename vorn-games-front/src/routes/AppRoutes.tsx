import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/HomePage'))
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'))

export function AppRoutes() {
  return (
    <React.Suspense fallback={<div className="p-6 text-sm">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/supermarketsbox" replace />} />
        <Route path="/supermarketsbox" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  )
}

