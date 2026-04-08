import DeferredSection from '../components/common/DeferredSection'
import HeroSection from '../sections/HeroSection'

const loadManifestoSection = () => import('../sections/ManifestoSection')
const loadCapabilitiesSection = () => import('../sections/CapabilitiesSection')
const loadProjectsSection = () => import('../sections/ProjectsSection')
const loadExperienceSection = () => import('../sections/ExperienceSection')
const loadClosingSection = () => import('../sections/ClosingSection')

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DeferredSection id="manifesto" loader={loadManifestoSection} className="content-auto-section min-h-[280px]" />
      <DeferredSection id="capabilities" loader={loadCapabilitiesSection} className="content-auto-section min-h-[340px]" />
      <DeferredSection id="projects" loader={loadProjectsSection} className="content-auto-section min-h-[540px]" />
      <DeferredSection id="experience" loader={loadExperienceSection} className="content-auto-section min-h-[360px]" />
      <DeferredSection id="contact" loader={loadClosingSection} className="content-auto-section min-h-[340px]" />
    </main>
  )
}
