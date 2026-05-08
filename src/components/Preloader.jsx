/**
 * Preloader — cinematic loading screen
 * Plays once on first visit, then fades out
 */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LMNLogo from './LMNLogo'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Animate progress bar
    const steps = [20, 45, 70, 88, 100]
    const delays = [200, 400, 300, 400, 300]
    let i = 0
    const run = () => {
      if (i >= steps.length) {
        setTimeout(() => setDone(true), 400)
        return
      }
      setTimeout(() => {
        setProgress(steps[i])
        i++
        run()
      }, delays[i] || 300)
    }
    run()
  }, [])

  useEffect(() => {
    if (done) {
      setTimeout(() => onComplete?.(), 700)
    }
  }, [done, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#071828',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Grid lines */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <LMNLogo size={64} showText={true} light={true} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: 'Inter,sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              position: 'relative', zIndex: 1,
            }}
          >
            Precision · Quality · On-Time
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              position: 'relative', zIndex: 1,
              width: 240,
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
            }}
          >
            {/* Track */}
            <div style={{
              width: '100%', height: 2,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 2, overflow: 'hidden',
            }}>
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #2563EB, #60a5fa)',
                  borderRadius: 2,
                  boxShadow: '0 0 8px rgba(37,99,235,0.6)',
                }}
              />
            </div>

            {/* Percentage */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'Inter,sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.06em',
            }}>
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
