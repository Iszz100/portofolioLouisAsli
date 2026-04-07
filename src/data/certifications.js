import cert01 from '../assets/Screenshot 2026-03-10 081220.png'
import cert02 from '../assets/Screenshot 2026-03-10 081254.png'
import cert03 from '../assets/Screenshot 2026-03-10 081314.png'
import cert04 from '../assets/Screenshot 2026-03-10 081326.png'
import cert05 from '../assets/Screenshot 2026-03-10 081332.png'
import cert06 from '../assets/Screenshot 2026-03-10 081338.png'
import cert07 from '../assets/Screenshot 2026-03-10 081451.png'
import cert08 from '../assets/Screenshot 2026-03-10 081509.png'
import cert09 from '../assets/Screenshot 2026-03-10 081527.png'
import cert10 from '../assets/Screenshot 2026-03-10 082040.png'
import cert11 from '../assets/Screenshot 2026-03-10 082048.png'
import cert12 from '../assets/Screenshot 2026-03-10 082058.png'
import cert13 from '../assets/Screenshot 2026-03-10 082116.png'
import cert14 from '../assets/Screenshot 2026-03-10 082136.png'
import cert15 from '../assets/Screenshot 2026-03-10 082144.png'
import cert16 from '../assets/Screenshot 2026-03-10 082153.png'

const rawCertifications = [
  cert01,
  cert02,
  cert03,
  cert04,
  cert05,
  cert06,
  cert07,
  cert08,
  cert09,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
  cert15,
  cert16,
]

export const certifications = rawCertifications.map((image, index) => ({
  id: `cert-${index + 1}`,
  image,
  title: `Sertifikat Pembelajaran #${String(index + 1).padStart(2, '0')}`,
  issuer: 'Nama penyelenggara sertifikat',
  issueDate: 'Isi tanggal terbit',
  credentialId: 'Isi credential ID',
  status: 'Aktif',
  competency: ['System Administrator', 'Cybersecurity'],
  description:
    'Sertifikat ini menjadi dokumentasi proses belajar saya di bidang administrasi sistem dan keamanan dasar.',
}))
