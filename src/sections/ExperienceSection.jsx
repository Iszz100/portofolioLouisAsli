import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import { timeline } from '../data/experience'
import useResponsiveMotion from '../hooks/useResponsiveMotion'
import { sectionReveal, staggerContainer } from '../utils/motion'

export default function ExperienceSection() {
  const { reduceMotion } = useResponsiveMotion()
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 40%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.25 })

  return (
    <section className="section-padding">
      <div className="container-shell">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Pengalaman & Pencapaian"
            title="Timeline belajar saya selama menempuh SMK SIJA."
            description="Perjalanan ini saya jalani bertahap dari dasar IT, fokus Linux dan administrasi server, sampai target kesiapan kerja setelah lulus."
          />
        </motion.div>

        <motion.div
          ref={trackRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative space-y-5"
        >
          <div className="absolute left-[14px] top-3 h-[calc(100%-1.4rem)] w-px bg-slate-700/70" />
          <motion.div
            style={{ scaleY: reduceMotion ? 1 : progress, transformOrigin: 'top' }}
            className="absolute left-[14px] top-3 h-[calc(100%-1.4rem)] w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-purple-400"
          />

          {timeline.map((item) => (
            <motion.article
              key={item.year}
              variants={sectionReveal}
              className="interactive-card relative ml-8 rounded-2xl border border-slate-700/70 bg-slate-900/50 p-5 md:p-6"
            >
              <span className="absolute -left-[30px] top-6 h-3.5 w-3.5 rounded-full border-2 border-bg-primary bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
