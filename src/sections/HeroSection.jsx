import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import useResponsiveMotion from '../hooks/useResponsiveMotion'
import cvFile from '../assets/CV Louis Fachri Putra Jatmiko.pdf'
import profilePhoto from '../assets/foto_profil.webp'

export default function HeroSection() {
  const { reduceMotion, isMobile } = useResponsiveMotion()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const onMouseMove = (event) => {
    if (reduceMotion) return
    const { clientX, clientY } = event
    const intensity = isMobile ? 9 : 20
    const x = (clientX / window.innerWidth - 0.5) * intensity
    const y = (clientY / window.innerHeight - 0.5) * intensity
    setPointer({ x, y })
  }

  return (
    <section
      id="hero"
      onMouseMove={onMouseMove}
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-20 md:pt-24"
    >
      <div className="container-shell relative z-10 py-6 md:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
              <span className="text-[11px] uppercase tracking-[0.19em] text-slate-300">LFPJ • SISWA SMK SIJA</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-300"
            >
              Portofolio Siswa SIJA • {profile.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="max-w-5xl text-hero font-semibold leading-[1.03]"
            >
              <span className="block text-gradient">{profile.name}</span>
              <span className="mt-2 block text-[clamp(0.95rem,1.3vw,1.2rem)] font-medium uppercase tracking-[0.22em] text-slate-400">
                SYSTEM ADMINISTRATOR • CYBERSECURITY
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-5 inline-flex max-w-full whitespace-normal rounded-full border border-blue-400/35 bg-blue-400/10 px-3 py-2 text-center text-xs text-blue-200 sm:px-4 sm:text-sm"
            >
              {profile.roles[0]}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="mt-7 max-w-2xl text-body leading-relaxed text-slate-300"
            >
              {profile.shortPitch}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 max-[767px]:flex-col"
            >
              <a
                href="#projects"
                className="btn-premium btn-glow border-cyan-300/55 bg-cyan-400/12 text-cyan-200 hover:-translate-y-[2px]"
              >
                Lihat Proyek
              </a>
              <a
                href="#contact"
                className="btn-premium border-slate-600 bg-slate-900/70 text-slate-100 hover:-translate-y-[2px] hover:border-slate-500"
              >
                Kontak
              </a>
              <a
                href={cvFile}
                download="CV-Louis-Fachri-Putra-Jatmiko-Terbaru.pdf"
                type="application/pdf"
                className="btn-premium border-blue-300/50 bg-blue-400/10 text-blue-100 hover:-translate-y-[2px]"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mx-auto w-full max-w-[300px] lg:col-span-4 lg:max-w-[340px]"
          >
            <div className="glass-panel overflow-hidden rounded-3xl p-2 shadow-card">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={profilePhoto}
                  alt="Foto profil Louis"
                  className="h-[300px] w-full origin-top object-cover object-[50%_24%] scale-[1.2] sm:h-[340px] sm:scale-[1.18] md:h-[390px] md:scale-[1.16]"
                />
              </div>
              <p className="px-2 pb-2 pt-3 text-center text-xs uppercase tracking-[0.16em] text-slate-400">
                Foto profil
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden
        animate={reduceMotion ? { x: 0, y: 0 } : { x: pointer.x, y: pointer.y }}
        transition={{ type: 'spring', stiffness: 40, damping: 18 }}
        className="pointer-events-none absolute right-[8%] top-[20%] h-52 w-52 rounded-full bg-cyan-400/18 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? { x: 0, y: 0 } : { x: pointer.x * -0.55, y: pointer.y * -0.55 }}
        transition={{ type: 'spring', stiffness: 34, damping: 20 }}
        className="pointer-events-none absolute left-[15%] top-[14%] h-44 w-44 rounded-full bg-blue-500/14 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] left-[10%] h-64 w-64 animate-pulseGlow rounded-full bg-purple-500/18 blur-3xl"
      />
    </section>
  )
}

