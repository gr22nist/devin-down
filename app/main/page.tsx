"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection"),
  { ssr: false }
)

const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: false }
)

const SkillsSection = dynamic(
  () => import("@/components/sections/SkillsSection"),
  { ssr: false }
)

const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection"),
  { ssr: false }
)

const ColorfulBackground = dynamic(
  () => import("@/components/sections/ColorfulBackground").then(mod => mod.ColorfulBackground),
  { ssr: false }
)

export default function MainPage() {
  return (
    <>
      <ColorfulBackground isDetailPage={false} />
      <main className="relative">
        <div className="h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
          </Suspense>
        </div>
        <div className="relative mx-auto pb-16">
          <Suspense fallback={<div>Loading...</div>}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsSection />
          </Suspense>
        </div>
      </main>
    </>
  )
}