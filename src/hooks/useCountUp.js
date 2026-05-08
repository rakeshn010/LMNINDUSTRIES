import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Counts up from 0 to a target value when the element enters the viewport.
 * Parses values like "15+", "500+", "1M+", "99.8%" — preserves suffix.
 * Returns { ref, displayValue }
 */
export default function useCountUp(rawValue, duration = 1800) {
  const shouldReduce = useReducedMotion()
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(rawValue)
  const rafRef = useRef(null)
  const hasRun = useRef(false)

  // Parse the raw value into a numeric target + suffix
  const parse = (val) => {
    if (typeof val !== 'string') return { target: val, suffix: '', prefix: '' }
    // Handle "1M+" → target=1000000, suffix="M+"
    const mMatch = val.match(/^([\d.]+)M(\+?)$/)
    if (mMatch) return { target: parseFloat(mMatch[1]) * 1_000_000, suffix: 'M' + mMatch[2], prefix: '' }
    // Handle "99.8%" → target=99.8, suffix="%"
    const pctMatch = val.match(/^([\d.]+)(%\+?)$/)
    if (pctMatch) return { target: parseFloat(pctMatch[1]), suffix: pctMatch[2], prefix: '' }
    // Handle "500+" or "15+"
    const numMatch = val.match(/^([\d.]+)(\+?)$/)
    if (numMatch) return { target: parseFloat(numMatch[1]), suffix: numMatch[2], prefix: '' }
    return { target: 0, suffix: val, prefix: '' }
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { target, suffix } = parse(rawValue)

    // If reduced motion, just show the final value immediately
    if (shouldReduce) {
      setDisplayValue(rawValue)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          observer.disconnect()

          const start = performance.now()
          const isDecimal = String(target).includes('.')
          const decimals = isDecimal ? (String(target).split('.')[1] || '').length : 0

          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * target

            const formatted = isDecimal
              ? current.toFixed(decimals)
              : Math.round(current).toString()

            // For "1M+" display as "1M+" not "1000000+"
            if (rawValue.includes('M')) {
              const mVal = current / 1_000_000
              setDisplayValue(mVal.toFixed(decimals) + suffix)
            } else {
              setDisplayValue(formatted + suffix)
            }

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick)
            } else {
              setDisplayValue(rawValue)
            }
          }

          rafRef.current = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [rawValue, duration, shouldReduce])

  return { ref, displayValue }
}
