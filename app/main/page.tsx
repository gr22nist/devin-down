import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ContactSection from "@/components/sections/ContactSection"
import { ColorfulBackground } from "@/components/sections/ColorfulBackground"

export default function Home() {
  return (
    <>
      <ColorfulBackground />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </main>
      </div>
    </>
  )
}