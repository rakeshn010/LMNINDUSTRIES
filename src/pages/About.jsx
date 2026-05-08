import { motion } from 'framer-motion'
import { FaCheckCircle, FaBullseye, FaEye, FaUsers, FaIndustry, FaAward } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import TiltCard from '../components/TiltCard'
import SVGCircuit from '../components/SVGCircuit'
import GearIcon from '../components/GearIcon'
import SplitText from '../components/SplitText'
import MagneticButton from '../components/MagneticButton'
import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const ease = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
  viewport:   { once: true, margin: '-60px' },
})
const inViewX = (x, delay = 0) => ({
  initial:    { opacity: 0, x },
  whileInView:{ opacity: 1, x: 0, transition: { duration: 0.65, delay, ease } },
  viewport:   { once: true, margin: '-60px' },
})

const strengths = [
  { icon: FaIndustry,    title: 'Modern CNC Fleet',    desc: 'Over 20 CNC turning centres with live tooling, handling diameters from 5 mm to 300 mm.' },
  { icon: FaAward,       title: 'Quality Assurance',   desc: 'In-house CMM, surface roughness testers, and hardness testing ensure every part meets spec.' },
  { icon: FaUsers,       title: 'Experienced Team',    desc: '80+ skilled machinists, quality engineers, and production planners with decades of experience.' },
  { icon: FaCheckCircle, title: 'Process Discipline',  desc: 'Documented SOPs, first-article inspection, and SPC on all critical dimensions.' },
]

const milestones = [
  { year: '2008', event: 'Founded in Ambattur, Chennai with 3 CNC machines.' },
  { year: '2012', event: 'Expanded to 10,000 sq ft; added batch production line.' },
  { year: '2016', event: 'Achieved ISO 9001:2015 certification.' },
  { year: '2019', event: 'Crossed 500+ active clients; entered aerospace supply chain.' },
  { year: '2023', event: 'Installed 5-axis CNC centres; launched custom component division.' },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '80+', label: 'Team Members' },
  { value: '20+', label: 'CNC Machines' },
  { value: '500+', label: 'Active Clients' },
]

export default function About() {
  return (
    <main>
      <PageMeta
        title="About LMN Industries — Precision CNC Machining Since 2008 | Chennai"
        description="Learn about LMN Industries — 15+ years of precision CNC turning, ISO 9001:2015 certified, 80+ team members, 500+ clients across India."
      />

      {/* ── Page Hero ── */}
      <section style={{
        position: 'relative', paddingTop: '9rem', paddingBottom: '5rem',
        backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,24,40,0.92)' }} />
        <SVGCircuit opacity={0.08} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(37,99,235,0.12)', top: '-10%', right: '-5%', filter: 'blur(80px)' }} />

        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <motion.span initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#93c5fd' }}>
            About Us
          </motion.span>
          <h1 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            <SplitText text="Who We Are" delay={0.1} stagger={0.04} style={{ color: '#fff' }} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}
            style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.75 }}>
            A precision machining company built on engineering excellence, operational discipline, and a relentless commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* ── Company Intro ── */}
      <section className="lmn-section" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-4%', top: '5%', opacity: 0.03, pointerEvents: 'none' }}>
          <GearIcon size={300} color="#0F2A44" speed={0.15} />
        </div>
        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="g2-1">
            <motion.div {...inViewX(-40, 0)}>
              <SectionHeader tag="Our Story" title="LMN Industries — Precision at Scale" />
              {[
                'Founded in 2008 in Ambattur Industrial Estate, Chennai, LMN Industries began as a small CNC turning shop serving local automotive suppliers. Over 15 years, we have grown into a full-service precision machining company trusted by OEMs, Tier-1 suppliers, and engineering firms across India.',
                'Our facility spans 15,000 sq ft and houses over 20 CNC turning centres, a dedicated quality lab, and a skilled workforce of 80+ professionals.',
                'Every component that leaves our facility is inspected, documented, and delivered on time — because our clients\' production lines depend on it.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.8, marginBottom: '0.9rem' }}>{p}</p>
              ))}
            </motion.div>

            <motion.div {...inViewX(40, 0.1)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
                'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80',
                'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
                'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
              ].map((src, i) => (
                <motion.img key={src} src={src} alt="LMN facility"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderRadius: 10, width: '100%', height: 170, objectFit: 'cover', marginTop: i % 2 !== 0 ? '1.5rem' : 0, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', display: 'block' }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: '#0F2A44', padding: '3.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <SVGCircuit opacity={0.07} />
        <div className="glow-orb" style={{ width: 400, height: 200, background: 'rgba(37,99,235,0.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', filter: 'blur(60px)' }} />
        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="g4">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...inView(i * 0.1)} style={{ textAlign: 'center' }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="lmn-section" style={{ background: '#f8fafc' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader tag="Purpose" title="Mission & Vision" />
          </motion.div>
          <div className="g2">
            <motion.div {...inView(0)}>
              <TiltCard className="lmn-card" intensity={4}>
                <div className="card-accent-line" />
                <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg,#2563EB,#1d4ed8)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 6px 20px rgba(37,99,235,0.3)' }}>
                  <FaBullseye style={{ color: '#fff', fontSize: '1.25rem' }} />
                </div>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0F2A44', marginBottom: '0.75rem' }}>Our Mission</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.8, margin: 0 }}>
                  To deliver precision-machined components that meet the highest quality standards, on time and at competitive cost — enabling our clients to build better products and stronger supply chains.
                </p>
              </TiltCard>
            </motion.div>

            <motion.div {...inView(0.12)}>
              <TiltCard intensity={4} style={{ background: '#0F2A44', border: 'none', borderRadius: 16, padding: '1.75rem', height: '100%' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(37,99,235,0.8)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <FaEye style={{ color: '#fff', fontSize: '1.25rem' }} />
                </div>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Our Vision</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  To be India's most trusted precision machining partner — recognised for engineering excellence, process reliability, and the ability to scale with our clients' growth.
                </p>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className="lmn-section" style={{ background: '#fff' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader tag="Capabilities" title="Our Core Strengths" subtitle="What sets LMN Industries apart from the competition." />
          </motion.div>
          <div className="g2">
            {strengths.map((s, i) => (
              <motion.div key={s.title} {...inView(i * 0.1)}>
                <TiltCard intensity={3} style={{
                  display: 'flex', gap: '1.1rem', padding: '1.5rem',
                  background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0',
                }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#2563EB,#1d4ed8)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}
                  >
                    <s.icon style={{ color: '#fff', fontSize: '1.1rem' }} />
                  </motion.div>
                  <div>
                    <h4 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, color: '#0F2A44', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{s.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="lmn-section" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader tag="Journey" title="Our Milestones" subtitle="Key moments that shaped LMN Industries into what it is today." />
          </motion.div>
          <div className="lmn-timeline" style={{ maxWidth: 600 }}>
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                style={{ position: 'relative', marginBottom: '1.75rem' }}
              >
                <div className="lmn-timeline-dot" />
                <motion.span
                  whileHover={{ color: '#1d4ed8' }}
                  style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#2563EB', cursor: 'default' }}
                >{m.year}</motion.span>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.25rem', lineHeight: 1.7 }}>{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop ── */}
      <section className="lmn-section" style={{ background: '#0F2A44', position: 'relative', overflow: 'hidden' }}>
        <SVGCircuit opacity={0.1} />
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(37,99,235,0.08)', top: '-20%', right: '-10%', filter: 'blur(100px)' }} />
        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="g2-1">
            <motion.div {...inViewX(-40, 0)}>
              <SectionHeader tag="Facility" title="Our Workshop & Team" light />
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Our 15,000 sq ft facility in Ambattur Industrial Estate is equipped with the latest CNC turning centres, milling machines, and a dedicated quality inspection lab. The shop floor operates in two shifts, six days a week.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['20+ CNC turning centres (live tooling)', 'CMM & surface roughness measurement', 'ERP-driven production scheduling', 'Dedicated packaging & dispatch bay'].map(item => (
                  <motion.li key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <FaCheckCircle style={{ color: '#60a5fa', flexShrink: 0 }} /> {item}
                  </motion.li>
                ))}
              </ul>
              <MagneticButton href="/contact" as="a" className="btn-blue">
                Get a Quote <FaArrowRight style={{ fontSize: '0.75rem' }} />
              </MagneticButton>
            </motion.div>
            <motion.div {...inViewX(40, 0.1)}>
              <TiltCard intensity={5}>
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
                  alt="LMN Industries workshop"
                  style={{ borderRadius: 12, width: '100%', height: 380, objectFit: 'cover', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', display: 'block' }}
                />
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
