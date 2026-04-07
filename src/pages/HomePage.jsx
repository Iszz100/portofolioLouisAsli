import ClosingSection from '../sections/ClosingSection'
import ExperienceSection from '../sections/ExperienceSection'
import HeroSection from '../sections/HeroSection'
import ManifestoSection from '../sections/ManifestoSection'
import ProjectsSection from '../sections/ProjectsSection'
import CapabilitiesSection from '../sections/CapabilitiesSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ClosingSection />
    </main>
  )
}
