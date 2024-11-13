"use client"

import { motion } from "framer-motion"
import { ProjectBackground } from "./ProjectBackground"
import { ProjectHeader } from "./ProjectHeader"
import { ProjectOverview } from "./ProjectOverview"
import { TechStacks } from "./TechStacks"
import { Challenges } from "./Challenges"
import { TroubleShooting } from "./TroubleShooting"
import { Features } from "./Features"
import { Metrics } from "./Metrics"
import { Gallery } from "./Gallery"
import type { Project } from "@/types/project"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  console.log('Features:', project.content.features);
  
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
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* 2. 갤러리 */}
            {project.gallery && (
              <div className="w-full">
                <Gallery 
                  images={project.gallery}
                  title={project.title}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            )}

            {/* 3. 프로젝트 상세 정보 */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* 왼쪽: 프로젝트 개요 */}
              <div className="order-first">
                <div className="lg:sticky lg:top-20">
                  <div className="p-6 rounded-lg border bg-card">
                    <ProjectOverview 
                      overview={project.content.overview}
                      tech={project.tech}
                      role={project.content.role}
                      links={project.links}
                    />
                  </div>
                </div>
              </div>

              {/* 오른쪽: 상세 내용 */}
              <div className="space-y-6">
                {/* 기술 스택 및 선정 이유 */}
                <div className="p-6 rounded-lg border bg-card">
                  <TechStacks stacks={project.content.techStacks} />
                </div>

                {/* 주요 기능 */}
                {project.content.features && project.content.features.length > 0 && (
                  <div className="p-6 rounded-lg border bg-card">
                    <Features features={project.content.features} />
                  </div>
                )}

                {/* 도전 과제 */}
                {project.content.challenges && (
                  <div className="p-6 rounded-lg border bg-card">
                    <Challenges challenges={project.content.challenges} />
                  </div>
                )}

                {/* 트러블 슈팅 */}
                {project.content.troubleShooting && (
                  <div className="p-6 rounded-lg border bg-card">
                    <TroubleShooting items={project.content.troubleShooting} />
                  </div>
                )}

                {/* 성능 지표 */}
                {project.performance && (
                  <div className="p-6 rounded-lg border bg-card">
                    <Metrics performance={project.performance} />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
