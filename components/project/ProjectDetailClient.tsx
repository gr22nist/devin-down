"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { motion } from "framer-motion"
import { ProjectBackground } from "./ProjectBackground"
import { ProjectHeader } from "./ProjectHeader"
import type { Project } from "@/types/project"
import { ProjectSkeleton } from './ProjectSkeleton'
import { ScrollToTop } from '@/components/ScrollToTop'
import Footer from '../layout/Footer'

const ProjectOverview = dynamic(() => import('./ProjectOverview').then(mod => mod.ProjectOverview), {
  loading: () => <ProjectSkeleton />
})
const TechStacks = dynamic(() => import('./TechStacks').then(mod => mod.TechStacks), {
  loading: () => <ProjectSkeleton />
})
const Features = dynamic(() => import('./Features').then(mod => mod.Features), {
  loading: () => <ProjectSkeleton />
})
const Challenges = dynamic(() => import('./Challenges').then(mod => mod.Challenges), {
  loading: () => <ProjectSkeleton />
})
const TroubleShooting = dynamic(() => import('./TroubleShooting').then(mod => mod.TroubleShooting), {
  loading: () => <ProjectSkeleton />
})
const Metrics = dynamic(() => import('./Metrics').then(mod => mod.Metrics), {
  loading: () => <ProjectSkeleton />
})
const Gallery = dynamic(() => import('./Gallery').then(mod => mod.Gallery), {
  loading: () => <ProjectSkeleton />
})

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen text-foreground">
      <ProjectBackground />
      <ProjectHeader />
      <main className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* 1. 프로젝트 소개 */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-center">{project.title}</h1>
              <div className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                {Array.isArray(project.description) ? (
                  project.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))
                ) : (
                  project.description.split('\n').map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))
                )}
              </div>
            </div>

            {/* 2. 갤러리 */}
            {project.gallery && (
              <Suspense fallback={<ProjectSkeleton />}>
                <div className="w-full">
                  <Gallery 
                    images={project.gallery}
                    title={project.title}
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              </Suspense>
            )}

            {/* 3. 프로젝트 상세 정보 */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* 왼쪽: 프로젝트 개요 */}
              <div className="order-first">
                <div className="lg:sticky lg:top-20">
                  <Suspense fallback={<ProjectSkeleton />}>
                    <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                      <ProjectOverview 
                        overview={project.content.overview}
                        tech={project.tech}
                        role={project.content.role}
                        links={project.links}
                        status={project.status}
                        period={project.period}
                      />
                    </div>
                  </Suspense>
                </div>
              </div>

              {/* 오른쪽: 상세 내용 */}
              <div className="space-y-6">
                <Suspense fallback={<ProjectSkeleton />}>
                  <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                    <TechStacks stacks={project.content.techStacks} />
                  </div>
                </Suspense>

                {project.content.features && project.content.features.length > 0 && (
                  <Suspense fallback={<ProjectSkeleton />}>
                    <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                      <Features features={project.content.features} />
                    </div>
                  </Suspense>
                )}

                {project.content.challenges && (
                  <Suspense fallback={<ProjectSkeleton />}>
                    <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                      <Challenges challenges={project.content.challenges} />
                    </div>
                  </Suspense>
                )}

                {project.content.troubleShooting && (
                  <Suspense fallback={<ProjectSkeleton />}>
                    <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                      <TroubleShooting items={project.content.troubleShooting} />
                    </div>
                  </Suspense>
                )}

                {project.performance && (
                  <Suspense fallback={<ProjectSkeleton />}>
                    <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                      <Metrics performance={project.performance} />
                    </div>
                  </Suspense>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
