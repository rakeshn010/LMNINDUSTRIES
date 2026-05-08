import { motion } from 'framer-motion'
import { useState } from 'react'

// 🌈 RAINBOW TEXT ANIMATION
export function RainbowText({ children, className = '' }) {
  return (
    <motion.span
      className={className}
      style={{
        background: 'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  )
}

// 🎆 EXPLODING PARTICLES
export function ExplodingButton({ children, onClick, className = '' }) {
  const [particles, setParticles] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (Math.PI * 2 * i) / 20,
    }))

    setParticles([...particles, ...newParticles])

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)))
    }, 1000)

    if (onClick) onClick(e)
  }

  return (
    <motion.button
      className={className}
      onClick={handleClick}
      style={{ position: 'relative', overflow: 'visible' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: `hsl(${Math.random() * 360}, 100%, 60%)`,
            pointerEvents: 'none',
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            x: Math.cos(particle.angle) * 100,
            y: Math.sin(particle.angle) * 100,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
    </motion.button>
  )
}

// 🌀 SPIRAL TEXT
export function SpiralText({ text, className = '' }) {
  const letters = text.split('')
  
  return (
    <div className={className} style={{ display: 'inline-block', position: 'relative' }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

// 🎨 COLOR SHIFTING CARD
export function ColorShiftCard({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: '200% 200%',
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
    >
      {children}
    </motion.div>
  )
}

// ⚡ LIGHTNING BORDER
export function LightningBorder({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      style={{
        position: 'relative',
        padding: 3,
        background: 'linear-gradient(90deg, #00f260, #0575e6, #00f260)',
        backgroundSize: '200% auto',
        borderRadius: 16,
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: 14,
        padding: '1.5rem',
      }}>
        {children}
      </div>
    </motion.div>
  )
}

// 🔥 FIRE EFFECT TEXT
export function FireText({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      style={{
        color: '#ff4500',
        textShadow: '0 0 20px #ff4500, 0 0 40px #ff6347, 0 0 60px #ff7f50',
        fontWeight: 'bold',
      }}
      animate={{
        textShadow: [
          '0 0 20px #ff4500, 0 0 40px #ff6347, 0 0 60px #ff7f50',
          '0 0 30px #ff6347, 0 0 50px #ff7f50, 0 0 70px #ffa500',
          '0 0 20px #ff4500, 0 0 40px #ff6347, 0 0 60px #ff7f50',
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// 🌊 WAVE ANIMATION
export function WaveText({ text, className = '' }) {
  const letters = text.split('')
  
  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

// 💫 FLOATING ORBS
export function FloatingOrbs({ count = 5 }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            borderRadius: '50%',
            background: `radial-gradient(circle, hsla(${Math.random() * 360}, 100%, 70%, 0.3), transparent)`,
            filter: 'blur(20px)',
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// 🎪 BOUNCING CARD
export function BouncingCard({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        y: -10,
      }}
    >
      {children}
    </motion.div>
  )
}

// 🌟 STAR BURST
export function StarBurst({ trigger = false }) {
  if (!trigger) return null

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 4,
            height: 40,
            background: 'linear-gradient(180deg, #ffd700, transparent)',
            transformOrigin: 'top center',
          }}
          initial={{
            rotate: (360 / 12) * i,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

// 🎭 MORPHING SHAPE
export function MorphingShape({ className = '' }) {
  return (
    <motion.div
      className={className}
      style={{
        width: 100,
        height: 100,
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
      }}
      animate={{
        borderRadius: [
          '30% 70% 70% 30% / 30% 30% 70% 70%',
          '70% 30% 30% 70% / 70% 70% 30% 30%',
          '50% 50% 50% 50% / 50% 50% 50% 50%',
          '30% 70% 70% 30% / 30% 30% 70% 70%',
        ],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
