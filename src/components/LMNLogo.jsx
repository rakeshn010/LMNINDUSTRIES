/**
 * LMNLogo — SVG logo mark for LMN Industries
 * Industrial gear + precision lines + wordmark
 */
import { motion } from 'framer-motion'

export default function LMNLogo({ size = 36, showText = true, light = true }) {
  const textColor = light ? '#fff' : '#0F2A44'
  const accentColor = '#60a5fa'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
      {/* SVG Icon Mark */}
      <motion.svg
        width={size} height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.5 }}
        style={{ flexShrink: 0 }}
      >
        {/* Background square */}
        <rect width="40" height="40" rx="8" fill="#2563EB" />

        {/* Gear teeth (outer) */}
        <path
          d="M20 6 L21.5 9.5 L25 8.5 L24.5 12 L28 13 L26 16 L29 18.5 L26.5 21 L28 24.5 L24.5 25 L24 28.5 L20.5 27.5 L19 31 L16 28.5 L12.5 30 L12 26.5 L8.5 25.5 L10 22 L7 19.5 L10 17 L8.5 13.5 L12 13 L12.5 9.5 L16 10.5 Z"
          fill="rgba(255,255,255,0.15)"
        />

        {/* Inner gear circle */}
        <circle cx="20" cy="19" r="7" fill="rgba(255,255,255,0.9)" />
        <circle cx="20" cy="19" r="4" fill="#2563EB" />
        <circle cx="20" cy="19" r="1.5" fill="rgba(255,255,255,0.9)" />

        {/* Precision cross lines */}
        <line x1="20" y1="12" x2="20" y2="14" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="24" x2="20" y2="26" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="19" x2="15" y2="19" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="19" x2="27" y2="19" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Bottom accent bar */}
        <rect x="8" y="33" width="24" height="2" rx="1" fill={accentColor} opacity="0.8" />
      </motion.svg>

      {/* Wordmark */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: 'Poppins,sans-serif',
            fontWeight: 800,
            fontSize: '1rem',
            color: textColor,
            letterSpacing: '-0.01em',
          }}>
            LMN <span style={{ color: accentColor }}>Industries</span>
          </span>
          <span style={{
            fontFamily: 'Inter,sans-serif',
            fontWeight: 500,
            fontSize: '0.55rem',
            color: light ? 'rgba(255,255,255,0.5)' : 'rgba(15,42,68,0.5)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginTop: '1px',
          }}>
            Precision CNC
          </span>
        </div>
      )}
    </div>
  )
}
