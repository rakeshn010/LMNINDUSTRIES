import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaSearchPlus, FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import SVGCircuit from '../components/SVGCircuit'
import GearIcon from '../components/GearIcon'
import SplitText from '../components/SplitText'
import MagneticButton from '../components/MagneticButton'
import PageMeta from '../components/PageMeta'

const ease = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0, transition: { duration: 0.55, delay, ease } },
  viewport:   { once: true, margin: '-60px' },
})

const allProducts = [
  { id:1,  title:'Precision Shaft',    category:'CNC Turning',       material:'EN8 Steel',   tolerance:'±0.01 mm',  image:'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80' },
  { id:2,  title:'Hydraulic Bushing',  category:'Custom Components', material:'Brass',        tolerance:'±0.005 mm', image:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80' },
  { id:3,  title:'Flanged Coupling',   category:'Batch Production',  material:'SS 304',       tolerance:'±0.02 mm',  image:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
  { id:4,  title:'Threaded Spindle',   category:'CNC Turning',       material:'EN24 Steel',   tolerance:'±0.01 mm',  image:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80' },
  { id:5,  title:'Aluminium Housing',  category:'Custom Components', material:'Al 6061',      tolerance:'±0.02 mm',  image:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { id:6,  title:'Valve Body',         category:'Batch Production',  material:'SS 316',       tolerance:'±0.01 mm',  image:'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80' },
  { id:7,  title:'Bearing Sleeve',     category:'CNC Turning',       material:'Bronze',       tolerance:'±0.005 mm', image:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80' },
  { id:8,  title:'Pump Impeller',      category:'Custom Components', material:'SS 304',       tolerance:'±0.02 mm',  image:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
  { id:9,  title:'Hex Standoff',       category:'Batch Production',  material:'Aluminium',    tolerance:'±0.01 mm',  image:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80' },
  { id:10, title:'Collet Chuck',       category:'CNC Turning',       material:'Tool Steel',   tolerance:'±0.003 mm', image:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { id:11, title:'Gear Blank',         category:'Batch Production',  material:'EN36 Steel',   tolerance:'±0.01 mm',  image:'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80' },
  { id:12, title:'Nozzle Body',        category:'Custom Components', material:'Inconel 625',  tolerance:'±0.005 mm', image:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80' },
]

const categories = ['All', 'CNC Turning', 'Batch Production', 'Custom Components']

const materials = [
  { name: 'Mild Steel',  sub: 'EN8, EN24, EN36', color: '#64748b' },
  { name: 'Stainless',   sub: 'SS 304, 316, 410', color: '#2563EB' },
  { name: 'Aluminium',   sub: '6061, 7075, 2024', color: '#7c3aed' },
  { name: 'Brass',       sub: 'CZ121, CZ131', color: '#d97706' },
  { name: 'Bronze',      sub: 'Phosphor, Gunmetal', color: '#b45309' },
  { name: 'Inconel',     sub: '625, 718', color: '#0891b2' },
]

export default function Products() {
  const [active, setActive]     = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? allProducts : allProducts.filter(p => p.category === active)

  return (
    <main>
      <PageMeta
        title="Machined Components Gallery — LMN Industries | CNC Turned Parts"
        description="Browse LMN Industries' portfolio of precision-machined components — shafts, bushings, flanges, valve bodies and more. CNC turning, batch production, custom parts."
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', paddingTop: '9rem', paddingBottom: '5rem',
        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,24,40,0.92)' }} />
        <SVGCircuit opacity={0.08} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(37,99,235,0.1)', bottom: '-10%', left: '-5%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '4%', opacity: 0.06 }}>
          <GearIcon size={140} color="#60a5fa" speed={0.6} />
        </div>

        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <motion.span initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#93c5fd' }}>
            Our Work
          </motion.span>
          <h1 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            <SplitText text="Products & Gallery" delay={0.1} stagger={0.04} style={{ color: '#fff' }} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7, ease }}
            style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.75 }}>
            A selection of precision-machined components manufactured at LMN Industries for clients across multiple industries.
          </motion.p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="lmn-section" style={{ background: '#fff' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader tag="Portfolio" title="Machined Components" subtitle="Browse our work by category. Click any part to view details." />
          </motion.div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {categories.map(cat => (
              <motion.button key={cat} onClick={() => setActive(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '0.55rem 1.3rem', borderRadius: '999px', fontSize: '0.84rem', fontWeight: 600,
                  border: active === cat ? 'none' : '1.5px solid #e2e8f0',
                  background: active === cat ? '#0F2A44' : '#fff',
                  color: active === cat ? '#fff' : '#475569',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  boxShadow: active === cat ? '0 4px 16px rgba(15,42,68,0.2)' : 'none',
                }}
              >{cat}</motion.button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1.25rem' }}>
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.div key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setSelected(p)}
                  whileHover={{ y: -6, boxShadow: '0 20px 44px rgba(15,42,68,0.14)' }}
                  style={{ background: '#fff', borderRadius: 14, border: '1px solid #e2e8f0', overflow: 'hidden', cursor: 'pointer' }}
                >
                  <div className="prod-img-wrap">
                    <img src={p.image} alt={p.title} />
                    <div className="prod-overlay">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <FaSearchPlus style={{ color: '#fff', fontSize: '1.75rem' }} />
                        <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>View Details</span>
                      </motion.div>
                    </div>
                    <span style={{
                      position: 'absolute', top: '0.6rem', left: '0.6rem',
                      background: '#2563EB', color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                      padding: '0.25rem 0.65rem', borderRadius: '999px',
                    }}>{p.category}</span>
                  </div>
                  <div style={{ padding: '0.9rem 1rem' }}>
                    <h3 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0F2A44', marginBottom: '0.35rem' }}>{p.title}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8' }}>
                      <span>{p.material}</span>
                      <span style={{ color: '#2563EB', fontWeight: 600 }}>{p.tolerance}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Materials ── */}
      <section className="lmn-section" style={{ background: '#f8fafc' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader tag="Materials" title="Materials We Work With" subtitle="We machine a wide range of metals and engineering materials to suit your application." />
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: '1rem' }}>
            {materials.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
                whileHover={{ y: -4, boxShadow: `0 12px 32px ${m.color}20` }}
              >
                <div className="lmn-card" style={{ textAlign: 'center', padding: '1.4rem' }}>
                  <div className="card-accent-line" style={{ background: `linear-gradient(90deg,${m.color},${m.color}88)` }} />
                  <div style={{ width: 44, height: 44, background: `${m.color}15`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.85rem', border: `1px solid ${m.color}25` }}>
                    <div style={{ width: 16, height: 16, background: m.color, borderRadius: '50%' }} />
                  </div>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0F2A44' }}>{m.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>{m.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div className="lmn-modal-bg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: 18, overflow: 'hidden', maxWidth: 500, width: '100%', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
            >
              <div style={{ position: 'relative' }}>
                <img src={selected.image} alt={selected.title} style={{ width: '100%', height: 260, objectFit: 'cover' }} />
                <motion.button onClick={() => setSelected(null)}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', width: 36, height: 36, background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>
                  <FaTimes />
                </motion.button>
                <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: '#2563EB', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '999px' }}>
                  {selected.category}
                </span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#0F2A44', marginBottom: '1rem' }}>{selected.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {[
                    { label: 'Material',   value: selected.material,  accent: false },
                    { label: 'Tolerance',  value: selected.tolerance, accent: true },
                    { label: 'Process',    value: selected.category,  accent: false },
                    { label: 'Inspection', value: 'CMM Verified',     accent: false },
                  ].map(({ label, value, accent }) => (
                    <div key={label} style={{ background: '#f8fafc', borderRadius: 10, padding: '0.75rem', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: accent ? '#2563EB' : '#0F2A44' }}>{value}</div>
                    </div>
                  ))}
                </div>
                <MagneticButton
                  href="https://wa.me/919876543210?text=I%20am%20interested%20in%20a%20similar%20component."
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FaWhatsapp style={{ fontSize: '1rem' }} /> Enquire About This Part
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
