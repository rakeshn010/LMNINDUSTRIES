import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// ── Mobile Touch Ripple Effect ──
export function TouchRipple({ children, className = '', ...props }) {
  const [ripples, setRipples] = useState([])
  const ref = useRef(null)

  const createRipple = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const ripple = { x, y, id: Date.now() }
    setRipples(prev => [...prev, ripple])
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id))
    }, 600)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onTouchStart={createRipple}
      onClick={createRipple}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="touch-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
          }}
        />
      ))}
    </motion.div>
  )
}

// ── Mobile Card with Swipe Gesture ──
export function SwipeCard({ children, onSwipeLeft, onSwipeRight, className = '' }) {
  return (
    <motion.div
      className={`mobile-card-touch ${className}`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, { offset, velocity }) => {
        if (offset.x > 100 && velocity.x > 0) {
          onSwipeRight?.()
        } else if (offset.x < -100 && velocity.x < 0) {
          onSwipeLeft?.()
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// ── Mobile Parallax Section ──
export function MobileParallax({ children, speed = 0.5, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

// ── Mobile Stagger Container ──
export function MobileStagger({ children, className = '', delay = 0.1 }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.1,
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <motion.div
      className={`mobile-stagger ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      )) : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  )
}

// ── Mobile Floating Action Button ──
export function MobileFAB({ icon, onClick, className = '' }) {
  return (
    <motion.button
      className={`mobile-fab ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {icon}
    </motion.button>
  )
}

// ── Mobile Bottom Sheet ──
export function MobileSheet({ isOpen, onClose, children }) {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[399]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="mobile-sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, { offset, velocity }) => {
              setIsDragging(false)
              if (offset.y > 100 || velocity.y > 500) {
                onClose()
              }
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="mobile-sheet-handle" />
            {children}
          </motion.div>
        </>
      )}
    </>
  )
}

// ── Mobile Card Flip ──
export function FlipCard({ front, back, className = '' }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''} ${className}`} onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </motion.div>
    </div>
  )
}

// ── Mobile Toast Notification ──
export function MobileToast({ message, isVisible, type = 'info' }) {
  const bgColors = {
    info: '#0F2A44',
    success: '#059669',
    error: '#dc2626',
    warning: '#d97706'
  }

  return (
    <motion.div
      className="mobile-toast"
      style={{ background: bgColors[type] }}
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      {message}
    </motion.div>
  )
}

// ── Mobile Skeleton Loader ──
export function MobileSkeleton({ width = '100%', height = '20px', className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height }}
    />
  )
}

// ── Mobile Progress Bar ──
export function MobileProgress({ progress = 0, className = '' }) {
  return (
    <div className={`mobile-progress ${className}`}>
      <motion.div
        className="mobile-progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}

// ── Mobile Accordion ──
export function MobileAccordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

// ── Mobile Scroll Reveal ──
export function MobileScrollReveal({ children, direction = 'up', className = '' }) {
  const variants = {
    up: { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    zoom: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  }

  return (
    <motion.div
      className={className}
      initial={variants[direction].initial}
      whileInView={variants[direction].animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ── Mobile Bounce Button ──
export function MobileBounceButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      className={`mobile-btn-press ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}

// ── Mobile Magnetic Button ──
export function MobileMagneticButton({ children, className = '', ...props }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      className={`mag-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default {
  TouchRipple,
  SwipeCard,
  MobileParallax,
  MobileStagger,
  MobileFAB,
  MobileSheet,
  FlipCard,
  MobileToast,
  MobileSkeleton,
  MobileProgress,
  MobileAccordion,
  MobileScrollReveal,
  MobileBounceButton,
  MobileMagneticButton,
}
