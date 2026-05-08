/**
 * BlogSection — 3 article cards for Home page
 * Boosts SEO with industry content
 */
import { motion } from 'framer-motion'
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa'
import TiltCard from './TiltCard'

const ease = [0.22, 1, 0.36, 1]

const posts = [
  {
    id: 1,
    tag: 'CNC Machining',
    title: 'How to Achieve ±0.005 mm Tolerances in CNC Turning',
    excerpt: 'Tight tolerances require more than just a good machine. We break down the key factors — tooling, fixturing, material selection, and process control — that make the difference.',
    readTime: '5 min read',
    date: 'Mar 2024',
    color: '#2563EB',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
  },
  {
    id: 2,
    tag: 'Materials',
    title: 'Stainless Steel vs Aluminium: Choosing the Right Material for Your Component',
    excerpt: 'Material selection impacts cost, machinability, and performance. This guide compares SS 304, SS 316, Al 6061, and Al 7075 for common industrial applications.',
    readTime: '7 min read',
    date: 'Feb 2024',
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80',
  },
  {
    id: 3,
    tag: 'Quality',
    title: 'What is First Article Inspection (FAI) and Why Does It Matter?',
    excerpt: 'FAI is a critical step before full production. Learn what it involves, what documents are required, and how LMN Industries conducts FAI for every new part.',
    readTime: '4 min read',
    date: 'Jan 2024',
    color: '#0891b2',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
]

export default function BlogSection() {
  return (
    <section className="lmn-section" style={{ background: '#fff' }}>
      <div className="lmn-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2563EB' }}>
              Knowledge Base
            </span>
            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg,#2563EB,#60a5fa)', borderRadius: 2, margin: '0.5rem 0 1rem' }} />
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 700, color: '#0F2A44', margin: 0 }}>
              Industry Insights
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.84rem', fontWeight: 600, color: '#2563EB',
              textDecoration: 'none',
            }}
          >
            View all articles <FaArrowRight style={{ fontSize: '0.7rem' }} />
          </motion.a>
        </motion.div>

        {/* Cards */}
        <div className="g3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
            >
              <TiltCard className="lmn-card" intensity={4} style={{ height: '100%', padding: 0, overflow: 'hidden' }}>
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', height: 180 }}>
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Tag overlay */}
                  <span style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    background: post.color,
                    color: '#fff', fontSize: '0.65rem', fontWeight: 700,
                    padding: '0.25rem 0.65rem', borderRadius: '999px',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem' }}>
                  {/* Meta */}
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#94a3b8' }}>
                      <FaClock style={{ fontSize: '0.65rem' }} /> {post.readTime}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'Poppins,sans-serif', fontWeight: 700,
                    fontSize: '0.95rem', color: '#0F2A44',
                    lineHeight: 1.4, marginBottom: '0.6rem',
                  }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: '0.82rem', color: '#64748b',
                    lineHeight: 1.7, marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      fontSize: '0.8rem', fontWeight: 700,
                      color: post.color, textDecoration: 'none',
                    }}
                  >
                    Read more <FaArrowRight style={{ fontSize: '0.65rem' }} />
                  </motion.a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
