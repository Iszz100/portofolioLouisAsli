import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'
import { sectionReveal, staggerContainer } from '../utils/motion'

export default function CertificationsPage() {
  return (
    <main id="sertifikasi" className="pb-12 pt-20 sm:pt-24">
      <section className="pb-6 pt-6 sm:pt-8 md:pt-10">
        <div className="container-shell">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="show"
            className="max-w-4xl space-y-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Halaman Sertifikasi</p>
            <h1 className="text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-tight text-slate-100">
              Dokumentasi Sertifikat Pembelajaran
            </h1>
            <p className="text-body leading-relaxed text-slate-300">
              Halaman ini berisi catatan sertifikat yang saya kumpulkan selama proses belajar. Detail judul, penerbit, dan
              kompetensi bisa disesuaikan langsung di data sesuai sertifikat asli.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container-shell">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid auto-rows-fr gap-5 sm:gap-6 md:grid-cols-2"
          >
            {certifications.map((certification) => (
              <motion.article
                key={certification.id}
                variants={sectionReveal}
                className="glass-panel interactive-card flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] w-full border-b border-slate-800 bg-slate-950/70 p-2">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col space-y-4 p-5 md:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Sertifikasi</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-100">{certification.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{certification.description}</p>
                  </div>

                  <div className="grid gap-3 text-sm sm:grid-cols-1">
                    <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Penerbit</p>
                      <p className="mt-1 text-slate-200">{certification.issuer}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-purple-200">Kompetensi Terkait</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {certification.competency.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
