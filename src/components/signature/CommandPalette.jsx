import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../../data/profile'

export default function CommandPalette() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const commands = useMemo(() => {
    const sectionCommands = navLinks.map((item) => ({
      id: item.id,
      label: `Pergi ke ${item.label}`,
      action: () => {
        const target = document.getElementById(item.id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        navigate(`/#${item.id}`)
      },
    }))

    return [
      ...sectionCommands,
      {
        id: 'cert-page',
        label: 'Buka halaman Sertifikasi',
        action: () => navigate('/sertifikasi'),
      },
      {
        id: 'email',
        label: 'Buka draft email',
        action: () => {
          window.location.href = 'mailto:louisfpj@gmail.com'
        },
      },
      {
        id: 'top',
        label: 'Kembali ke atas',
        action: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        },
      },
    ]
  }, [navigate])

  const filtered = useMemo(
    () => commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase().trim())),
    [commands, query],
  )

  useEffect(() => {
    const onKeyDown = (event) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'
      const isSlash = event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)

      if (isShortcut || isSlash) {
        event.preventDefault()
        setOpen((prev) => !prev)
      }

      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const execute = (command) => {
    command.action()
    setOpen(false)
    setQuery('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] text-slate-300 transition hover:border-cyan-300/70 hover:text-cyan-200"
      >
        Perintah Ctrl+K
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 pt-20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.985 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/95 shadow-card"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="border-b border-slate-800 px-4 py-3">
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ketik perintah..."
                  className="focus-ring w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="max-h-[320px] overflow-y-auto p-2">
                {filtered.map((command) => (
                  <button
                    key={command.id}
                    type="button"
                    onClick={() => execute(command)}
                    className="focus-ring flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-slate-800/80"
                  >
                    <span>{command.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Jalankan</span>
                  </button>
                ))}

                {!filtered.length ? (
                  <p className="px-3 py-4 text-sm text-slate-400">Perintah tidak ditemukan untuk kata kunci saat ini.</p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
