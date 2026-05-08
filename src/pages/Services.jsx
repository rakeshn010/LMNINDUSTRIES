import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaCogs, FaLayerGroup, FaTools, FaRulerCombined,
  FaCheckCircle, FaArrowRight, FaMicroscope, FaShieldAlt,
} from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import TiltCard from '../components/TiltCard'
import SVGCircuit from '../components/SVGCircuit'
import GearIcon from '../components/GearIcon'
import SplitText from '../components/SplitText'
import MagneticButton from '../components/MagneticButton'
import PageMeta from '../components/PageMeta'

const ease = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
  viewport:   { once: true, margin: '-60px' },
})

const services = [
  {
    id: 'cnc-turning', icon: FaCogs, color: '#2563EB',
    title: 'CNC Turning',
    tagline: 'Precision rotational components at any volume.',
    description: 'Our CNC turning division operates 20+ turning centres with live tooling capability. We produce shafts, bushings, flanges, pins, and complex rotational components with tolerances as tight as ±0.005 mm.',
    features: ['Diameter range: 5 mm – 300 mm', 'Length up to 1,500 mm', 'Tolerances: ±0.005 mm', 'Live tooling for milled features', 'Thread turning (internal & external)', 'Knurling, grooving, and facing'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
  },
  {
    id: 'batch-production', icon: FaLayerGroup, color: '#7c3aed',
    title: 'Batch Production',
    tagline: 'Consistent quality across every unit, every run.',
    description: 'Our batch production capability handles short runs of 50 pieces to high-volume orders of 100,000+ units per month. ERP-driven scheduling ensures on-time delivery without compromising quality.',
    features: ['MOQ: 50 pieces', 'High-volume: up to 100,000+ pcs/month', 'First-article inspection on every batch', 'Statistical process control (SPC)', 'Dedicated production cells per client', 'Kanban and JIT supply options'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
  },
  {
    id: 'custom-components', icon: FaTools, color: '#0891b2',
    title: 'Custom Components',
    tagline: 'Your drawing. Our precision. Delivered.',
    description: 'Our engineering team works directly from your 2D drawings or 3D CAD files to manufacture bespoke components. From one-off prototypes to production-ready parts, we handle the full manufacturing cycle.',
    features: ['Accepts 2D drawings (PDF/DXF) and 3D CAD (STEP/IGES)', 'DFM review included', 'Prototype to production in one facility', 'Surface finishing: anodising, plating, painting', 'Material certification available', 'NDA-protected client designs'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
]

const additional = [
  { icon: FaRulerCombined, title: 'Precision Grinding',  desc: 'Cylindrical and surface grinding for tight dimensional accuracy.', color: '#2563EB' },
  { icon: FaMicroscope,    title: 'Quality Inspection',  desc: 'CMM, surface roughness, hardness, and dimensional inspection.', color: '#7c3aed' },
  { icon: FaShieldAlt,     title: 'Surface Treatment',   desc: 'Anodising, zinc plating, black oxide, and powder coating.', color: '#0891b2' },
  { icon: FaCheckCircle,   title: 'Assembly & Kitting',  desc: 'Sub-assembly and kitting services for OEM supply chains.', color: '#059669' },
]

const process = [
  { step: '01', title: 'Enquiry & RFQ',      desc: 'Send your drawings or specifications. We respond with a detailed quote within 24 hours.' },
  { step: '02', title: 'DFM Review',          desc: 'Our engineers review your design for manufacturability and suggest optimisations.' },
  { step: '03', title: 'First Article',       desc: 'We produce a first-article sample for your approval before full production begins.' },
  { step: '04', title: 'Production',          desc: 'Full production with in-process quality checks at every critical stage.' },
  { step: '05', title: 'Inspection & Report', desc: 'Final CMM inspection with a full dimensional report provided on request.' },
  { step: '06', title: 'Delivery',            desc: 'Packed and dispatched on the agreed date. Tracking provided for all shipments.' },
]

export default function Services() {
  return (
    <main>
      <PageMeta
        title="CNC Turning Services — LMN Industries | Batch Production & Custom Components"
        description="LMN Industries offers CNC turning, batch production, and custom component manufacturing. Tolerances to ±0.005 mm. ISO 9001:2015 certified. Chennai, India."
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', paddingTop: '9rem', paddingBottom: '5rem',
        backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,24,40,0.92)' }} />
        <SVGCircuit opacity={0.08} />
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(37,99,235,0.1)', top: '-15%', right: '-8%', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '3%', opacity: 0.06 }}>
          <GearIcon size={160} color="#60a5fa" speed={0.4} />
        </div>

        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <motion.span initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#93c5fd' }}>
            What We Offer
          </motion.span>
          <h1 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            <SplitText text="Our Services" delay={0.1} stagger={0.05} style={{ color: '#fff' }} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease }}
            style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.75 }}>
            Precision machining solutions for every stage of your production — from prototype to high-volume supply.
          </motion.p>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="lmn-section" style={{ background: '#fff' }}>
        <div className="lmn-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {services.map((svc, i) => (
            <motion.div key={svc.id} id={svc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}
            >
              <div style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                <TiltCard intensity={4}>
                  <img src={svc.image} alt={svc.title}
                    style={{ borderRadius: 14, width: '100%', height: 320, objectFit: 'cover', boxShadow: '0 20px 50px rgba(15,42,68,0.16)', display: 'block' }}
                  />
                </TiltCard>
              </div>
              <div style={{ order: i % 2 !== 0 ? 1 : 2 }}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 52, height: 52, background: `linear-gradient(135deg,${svc.color},${svc.color}cc)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.1rem', boxShadow: `0 6px 20px ${svc.color}40` }}
                >
                  <svc.icon style={{ color: '#fff', fontSize: '1.3rem' }} />
                </motion.div>
                <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#0F2A44', marginBottom: '0.3rem' }}>{svc.title}</h2>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: svc.color, marginBottom: '0.9rem' }}>{svc.tagline}</p>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.8, marginBottom: '1.25rem' }}>{svc.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {svc.features.map(f => (
                    <motion.div key={f}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: '#475569' }}
                    >
                      <FaCheckCircle style={{ color: svc.color, marginTop: '2px', flexShrink: 0, fontSize: '0.8rem' }} /> {f}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`@media(max-width:768px){#cnc-turning,#batch-production,#custom-components{grid-template-columns:1fr!important}#cnc-turning>*,#batch-production>*,#custom-components>*{order:unset!important}}`}</style>
      </section>

      {/* ── Additional ── */}
      <section className="lmn-section" style={{ background: '#f8fafc' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader tag="Also Available" title="Additional Capabilities" subtitle="Complementary services to support your complete manufacturing requirements." />
          </motion.div>
          <div className="g4">
            {additional.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
              >
                <TiltCard className="lmn-card" intensity={5}>
                  <div className="card-accent-line" />
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: 48, height: 48, background: `${s.color}18`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: `1px solid ${s.color}25` }}
                  >
                    <s.icon style={{ color: s.color, fontSize: '1.2rem' }} />
                  </motion.div>
                  <h4 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, color: '#0F2A44', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{s.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="lmn-section" style={{ background: '#0F2A44', position: 'relative', overflow: 'hidden' }}>
        <SVGCircuit opacity={0.1} />
        <div className="glow-orb" style={{ width: 600, height: 400, background: 'rgba(37,99,235,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', filter: 'blur(100px)' }} />
        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...inView(0)}>
            <SectionHeader tag="How It Works" title="Our Manufacturing Process" subtitle="A transparent, structured workflow from enquiry to delivery." light />
          </motion.div>
          <div className="g3">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="lmn-card-dark"
              >
                <div className="step-num">{p.step}</div>
                <h4 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="lmn-wrap" style={{ textAlign: 'center' }}>
          <motion.h2 {...inView(0)} style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 700, color: '#0F2A44', marginBottom: '0.75rem' }}>
            Have a Project in Mind?
          </motion.h2>
          <motion.p {...inView(0.1)} style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
            Share your drawings and get a detailed quote within 24 hours.
          </motion.p>
          <motion.div {...inView(0.2)}>
            <MagneticButton href="/contact" as="a" className="btn-blue">
              Request a Quote <FaArrowRight style={{ fontSize: '0.75rem' }} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
