/**
 * WhatsAppFloat — animated floating button with tooltip
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.22,1,0.36,1] }}
            style={{
              background: '#071828',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.5rem 0.9rem',
              borderRadius: 8,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/917795533453?text=Hello%20LMN%20Industries%2C%20I%20would%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: [0.22,1,0.36,1] }}
        style={{ position: 'static' }} // override fixed from CSS since parent is fixed
      >
        <FaWhatsapp style={{ color: '#fff', fontSize: '1.75rem' }} />
      </motion.a>
    </div>
  )
}
