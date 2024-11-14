import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import { ColorfulBackground } from "@/components/sections/ColorfulBackground"
import AboutSection from "@/components/sections/AboutSection"

export default function Home() {
  return (
    <>
      <ColorfulBackground />
      <main className="relative">
        <div className="h-screen">
          <HeroSection />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </main>
    </>
  )
}