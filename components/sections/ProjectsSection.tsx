"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import type { Project } from "@/types/project"
import { SectionHeader } from "@/components/sections/SectionHeader"

const ProjectCard = dynamic(
  () => import("@/components/ProjectCard").then(mod => mod.ProjectCard),
  {
    loading: () => <ProjectCardSkeleton />,
    ssr: false
  }
)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// 스켈레톤 UI 컴포넌트
function ProjectCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card/80 backdrop-blur-sm animate-pulse">
      <div className="aspect-video bg-muted" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-muted rounded w-1/3" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="container pt-24 lg:pt-32 flex flex-col gap-8">
      <SectionHeader 
        title="프로젝트" 
        description="PROJECTS MUST BE DONE!"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={<ProjectCardSkeleton />}>
            {projects.map((project: Project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </Suspense>
        </div>
      </motion.div>
    </section>
  )
}
