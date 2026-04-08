import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.replace('#', ''))
      const scrollToHashTarget = () => {
        const target = document.getElementById(targetId)
        if (!target) return false
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        return true
      }

      if (scrollToHashTarget()) return

      const start = performance.now()
      const intervalId = setInterval(() => {
        const reached = scrollToHashTarget()
        const timedOut = performance.now() - start > 3000
        if (reached || timedOut) {
          clearInterval(intervalId)
        }
      }, 90)

      return () => clearInterval(intervalId)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
