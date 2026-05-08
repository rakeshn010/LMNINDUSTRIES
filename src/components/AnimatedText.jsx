import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

/**
 * Word-by-word text reveal animation.
 * Props: text (string), className, style, delay
 * Splits text into words, each word animates in with stagger.
 */
export default function AnimatedText({ text, className, style, delay = 0, as: Tag = 'span' }) {
  const shouldReduce = useReducedMotion()
  const words = text.split(' ')

  if (shouldReduce) {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    )
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.span
      className={className}
      style={{ display: 'inline', ...style }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          style={{
            display: 'inline-block',
            willChange: 'transform, opacity',
            marginRight: i < words.length - 1 ? '0.28em' : 0,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
