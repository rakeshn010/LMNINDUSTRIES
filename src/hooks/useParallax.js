import { useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

/**
 * Returns a motionValue that moves at a fraction of scroll speed.
 * Used for hero background parallax.
 * @param {number} speed - fraction of scroll speed (e.g. 0.4 = 40% of scroll)
 */
export default function useParallax(speed = 0.4) {
  const shouldReduce = useReducedMotion()
  const { scrollY } = useScroll()

  // If reduced motion, return a static 0 value
  const y = useTransform(
    scrollY,
    [0, 800],
    shouldReduce ? [0, 0] : [0, 800 * speed]
  )

  return y
}
