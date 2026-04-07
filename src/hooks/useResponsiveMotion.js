import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const MOBILE_BREAKPOINT = 767

export default function useResponsiveMotion() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_BREAKPOINT)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    isMobile,
    reduceMotion: Boolean(prefersReducedMotion) || isMobile,
  }
}