'use client'
import { useEffect } from 'react'

export default function BodyScrollSnap() {
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory'
    document.documentElement.style.overflowY = 'scroll'
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => {
      document.documentElement.style.scrollSnapType = ''
      document.documentElement.style.overflowY = ''
    }
  }, [])
  return null
}
