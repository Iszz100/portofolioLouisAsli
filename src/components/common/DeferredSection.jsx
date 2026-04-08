import { useEffect, useRef, useState } from 'react'

export default function DeferredSection({ loader, id, className = '', rootMargin = '280px 0px' }) {
  const sectionRef = useRef(null)
  const [SectionComponent, setSectionComponent] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadSection = async () => {
      const module = await loader()
      if (mounted) {
        setSectionComponent(() => module.default)
      }
    }

    const sectionEl = sectionRef.current
    if (!sectionEl) {
      void loadSection()
      return () => {
        mounted = false
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          observer.disconnect()
          void loadSection()
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    )

    observer.observe(sectionEl)

    return () => {
      mounted = false
      observer.disconnect()
    }
  }, [loader, rootMargin])

  return (
    <div id={id} ref={sectionRef} className={className}>
      {SectionComponent ? <SectionComponent /> : null}
    </div>
  )
}
