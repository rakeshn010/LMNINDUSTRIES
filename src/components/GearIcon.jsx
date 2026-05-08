/**
 * GearIcon — animated SVG gear that rotates on hover / scroll
 */
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function GearIcon({ size = 80, color = '#2563EB', speed = 1, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed])

  return (
    <motion.div ref={ref} style={{ width: size, height: size, ...style }}>
      <motion.svg
        viewBox="0 0 100 100"
        style={{ width: '100%', height: '100%', rotate }}
      >
        <path
          d="M43.3 5.8l-3.1 9.5c-2.4.7-4.7 1.7-6.8 3L24 14.6l-9.4 9.4 3.7 9.4c-1.3 2.1-2.3 4.4-3 6.8L5.8 43.3v13.4l9.5 3.1c.7 2.4 1.7 4.7 3 6.8l-3.7 9.4 9.4 9.4 9.4-3.7c2.1 1.3 4.4 2.3 6.8 3l3.1 9.5h13.4l3.1-9.5c2.4-.7 4.7-1.7 6.8-3l9.4 3.7 9.4-9.4-3.7-9.4c1.3-2.1 2.3-4.4 3-6.8l9.5-3.1V43.3l-9.5-3.1c-.7-2.4-1.7-4.7-3-6.8l3.7-9.4-9.4-9.4-9.4 3.7c-2.1-1.3-4.4-2.3-6.8-3L56.7 5.8H43.3zM50 35c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"
          fill={color}
          opacity="0.9"
        />
      </motion.svg>
    </motion.div>
  )
}
