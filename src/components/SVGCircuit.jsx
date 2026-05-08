/**
 * SVGCircuit — animated SVG circuit board lines
 * Decorative element for dark sections
 */
import { motion } from 'framer-motion'

const paths = [
  'M 20 80 L 80 80 L 80 40 L 140 40',
  'M 160 20 L 160 60 L 220 60 L 220 100 L 280 100',
  'M 300 50 L 340 50 L 340 90 L 400 90',
  'M 10 120 L 60 120 L 60 160 L 120 160 L 120 140 L 180 140',
  'M 200 130 L 260 130 L 260 170 L 320 170',
  'M 350 110 L 390 110 L 390 150 L 440 150',
]

const dots = [
  { cx: 80, cy: 80 }, { cx: 80, cy: 40 }, { cx: 160, cy: 60 },
  { cx: 220, cy: 100 }, { cx: 340, cy: 50 }, { cx: 120, cy: 160 },
  { cx: 260, cy: 130 }, { cx: 390, cy: 110 },
]

export default function SVGCircuit({ opacity = 0.12 }) {
  return (
    <svg
      viewBox="0 0 460 200"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx} cy={d.cy} r="3"
          fill="#2563EB"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
        />
      ))}
    </svg>
  )
}
