import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaCogs, FaIndustry, FaCheckCircle, FaTruck, FaAward, FaPhone, FaArrowRight, FaTools, FaLayerGroup } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'
import SplitText from '../components/SplitText'
import SVGCircuit from '../components/SVGCircuit'
import GearIcon from '../components/GearIcon'
import PageMeta from '../components/PageMeta'
import { TouchRipple, MobileScrollReveal, MobileStagger } from '../components/MobileAnimations'

const ease = [0.22, 1, 0.36, 1]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
  viewport: { once: true, margin: '-60px' },
})

const services = [
  { icon: FaCogs, title: 'CNC Turning', desc: 'High-precision turning for complex geometries. Tolerances to ±0.005 mm. Shafts, bushings, flanges and more.', color: '#2563EB' },
  { icon: FaLayerGroup, title: 'Batch Production', desc: 'Scalable runs from 50 to 100,000+ pieces per month with consistent quality and on-time delivery.', color: '#7c3aed' },
  { icon: FaTools, title: 'Custom Components', desc: 'Bespoke machined parts from your 2D/3D drawings. Prototype to production in one facility.', color: '#0891b2' },
]

const reasons = [
  { icon: FaAward, title: 'ISO-Grade Quality', desc: 'Rigorous in-process and final CMM inspection at every stage.' },
  { icon: FaTruck, title: 'On-Time Delivery', desc: 'Committed lead times with ERP-driven production scheduling.' },
  { icon: FaCheckCircle, title: 'Competitive Pricing', desc: 'Transparent quotes with no hidden costs or surprises.' },
  { icon: FaIndustry, title: '15+ Years Experience', desc: 'Trusted by OEMs and Tier-1 suppliers across India.' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <main>
      <PageMeta
        title="LMN Industries — Precision CNC Turning Services | Chennai, India"
        description="LMN Industries delivers precision CNC turning, batch production, and custom machined components. Quality. Accuracy. On-Time Delivery."
      />

      {/* HERO SECTION */}
      <section ref={heroRef} style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0F2A44 0%, #1a3d5c 100%)',
        overflow: 'hidden',
      }}>
        {/* Background image with parallax */}
        <motion.div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          y: heroY,
          willChange: 'transform',
        }} />

        {/* Decorative gear */}
        <div style={{ position: 'absolute', bottom: '8%', right: '4%', opacity: 0.08 }}>
          <GearIcon size={180} color="#60a5fa" speed={0.5} />
        </div>

        {/* Content */}
        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              <SplitText text="Precision CNC" delay={0.05} stagger={0.04} style={{ display: 'block', marginBottom: '0.1em' }} />
              <span style={{
                background: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
              }}>
                Turning Services
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}
            >
              LMN Industries manufactures precision-machined components for automotive, aerospace, and industrial clients. Built to spec. Delivered on time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
            >
              <TouchRipple style={{ flex: '1 1 auto', minWidth: '200px' }}>
                <MagneticButton href="/contact" as="a" className="btn-blue mobile-btn-press" style={{ fontSize: '1rem', padding: '1rem 2rem', width: '100%' }}>
                  Get a Quote <FaArrowRight style={{ fontSize: '0.85rem' }} />
                </MagneticButton>
              </TouchRipple>
              <TouchRipple style={{ flex: '1 1 auto', minWidth: '200px' }}>
                <MagneticButton href="/contact" as="a" className="btn-ghost mobile-btn-press" style={{ fontSize: '1rem', padding: '1rem 2rem', width: '100%' }}>
                  <FaPhone style={{ fontSize: '0.85rem' }} /> Contact Us
                </MagneticButton>
              </TouchRipple>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}
            >
              {['ISO 9001:2015', 'CMM Verified', '15+ Years', '99.8% On-Time'].map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1, ease }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}
                >
                  <FaCheckCircle style={{ color: '#4ade80', fontSize: '0.9rem' }} />
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="lmn-section" style={{ background: '#fff' }}>
        <div className="lmn-wrap">
          <motion.div {...inView(0)}>
            <SectionHeader
              tag="What We Do"
              title="Core Manufacturing Services"
              subtitle="From single prototypes to high-volume batch runs — we deliver precision at every scale."
            />
          </motion.div>

          <div className="g3">
            {services.map((svc, i) => (
              <MobileScrollReveal key={svc.title} direction="up" className="h-full">
                <TouchRipple className="h-full">
                  <TiltCard className="lmn-card mobile-card-touch" intensity={6} style={{ height: '100%', textAlign: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.95, rotate: 180 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: 60,
                        height: 60,
                        background: `linear-gradient(135deg, ${svc.color}20, ${svc.color}10)`,
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        boxShadow: `0 6px 20px ${svc.color}25`,
                        border: `1px solid ${svc.color}20`,
                      }}
                    >
                      <svc.icon style={{ color: svc.color, fontSize: '1.8rem' }} />
                    </motion.div>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#0F2A44',
                      marginBottom: '0.75rem',
                    }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                      {svc.desc}
                    </p>
                  </TiltCard>
                </TouchRipple>
              </MobileScrollReveal>
            ))}
          </div>

          <motion.div {...inView(0.35)} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <MagneticButton href="/services" as="a" className="btn-outline-navy">
              View All Services <FaArrowRight style={{ fontSize: '0.8rem' }} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="lmn-section" style={{ background: '#0F2A44', position: 'relative', overflow: 'hidden' }}>
        {/* SVG circuit decoration */}
        <SVGCircuit opacity={0.12} />

        {/* Decorative gear */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', opacity: 0.05 }}>
          <GearIcon size={300} color="#60a5fa" speed={0.3} />
        </div>

        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...inView(0)}>
            <SectionHeader
              tag="Why LMN"
              title="Built on Trust. Driven by Precision."
              subtitle="We don't just manufacture parts — we build long-term partnerships with our clients."
              light
            />
          </motion.div>

          <MobileStagger className="g4" delay={0.08}>
            {reasons.map((r, i) => (
              <TouchRipple key={r.title} className="h-full">
                <motion.div
                  className="lmn-card-dark glass-card mobile-card-touch h-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{ position: 'relative', width: 52, height: 52, marginBottom: '1.1rem' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9, rotate: -15 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: 52,
                        height: 52,
                        background: 'linear-gradient(135deg,#2563EB,#1d4ed8)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 24px rgba(37,99,235,0.4)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <r.icon style={{ color: '#fff', fontSize: '1.2rem' }} />
                    </motion.div>
                  </div>

                  <h3 style={{
                    fontFamily: 'Poppins,sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '0.5rem',
                  }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>
                    {r.desc}
                  </p>
                </motion.div>
              </TouchRipple>
            ))}
          </MobileStagger>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #0F2A44 0%, #1a3d5c 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <SVGCircuit opacity={0.06} />

        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div {...inView(0)}>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1rem',
            }}>
              Ready to Start Your Project?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}>
              Send us your drawings and get a competitive quote within 24 hours
            </p>
            <MagneticButton href="/contact" as="a" className="btn-blue" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}>
              Request a Quote <FaArrowRight style={{ fontSize: '0.9rem' }} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
