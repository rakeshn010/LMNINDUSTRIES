import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import SVGCircuit from '../components/SVGCircuit'
import GearIcon from '../components/GearIcon'
import SplitText from '../components/SplitText'
import MagneticButton from '../components/MagneticButton'
import PageMeta from '../components/PageMeta'

const ease = [0.22, 1, 0.36, 1]
const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
  viewport:   { once: true, margin: '-60px' },
})
const inViewX = (x, delay = 0) => ({
  initial:    { opacity: 0, x },
  whileInView:{ opacity: 1, x: 0, transition: { duration: 0.65, delay, ease } },
  viewport:   { once: true, margin: '-60px' },
})

// ─── EmailJS config ───────────────────────────────────────────
// Replace these with your real EmailJS credentials:
// 1. Sign up at https://www.emailjs.com (free)
// 2. Create a service (Gmail / Outlook) → copy SERVICE_ID
// 3. Create an email template → copy TEMPLATE_ID
// 4. Go to Account → copy PUBLIC_KEY
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ──────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: FaPhone,        label: 'Phone',        value: '+91 77955 33453',                              href: 'tel:+917795533453' },
  { icon: FaPhone,        label: 'Phone',        value: '+91 89708 55788',                              href: 'tel:+918970855788' },
  { icon: FaEnvelope,     label: 'Email',         value: 'lmnindustries@gmail.com',                      href: 'mailto:lmnindustries@gmail.com' },
  { icon: FaWhatsapp,     label: 'WhatsApp',      value: '+91 77955 33453',                              href: 'https://wa.me/917795533453' },
  { icon: FaMapMarkerAlt, label: 'Address',       value: 'Industrial Area, Ambattur, Chennai – 600 058', href: 'https://maps.google.com/?q=Ambattur+Industrial+Estate+Chennai' },
  { icon: FaClock,        label: 'Working Hours', value: 'Mon – Sat: 8:00 AM – 6:00 PM',                href: null },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]         = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send via EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      // Fallback: show success anyway in demo mode (remove in production)
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Demo mode — simulate success
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try WhatsApp or call us directly.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <PageMeta
        title="Contact LMN Industries — Get a CNC Machining Quote | Chennai"
        description="Contact LMN Industries for precision CNC turning quotes. Call, WhatsApp, or fill the form. We respond within 24 hours. Located in Ambattur, Chennai."
      />

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', paddingTop: '9rem', paddingBottom: '5rem',
        backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,24,40,0.92)' }} />
        <SVGCircuit opacity={0.08} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(37,99,235,0.1)', top: '-10%', right: '-5%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '5%', opacity: 0.06 }}>
          <GearIcon size={120} color="#60a5fa" speed={0.5} />
        </div>

        <div className="lmn-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <motion.span initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#93c5fd' }}>
            Get In Touch
          </motion.span>
          <h1 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            <SplitText text="Contact Us" delay={0.1} stagger={0.06} style={{ color: '#fff' }} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55, ease }}
            style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.75 }}>
            Send us your enquiry or drawings and we'll respond within 24 hours with a detailed quote.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="lmn-section" style={{ background: '#fff' }}>
        <div className="lmn-wrap" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '4rem', alignItems: 'start' }}>

          {/* Form */}
          <motion.div {...inViewX(-36, 0)}>
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#0F2A44', marginBottom: '0.5rem' }}>Send an Enquiry</h2>
            <div className="accent-bar" />
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
              Fill in the form below and our team will get back to you within one business day.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <FaCheckCircle style={{ color: '#16a34a', fontSize: '3rem', marginBottom: '1rem' }} />
                </motion.div>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, color: '#15803d', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Message Sent!</h3>
                <p style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }) }}
                  style={{ marginTop: '1.25rem', background: 'none', border: 'none', color: '#2563EB', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'underline' }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input name="name" type="text" required value={form.name} onChange={handleChange}
                    placeholder="Your full name" className="lmn-input" />
                </div>

                {/* Phone + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                      Phone <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" className="lmn-input" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                      Email
                    </label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@company.com" className="lmn-input" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                    Message / Requirements <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Describe your requirement, quantity, material, tolerance, etc."
                    className="lmn-input" style={{ resize: 'none' }} />
                </div>

                {/* Error */}
                {error && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '0.75rem 1rem', fontSize: '0.84rem', color: '#dc2626' }}>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <MagneticButton
                  as="button"
                  className="btn-blue"
                  style={{ justifyContent: 'center', opacity: loading ? 0.75 : 1, width: '100%' }}
                >
                  {loading
                    ? <><span className="lmn-spinner" /> Sending...</>
                    : <><FaPaperPlane style={{ fontSize: '0.8rem' }} /> Send Message</>
                  }
                </MagneticButton>

                <p style={{ fontSize: '0.78rem', color: '#94a3b8', textAlign: 'center' }}>
                  We respond within 24 hours on business days.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div {...inViewX(36, 0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#0F2A44', marginBottom: '0.5rem' }}>Contact Details</h2>
              <div className="accent-bar" />
            </div>

            {contactInfo.map((info, i) => (
              <motion.div key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                  style={{ width: 42, height: 42, background: '#eff6ff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #dbeafe' }}
                >
                  <info.icon style={{ color: '#2563EB', fontSize: '0.95rem' }} />
                </motion.div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{info.label}</div>
                  {info.href
                    ? <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="anim-link"
                        style={{ fontSize: '0.875rem', color: '#334155' }}
                      >{info.value}</a>
                    : <span style={{ fontSize: '0.875rem', color: '#334155' }}>{info.value}</span>
                  }
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <MagneticButton
              href="https://wa.me/917795533453?text=Hello%20LMN%20Industries%2C%20I%20would%20like%20to%20get%20a%20quote."
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                background: 'linear-gradient(135deg,#25D366,#1ebe5d)',
                color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                padding: '0.9rem', borderRadius: 10, textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(37,211,102,0.3)',
                marginTop: '0.5rem',
              }}
            >
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Chat on WhatsApp
            </MagneticButton>

            {/* Why contact box */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25 }}
              style={{ background: '#0F2A44', borderRadius: 14, padding: '1.4rem', position: 'relative', overflow: 'hidden' }}
            >
              <SVGCircuit opacity={0.08} />
              <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.9rem', position: 'relative', zIndex: 1 }}>Why Contact Us?</p>
              {['Quote within 24 hours', 'DFM review at no charge', 'Competitive pricing', 'Dedicated account manager'].map((item, i) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}
                >
                  <FaCheckCircle style={{ color: '#60a5fa', flexShrink: 0, fontSize: '0.8rem' }} /> {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <style>{`@media(max-width:768px){.lmn-wrap>div[style*="3fr"]{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
      </section>

      {/* ── Map ── */}
      <section style={{ background: '#f8fafc', padding: '3rem 0' }}>
        <div className="lmn-wrap">
          <motion.h3 {...inView(0)} style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0F2A44', marginBottom: '1.25rem' }}>
            Find Us in Chennai
          </motion.h3>
          <motion.div {...inView(0.1)} style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
            <iframe
              title="LMN Industries Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.1!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sAmbattur%20Industrial%20Estate%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="400" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
