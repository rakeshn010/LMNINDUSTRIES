import { motion } from 'framer-motion'

export default function GradientBlob({ 
  size = 400, 
  color1 = '#2563EB', 
  color2 = '#60a5fa',
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
  blur = 100,
  animate = true,
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 50%, transparent 70%)`,
        borderRadius: '50%',
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      animate={animate ? {
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
