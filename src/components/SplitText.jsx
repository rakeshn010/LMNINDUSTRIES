/**
 * SplitText — letter-by-letter reveal animation
 * Each character animates in with stagger + spring
 */
import { motion, useReducedMotion } from 'framer-motion'

export default function SplitText({ text, style, className, delay = 0, stagger = 0.03 }) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <span className={className} style={style}>{text}</span>
  }

  const chars = text.split('')

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  const charVariant = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block', perspective: '600px', ...style }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          style={{
            display: 'inline-block',
            willChange: 'transform, opacity',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
