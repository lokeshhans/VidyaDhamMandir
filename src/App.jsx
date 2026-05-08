import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FloatingActions from './components/FloatingActions'

const Home = lazy(() => import('./pages/Home'))

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🙏</div>
        <p className="text-royal-800 font-display text-lg">Vidya Dham Mandir</p>
        <p className="text-saffron-600 text-sm mt-1">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <FloatingActions />
    </>
  )
}
