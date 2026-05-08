/**
 * MagneticButton — button with magnetic pull + ripple click effect
 */
import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function MagneticButton({ children, className, style, onClick, href, target, rel, as: Tag = 'button' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState([])
  const shouldReduce = useReducedMotion()

  const handleMove = (e) => {
    if (shouldReduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.width / 2
    const cy = rect.height / 2
    const x = (e.clientX - rect.left - cx) * 0.35
    const y = (e.clientY - rect.top  - cy) * 0.35
    setPos({ x, y })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  const handleClick = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples(r => [...r, { x, y, id }])
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600)
    onClick && onClick(e)
  }

  const props = href
    ? { href, target, rel }
    : { onClick: handleClick }

  const El = href ? motion.a : motion.button

  return (
    <El
      ref={ref}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={!href ? handleClick : undefined}
      {...(href ? { href, target, rel } : {})}
    >
      {children}
      {/* Ripple effects */}
      {ripples.map(rp => (
        <motion.span
          key={rp.id}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: rp.x, top: rp.y,
            width: 40, height: 40,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.3)',
            transform: 'translate(-50%,-50%)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </El>
  )
}
