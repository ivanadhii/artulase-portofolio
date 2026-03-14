'use client'
import { useEffect } from 'react'

export default function BodyScrollSnap() {
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory'
    document.documentElement.style.overflowY = 'scroll'
    return () => {
      document.documentElement.style.scrollSnapType = ''
      document.documentElement.style.overflowY = ''
    }
  }, [])
  return null
}
