import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  style = {},
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e2e8f0" width="400" height="300"/%3E%3C/svg%3E',
}) {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '100px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [src])

  return (
    <motion.img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      style={{
        ...style,
        filter: imageLoaded ? 'blur(0)' : 'blur(10px)',
        transition: 'filter 0.3s ease',
      }}
      onLoad={() => {
        if (imageSrc !== placeholder) {
          setImageLoaded(true)
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0.7 }}
      transition={{ duration: 0.3 }}
    />
  )
}
