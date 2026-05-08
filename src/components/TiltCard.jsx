/**
 * TiltCard — 3D perspective tilt on mouse move
 * Wraps any children with a tilt effect
 */
import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function TiltCard({ children, className, style, intensity = 8 }) {
  const ref = useRef(null)
  const shouldReduce = useReducedMotion()

  const handleMove = (e) => {
    if (shouldReduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    ref.current.style.transform =
      `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`

    // Update spotlight position CSS vars
    ref.current.style.setProperty('--mouse-x', `${(e.clientX - rect.left)}px`)
    ref.current.style.setProperty('--mouse-y', `${(e.clientY - rect.top)}px`)
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
