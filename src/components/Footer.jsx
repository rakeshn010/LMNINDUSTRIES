import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import LMNLogo from './LMNLogo'

const quickLinks = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact',  to: '/contact' },
]

const serviceList = [
  'CNC Turning',
  'Batch Production',
  'Custom Components',
  'Precision Grinding',
  'Quality Inspection',
]

export default function Footer() {
  return (
    <footer style={{ background:'#071828', color:'#94a3b8' }}>
      {/* Main grid */}
      <div className="lmn-wrap" style={{ padding:'4rem 1.5rem 2.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'2.5rem' }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <LMNLogo size={32} showText={true} light={true} />
            </Link>
            <p style={{ fontSize:'0.84rem', lineHeight:1.75, color:'#64748b', marginBottom:'1.25rem' }}>
              Precision CNC turning and machining solutions for industrial clients across India. Quality, accuracy, and on-time delivery — every time.
            </p>
            <a href="https://wa.me/917795533453" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.45rem', background:'#16a34a', color:'#fff', fontWeight:600, fontSize:'0.82rem', padding:'0.6rem 1.2rem', borderRadius:6, textDecoration:'none', transition:'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background='#15803d'}
              onMouseLeave={e => e.currentTarget.style.background='#16a34a'}
            >
              <FaWhatsapp style={{ fontSize:'1rem' }} /> WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'0.9rem', color:'#fff', marginBottom:'1rem' }}>Quick Links</p>
            {quickLinks.map(l => (
              <Link key={l.to} to={l.to}
                style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.84rem', color:'#64748b', textDecoration:'none', padding:'0.22rem 0', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#60a5fa'}
                onMouseLeave={e => e.currentTarget.style.color='#64748b'}
              >
                <span style={{ color:'#3b82f6', fontSize:'1rem' }}>›</span> {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'0.9rem', color:'#fff', marginBottom:'1rem' }}>Services</p>
            {serviceList.map(s => (
              <div key={s} style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.84rem', color:'#64748b', padding:'0.22rem 0' }}>
                <span style={{ color:'#3b82f6', fontSize:'1rem' }}>›</span> {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'0.9rem', color:'#fff', marginBottom:'1rem' }}>Contact</p>
            {[
              { icon: FaMapMarkerAlt, text: 'Industrial Area, Ambattur,\nChennai – 600 058, TN', href: null },
              { icon: FaPhone,        text: '+91 77955 33453',          href: 'tel:+917795533453' },
              { icon: FaPhone,        text: '+91 89708 55788',          href: 'tel:+918970855788' },
              { icon: FaEnvelope,     text: 'lmnindustries@gmail.com',   href: 'mailto:lmnindustries@gmail.com' },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} style={{ display:'flex', alignItems:'flex-start', gap:'0.7rem', marginBottom:'0.75rem' }}>
                <Icon style={{ color:'#3b82f6', marginTop:'2px', flexShrink:0, fontSize:'0.9rem' }} />
                {href
                  ? <a href={href} style={{ fontSize:'0.84rem', color:'#64748b', textDecoration:'none', transition:'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color='#94a3b8'}
                      onMouseLeave={e => e.currentTarget.style.color='#64748b'}
                    >{text}</a>
                  : <span style={{ fontSize:'0.84rem', color:'#64748b', whiteSpace:'pre-line' }}>{text}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="lmn-wrap" style={{ padding:'1rem 1.5rem', display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:'0.5rem', fontSize:'0.78rem', color:'#475569' }}>
          <span>© {new Date().getFullYear()} LMN Industries. All rights reserved.</span>
          <span>Precision CNC Turning · Chennai, India</span>
        </div>
      </div>
    </footer>
  )
}
