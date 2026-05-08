/**
 * BackToTop — animated scroll-to-top button
 * Appears after scrolling 400px
 */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '2rem',
            zIndex: 190,
            width: 44, height: 44,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0F2A44, #1a3d5c)',
            border: '1px solid rgba(96,165,250,0.3)',
            color: '#60a5fa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(15,42,68,0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <FaArrowUp style={{ fontSize: '0.85rem' }} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
