/**
 * ThemeToggle — dark/light mode switch
 * Stores preference in localStorage
 */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('lmn-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('lmn-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('lmn-theme', 'light')
    }
  }, [dark])

  return { dark, toggle: () => setDark(d => !d) }
}

export default function ThemeToggle({ dark, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 38, height: 38,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.2)',
        background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        transition: 'background 0.2s ease, border-color 0.2s ease',
        flexShrink: 0,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.span key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <FaSun style={{ color: '#fbbf24', fontSize: '0.9rem' }} />
          </motion.span>
        ) : (
          <motion.span key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <FaMoon style={{ color: '#93c5fd', fontSize: '0.85rem' }} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
