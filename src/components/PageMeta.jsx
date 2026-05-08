/**
 * PageMeta — sets document title + meta description per page
 * No extra dependencies needed
 */
import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    // Title
    document.title = title
    // Description
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = title
    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.content = description
  }, [title, description])

  return null
}
