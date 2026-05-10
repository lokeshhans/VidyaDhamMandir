import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import FloatingActions from './components/FloatingActions'

const Home = lazy(() => import('./pages/Home'))

/* ===================================================== */
/* PREMIUM LOADING SCREEN */
/* ===================================================== */

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#fffdf9] flex items-center justify-center px-6">
      <div className="max-w-md text-center animate-fadeUp">

        {/* Soft Brand Line */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-100 bg-orange-50 mb-6">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>

          <span className="text-[12px] tracking-[0.18em] uppercase font-semibold text-orange-600">
            Free Education Initiative
          </span>
        </div>

        {/* Institute Name */}
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Vidya Dham Mandir
        </h1>

        {/* Humanized Subtitle */}
        <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
          Building a learning environment where students receive guidance,
          mentorship, and quality education without financial barriers.
        </p>

        {/* Minimal Loader */}
        <div className="mt-10 flex justify-center">
          <div className="w-16 h-[3px] rounded-full bg-orange-100 overflow-hidden">
            <div className="h-full w-1/2 bg-orange-500 animate-loadingBar rounded-full"></div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-slate-400 tracking-wide">
          Preparing learning experience...
        </p>
      </div>
    </div>
  )
}

/* ===================================================== */
/* APP */
/* ===================================================== */

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fffdf9] text-slate-900">

      {/* Global Soft Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-50 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Pages */}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>

      {/* Floating Buttons */}
      <FloatingActions />
    </div>
  )
}