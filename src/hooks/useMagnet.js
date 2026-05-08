/**
 * useMagnet — magnetic pull effect on hover
 * Element moves toward cursor when nearby
 */
import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function useMagnet(strength = 0.4) {
  const ref = useRef(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || shouldReduce) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const threshold = Math.max(rect.width, rect.height) * 1.2

      if (dist < threshold) {
        const pull = (1 - dist / threshold) * strength
        el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`
      } else {
        el.style.transform = 'translate(0,0)'
      }
    }

    const onLeave = () => {
      el.style.transform = 'translate(0,0)'
    }

    el.style.transition = 'transform 0.3s cubic-bezier(0.22,1,0.36,1)'
    window.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, shouldReduce])

  return ref
}
