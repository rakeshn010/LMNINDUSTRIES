import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

/**
 * Wraps each page with a smooth fade+slide entrance animation.
 * Very subtle — 0.4s fade up from y:16
 */
export default function PageTransition({ children }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduce ? 0 : -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}
