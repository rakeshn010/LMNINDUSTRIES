import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import CookieBanner from './components/CookieBanner'
import Preloader from './components/Preloader'

// ── Lazy-loaded pages (code splitting) ──────────────────────
const Home     = lazy(() => import('./pages/Home'))
const About    = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Products = lazy(() => import('./pages/Products'))
const Contact  = lazy(() => import('./pages/Contact'))

// ── Page loading fallback ────────────────────────────────────
function PageLoader() {
  return (
    <div style={{
      minHeight: '40vh',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <div style={{
        width: 32, 
        height: 32,
        border: '3px solid rgba(37,99,235,0.2)',
        borderTopColor: '#2563EB',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  )
}

// ── Scroll to top on route change ───────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }, [pathname])

  return null
}

// ── Animated routes ──────────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageTransition><Suspense fallback={<PageLoader />}><Home /></Suspense></PageTransition>} />
        <Route path="/about"    element={<PageTransition><Suspense fallback={<PageLoader />}><About /></Suspense></PageTransition>} />
        <Route path="/services" element={<PageTransition><Suspense fallback={<PageLoader />}><Services /></Suspense></PageTransition>} />
        <Route path="/products" element={<PageTransition><Suspense fallback={<PageLoader />}><Products /></Suspense></PageTransition>} />
        <Route path="/contact"  element={<PageTransition><Suspense fallback={<PageLoader />}><Contact /></Suspense></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

// ── Main App ─────────────────────────────────────────────────
function App() {
  const [loaded, setLoaded] = useState(() => {
    // Skip preloader if already seen this session
    return sessionStorage.getItem('lmn-loaded') === '1'
  })

  const handlePreloaderDone = () => {
    sessionStorage.setItem('lmn-loaded', '1')
    setLoaded(true)
  }

  // Register service worker (only in production)
  useEffect(() => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // SW registration failed silently — not critical
        })
      })
    }
  }, [])

  return (
    <>
      {/* Cinematic preloader — shows once per session */}
      {!loaded && <Preloader onComplete={handlePreloaderDone} />}

      {loaded && (
        <Router>
          {/* Auto scroll to top on route change */}
          <ScrollToTop />

          {/* Custom magnetic cursor */}
          <CustomCursor />

          {/* Sticky Navbar */}
          <Navbar />

          {/* Page Routes with transitions */}
          <AnimatedRoutes />

          {/* Shared Footer */}
          <Footer />

          {/* Floating WhatsApp Button */}
          <WhatsAppFloat />

          {/* Back to top */}
          <BackToTop />

          {/* GDPR Cookie Banner */}
          <CookieBanner />
        </Router>
      )}
    </>
  )
}

export default App
