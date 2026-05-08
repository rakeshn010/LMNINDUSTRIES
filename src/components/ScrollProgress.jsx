import { useScroll, useSpring, motion } from 'framer-motion'

/**
 * Thin 3px reading progress bar fixed at the very top of the page.
 * Fills left-to-right as user scrolls down.
 * Color: #2563EB gradient to #60a5fa
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, willChange: 'transform' }}
    />
  )
}
