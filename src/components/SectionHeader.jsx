import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <div style={{ marginBottom:'2.75rem' }}>
      {tag && (
        <motion.span
          initial={{ opacity:0, x:-12 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5, ease:[0.22,1,0.36,1] }}
          style={{
            fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.16em',
            textTransform:'uppercase',
            color: light ? '#93c5fd' : '#2563EB',
          }}
        >{tag}</motion.span>
      )}

      {/* Animated accent bar — grows from left */}
      <motion.div
        className="accent-bar"
        initial={{ scaleX:0 }}
        whileInView={{ scaleX:1 }}
        viewport={{ once:true }}
        transition={{ duration:0.55, delay:0.1, ease:[0.22,1,0.36,1] }}
      />

      <motion.h2
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.6, delay:0.15, ease:[0.22,1,0.36,1] }}
        style={{
          fontFamily:'Poppins,sans-serif',
          fontSize:'clamp(1.65rem, 3vw, 2.35rem)',
          fontWeight:700, lineHeight:1.22,
          color: light ? '#fff' : '#0F2A44',
          margin:0, letterSpacing:'-0.01em',
        }}
      >{title}</motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.55, delay:0.25, ease:[0.22,1,0.36,1] }}
          style={{
            marginTop:'0.8rem', fontSize:'0.95rem', lineHeight:1.8,
            color: light ? 'rgba(255,255,255,0.6)' : '#64748b',
            maxWidth:'600px',
          }}
        >{subtitle}</motion.p>
      )}
    </div>
  )
}
