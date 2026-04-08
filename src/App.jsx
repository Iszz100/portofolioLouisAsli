import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'
import useResponsiveMotion from './hooks/useResponsiveMotion'
import HomePage from './pages/HomePage'

const CertificationsPage = lazy(() => import('./pages/CertificationsPage'))

function App() {
  const { reduceMotion } = useResponsiveMotion()

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-tech-grid bg-[size:40px_40px] opacity-[0.17]" />
      <div className="noise-texture pointer-events-none fixed inset-0 -z-20 opacity-[0.22]" />

      <div
        aria-hidden
        className={`pointer-events-none fixed left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl ${reduceMotion ? '' : 'float-blob-a'}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none fixed right-[9%] top-[38%] -z-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl ${reduceMotion ? '' : 'float-blob-b'}`}
      />

      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sertifikasi" element={<CertificationsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
