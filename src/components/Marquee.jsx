/**
 * Marquee — infinite scrolling ticker strip
 * Used between sections to show industry keywords / certifications
 */
export default function Marquee({ items, bg = '#0F2A44', color = 'rgba(255,255,255,0.5)', accent = '#2563EB' }) {
  const doubled = [...items, ...items] // duplicate for seamless loop

  return (
    <div style={{
      background: bg,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '0.9rem 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
        background: `linear-gradient(90deg, ${bg} 0%, transparent 100%)`,
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
        background: `linear-gradient(270deg, ${bg} 0%, transparent 100%)`,
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0 2.5rem',
            fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color, whiteSpace: 'nowrap',
          }}>
            <span style={{ color: accent, fontSize: '0.6rem' }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
