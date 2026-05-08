import { motion } from 'framer-motion'
import { FaRocket, FaCog, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import HoverCard3D from './HoverCard3D'
import TextReveal from './TextReveal'
import GradientBlob from './GradientBlob'

const features = [
  {
    icon: FaRocket,
    title: 'Lightning Fast',
    description: 'Optimized performance with smooth 60fps animations',
    color: '#2563EB',
  },
  {
    icon: FaCog,
    title: 'Precision Engineering',
    description: 'Micro-interactions that delight and engage users',
    color: '#7c3aed',
  },
  {
    icon: FaChartLine,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business needs',
    color: '#0891b2',
  },
  {
    icon: FaShieldAlt,
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control processes',
    color: '#059669',
  },
]

export default function FeatureShowcase() {
  return (
    <section className="lmn-section" style={{ position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
      {/* Animated gradient blobs */}
      <GradientBlob size={500} top="-10%" left="-5%" opacity={0.08} />
      <GradientBlob size={400} bottom="-10%" right="-5%" opacity={0.08} color1="#7c3aed" color2="#a78bfa" />

      <div className="lmn-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header with text reveal */}
        <ScrollReveal variant="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#2563EB',
                marginBottom: '1rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ✨ Premium Features
            </motion.span>
            
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0F2A44',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              <TextReveal text="Smooth Animations & Modern Design" delay={0.1} />
            </h2>
            
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}>
                Experience cutting-edge web design with buttery-smooth animations,
                3D effects, and micro-interactions that bring your site to life.
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Feature cards with 3D hover effect */}
        <div className="g4" style={{ marginBottom: '3rem' }}>
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} variant="scaleIn" delay={i * 0.1}>
              <HoverCard3D intensity={10}>
                <div className="lmn-card card-lift" style={{ height: '100%', textAlign: 'center' }}>
                  {/* Animated icon */}
                  <motion.div
                    style={{
                      width: 70,
                      height: 70,
                      margin: '0 auto 1.5rem',
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                      borderRadius: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Pulsing rings */}
                    <motion.div
                      className="pulse-ring"
                      style={{
                        borderColor: feature.color,
                        opacity: 0.3,
                      }}
                    />
                    <motion.div
                      className="pulse-ring"
                      style={{
                        borderColor: feature.color,
                        opacity: 0.2,
                      }}
                    />
                    
                    <feature.icon style={{ color: feature.color, fontSize: '1.8rem', zIndex: 1 }} />
                  </motion.div>

                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0F2A44',
                    marginBottom: '0.75rem',
                  }}>
                    {feature.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {feature.description}
                  </p>
                </div>
              </HoverCard3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive demo section */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div style={{
            background: 'linear-gradient(135deg, #0F2A44 0%, #1a3d5c 100%)',
            borderRadius: 24,
            padding: '3rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Animated background pattern */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '1rem',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Experience the Difference?
              </motion.h3>

              <motion.p
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '2rem',
                  maxWidth: '500px',
                  margin: '0 auto 2rem',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Get in touch today and let's build something amazing together
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.a
                  href="/contact"
                  className="btn-blue"
                  style={{
                    fontSize: '1rem',
                    padding: '1rem 2.5rem',
                    display: 'inline-flex',
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
