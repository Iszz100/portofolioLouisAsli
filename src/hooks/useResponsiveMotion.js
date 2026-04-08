import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 767

export default function useResponsiveMotion() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_BREAKPOINT)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')

    const onResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    }
    const onMotionChange = (event) => {
      setPrefersReducedMotion(event.matches)
    }

    window.addEventListener('resize', onResize)
    motionMedia.addEventListener('change', onMotionChange)

    return () => {
      window.removeEventListener('resize', onResize)
      motionMedia.removeEventListener('change', onMotionChange)
    }
  }, [])

  return {
    isMobile,
    reduceMotion: Boolean(prefersReducedMotion) || isMobile,
  }
}
