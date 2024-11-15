import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import { ColorfulBackground } from "@/components/sections/ColorfulBackground"
import AboutSection from "@/components/sections/AboutSection"

export default function Home() {
  return (
    <>
      <ColorfulBackground isDetailPage={false} />
      <main className="relative">
        <div className="h-screen">
          <HeroSection />
        </div>
        <div className="relative mx-auto pb-16">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </div>
      </main>
    </>
  )
}