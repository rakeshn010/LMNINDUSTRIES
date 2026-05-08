/**
 * CookieBanner — GDPR consent banner
 * Stores consent in localStorage, never shows again after accept/decline
 */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCookieBite, FaTimes } from 'react-icons/fa'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('lmn-cookie-consent')
    if (!consent) {
      // Show after 2s delay
      const t = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('lmn-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('lmn-cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 500,
            width: 'min(560px, calc(100vw - 2rem))',
            background: 'rgba(7,24,40,0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(96,165,250,0.2)',
            borderRadius: 14,
            padding: '1.25rem 1.5rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          {/* Icon */}
          <div style={{
            width: 40, height: 40, flexShrink: 0,
            background: 'rgba(37,99,235,0.15)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(37,99,235,0.25)',
          }}>
            <FaCookieBite style={{ color: '#60a5fa', fontSize: '1.1rem' }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: 'Poppins,sans-serif',
              fontWeight: 600, fontSize: '0.875rem',
              color: '#fff', marginBottom: '0.35rem',
            }}>
              We use cookies
            </p>
            <p style={{
              fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6, marginBottom: '1rem',
            }}>
              We use cookies to improve your experience and analyse site traffic.
              By clicking "Accept", you consent to our use of cookies.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <motion.button
                onClick={accept}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg,#2563EB,#1d4ed8)',
                  color: '#fff', border: 'none',
                  padding: '0.5rem 1.25rem', borderRadius: 6,
                  fontSize: '0.8rem', fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(37,99,235,0.35)',
                }}
              >
                Accept All
              </motion.button>
              <motion.button
                onClick={decline}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.5rem 1.25rem', borderRadius: 6,
                  fontSize: '0.8rem', fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Decline
              </motion.button>
            </div>
          </div>

          {/* Close */}
          <motion.button
            onClick={decline}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'none', border: 'none',
              color: 'rgba(255,255,255,0.3)',
              cursor: 'pointer', padding: '0.25rem',
              flexShrink: 0, fontSize: '0.9rem',
            }}
            aria-label="Close"
          >
            <FaTimes />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
