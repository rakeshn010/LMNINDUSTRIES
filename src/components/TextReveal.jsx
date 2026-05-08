import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TextReveal({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.03,
  duration = 0.5,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  
  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
          } : {}}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
