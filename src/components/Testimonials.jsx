/**
 * Testimonials — client quotes + logo strip
 * Used on Home page
 */
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import TiltCard from './TiltCard'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Purchase Manager',
    company: 'Ashok Leyland Tier-1 Supplier',
    quote: 'LMN Industries has been our go-to CNC turning partner for 6 years. Zero rejections in the last 3 batches. Their on-time delivery is unmatched.',
    rating: 5,
    avatar: 'RK',
    color: '#2563EB',
  },
  {
    name: 'Priya Venkatesh',
    role: 'Engineering Head',
    company: 'Hydraulic Systems Pvt. Ltd.',
    quote: 'We switched to LMN after quality issues with our previous vendor. The difference was immediate — tight tolerances, proper documentation, and a team that actually communicates.',
    rating: 5,
    avatar: 'PV',
    color: '#7c3aed',
  },
  {
    name: 'Suresh Babu',
    role: 'Operations Director',
    company: 'Aerospace Components India',
    quote: 'For aerospace-grade components, we need absolute precision. LMN delivers consistently at ±0.005 mm with full CMM reports. Highly recommended.',
    rating: 5,
    avatar: 'SB',
    color: '#0891b2',
  },
]

const clients = [
  'Ashok Leyland', 'BHEL', 'L&T', 'Bosch India',
  'TVS Group', 'Sundaram Clayton', 'Rane Group', 'Wheels India',
]

const ease = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  return (
    <section className="lmn-section" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, transparent, #2563EB, #60a5fa, transparent)',
      }} />

      <div className="lmn-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#2563EB',
          }}>Client Stories</span>
          <div style={{
            width: 48, height: 3,
            background: 'linear-gradient(90deg, #2563EB, #60a5fa)',
            borderRadius: 2, margin: '0.5rem auto 1.25rem',
          }} />
          <h2 style={{
            fontFamily: 'Poppins,sans-serif',
            fontSize: 'clamp(1.65rem, 3vw, 2.35rem)',
            fontWeight: 700, color: '#0F2A44', margin: 0,
          }}>What Our Clients Say</h2>
          <p style={{
            marginTop: '0.75rem', fontSize: '0.95rem', color: '#64748b',
            maxWidth: 520, margin: '0.75rem auto 0', lineHeight: 1.75,
          }}>
            Trusted by OEMs, Tier-1 suppliers, and engineering firms across India.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="g3" style={{ marginBottom: '4rem' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
            >
              <TiltCard className="lmn-card" intensity={4} style={{ height: '100%' }}>
                <div className="card-accent-line" />

                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} style={{ color: '#f59e0b', fontSize: '0.8rem' }} />
                  ))}
                </div>

                {/* Quote icon */}
                <FaQuoteLeft style={{ color: t.color, fontSize: '1.5rem', opacity: 0.3, marginBottom: '0.75rem' }} />

                {/* Quote text */}
                <p style={{
                  fontSize: '0.9rem', color: '#475569', lineHeight: 1.8,
                  margin: '0 0 1.5rem', fontStyle: 'italic',
                }}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Poppins,sans-serif', fontWeight: 700,
                    fontSize: '0.8rem', color: '#fff', flexShrink: 0,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#0F2A44' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p style={{
            textAlign: 'center', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#94a3b8', marginBottom: '1.5rem',
          }}>
            Trusted by leading companies
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '0.75rem 2rem', alignItems: 'center',
          }}>
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 8,
                  fontFamily: 'Poppins,sans-serif',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: '#64748b',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#2563EB'
                  e.currentTarget.style.color = '#2563EB'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.color = '#64748b'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
