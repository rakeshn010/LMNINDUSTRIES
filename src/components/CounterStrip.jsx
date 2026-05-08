/**
 * CounterStrip — premium animated stats bar
 * Spring-physics count-up with animated borders and glow
 */
import { motion } from 'framer-motion'
import useCountUp from '../hooks/useCountUp'
import SVGCircuit from './SVGCircuit'

const stats = [
  { value: '15+',   label: 'Years in Business', icon: '⚙' },
  { value: '500+',  label: 'Clients Served',     icon: '🏭' },
  { value: '1M+',   label: 'Parts Delivered',    icon: '🔩' },
  { value: '99.8%', label: 'On-Time Rate',        icon: '✓' },
]

function StatItem({ value, label, icon, index, total }) {
  const { ref, displayValue } = useCountUp(value, 2000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22,1,0.36,1] }}
      style={{
        textAlign: 'center',
        padding: '0 2rem',
        position: 'relative',
        flex: 1,
      }}
    >
      {/* Divider */}
      {index < total - 1 && (
        <div style={{
          position: 'absolute', right: 0, top: '50%',
          transform: 'translateY(-50%)',
          width: 1, height: 50,
          background: 'linear-gradient(180deg, transparent, rgba(96,165,250,0.3), transparent)',
        }} />
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
        style={{
          fontSize: '1.4rem', marginBottom: '0.5rem',
          filter: 'grayscale(1) brightness(2)',
          opacity: 0.4,
        }}
      >
        {icon}
      </motion.div>

      {/* Value */}
      <div style={{
        fontFamily: 'Poppins,sans-serif',
        fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
        fontWeight: 800, lineHeight: 1,
        color: '#fff',
        letterSpacing: '-0.03em',
        textShadow: '0 0 40px rgba(96,165,250,0.4)',
      }}>
        {displayValue}
      </div>

      {/* Label */}
      <div style={{
        fontSize: '0.72rem', fontWeight: 600,
        color: 'rgba(255,255,255,0.45)',
        marginTop: '0.4rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {label}
      </div>

      {/* Glow line under value */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.4 }}
        style={{
          height: 2, marginTop: '0.75rem',
          background: 'linear-gradient(90deg, transparent, #2563EB, transparent)',
          transformOrigin: 'center',
        }}
      />
    </motion.div>
  )
}

export default function CounterStrip() {
  return (
    <section style={{
      background: '#071828',
      padding: '3.5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Circuit decoration */}
      <SVGCircuit opacity={0.08} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 200,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} total={stats.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
