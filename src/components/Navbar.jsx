import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import LMNLogo from './LMNLogo'
import ThemeToggle, { useTheme } from './ThemeToggle'

const links = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact',  to: '/contact' },
]

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, willChange: 'transform' }}
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()
  const { dark, toggle } = useTheme()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <ScrollProgressBar />

      <nav className={`lmn-nav ${scrolled ? 'lmn-nav-glass' : 'lmn-nav-clear'}`}>
        <div className="lmn-wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.9rem 1.5rem' }}>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <LMNLogo size={36} showText={true} light={true} />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <ul id="desk-links" style={{ display:'flex', gap:'1.75rem', listStyle:'none', margin:0, padding:0, position:'relative' }}>
            {links.map((l, i) => (
              <motion.li
                key={l.to}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.06, ease: [0.22,1,0.36,1] }}
                style={{ position: 'relative' }}
              >
                <NavLink to={l.to} end={l.to === '/'}
                  style={({ isActive }) => ({
                    fontFamily:'Inter,sans-serif', fontWeight:500, fontSize:'0.875rem',
                    textDecoration:'none', paddingBottom:'6px', display:'block',
                    color: isActive ? '#60a5fa' : '#cbd5e1',
                    transition:'color 0.2s',
                    position: 'relative',
                  })}
                  onMouseEnter={e => { if (!e.currentTarget.style.color.includes('96, 165')) e.currentTarget.style.color='#fff' }}
                  onMouseLeave={e => { if (!e.currentTarget.style.color.includes('96, 165')) e.currentTarget.style.color='#cbd5e1' }}
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          style={{
                            position:'absolute', bottom:0, left:0, right:0,
                            height:'2px', background:'linear-gradient(90deg,#2563EB,#60a5fa)',
                            borderRadius:'1px',
                          }}
                          transition={{ type:'spring', stiffness:400, damping:32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA + Theme Toggle */}
          <motion.div
            id="desk-cta"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45, ease: [0.22,1,0.36,1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <ThemeToggle dark={dark} toggle={toggle} />
            <Link to="/contact" className="btn-blue" style={{ padding:'0.6rem 1.3rem', fontSize:'0.82rem' }}>
              Get Quote
            </Link>
          </motion.div>

          {/* Hamburger */}
          <button id="mob-btn"
            onClick={() => setOpen(p => !p)}
            style={{ display:'none', background:'none', border:'none', color:'#fff', fontSize:'1.55rem', cursor:'pointer', padding:'0.25rem' }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.span key="x"    initial={{ rotate:-90,opacity:0 }} animate={{ rotate:0,opacity:1 }} exit={{ rotate:90,opacity:0 }} transition={{ duration:0.18 }}><HiX /></motion.span>
                : <motion.span key="menu" initial={{ rotate:90,opacity:0 }}  animate={{ rotate:0,opacity:1 }} exit={{ rotate:-90,opacity:0 }} transition={{ duration:0.18 }}><HiMenuAlt3 /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              initial={{ opacity:0, height:0 }}
              animate={{ opacity:1, height:'auto' }}
              exit={{ opacity:0, height:0 }}
              transition={{ duration:0.32, ease:[0.22,1,0.36,1] }}
              style={{
                background:'rgba(15,42,68,0.97)',
                backdropFilter:'blur(20px)',
                overflow:'hidden',
                borderTop:'1px solid rgba(255,255,255,0.07)',
              }}
            >
              <ul style={{ listStyle:'none', margin:0, padding:'0.5rem 1.5rem 1.5rem', display:'flex', flexDirection:'column' }}>
                {links.map((l, i) => (
                  <motion.li key={l.to}
                    initial={{ opacity:0, x:-20 }}
                    animate={{ opacity:1, x:0 }}
                    transition={{ duration:0.28, delay:i*0.05, ease:[0.22,1,0.36,1] }}
                  >
                    <NavLink to={l.to} end={l.to === '/'}
                      style={({ isActive }) => ({
                        display:'block', padding:'0.8rem 0',
                        borderBottom:'1px solid rgba(255,255,255,0.07)',
                        fontFamily:'Inter,sans-serif', fontWeight:500, fontSize:'0.9rem',
                        textDecoration:'none',
                        color: isActive ? '#60a5fa' : '#e2e8f0',
                      })}
                    >{l.label}</NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity:0, x:-20 }}
                  animate={{ opacity:1, x:0 }}
                  transition={{ duration:0.28, delay:links.length*0.05, ease:[0.22,1,0.36,1] }}
                  style={{ marginTop:'1rem' }}
                >
                  <Link to="/contact" className="btn-blue" style={{ width:'100%', justifyContent:'center' }}>
                    Get Quote
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @media (max-width: 768px) {
            #desk-links, #desk-cta { display: none !important; }
            #mob-btn { display: block !important; }
          }
        `}</style>
      </nav>
    </>
  )
}
