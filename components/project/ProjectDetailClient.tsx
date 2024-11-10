"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '@/types/project'
import { ProjectContent } from './ProjectContent'
import { ProjectBackground } from "./ProjectBackground"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ProjectHeader } from './ProjectHeader'
import { cn } from "@/lib/utils"

interface ProjectDetailClientProps {
  project: Project
}

const Gallery = dynamic(() => import('@/components/project/Gallery').then(mod => mod.Gallery), {
  loading: () => (
    <div className="max-w-4xl mx-auto">
      <div className="aspect-video animate-pulse bg-muted rounded-lg" />
    </div>
  ),
  ssr: true
})

const Metrics = dynamic(() => import('@/components/project/Metrics').then(mod => mod.Metrics))
const Features = dynamic(() => import('@/components/project/Features').then(mod => mod.Features))

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
            {/* 헤더 섹션 */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-center">{project.title}</h1>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                {project.description}
              </p>
              <div className="flex justify-center gap-4">
                {project.links.demo && (
                  <Button asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      데모 보기
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    깃허브
                  </a>
                </Button>
              </div>
            </div>

            {/* 갤러리 섹션 - 전체 너비 */}
            <div className="w-full">
              <Suspense fallback={<div className="aspect-video animate-pulse bg-muted rounded-lg" />}>
                {project.gallery && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <Gallery 
                          images={project.gallery} 
                          title={project.title}
                          className="rounded-lg overflow-hidden"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-screen-lg max-h-[90vh] overflow-y-auto">
                      <DialogTitle className="sr-only">{project.title} 갤러리</DialogTitle>
                      <Gallery 
                        images={project.gallery} 
                        title={project.title}
                        isModal
                        autoPlay={false}
                      />
                    </DialogContent>
                  </Dialog>
                )}
              </Suspense>
            </div>

            {/* 프로젝트 정보 섹션 */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* 프로젝트 개요 & 성능 지표 */}
              <div className={cn(
                "space-y-6",
                project.performance ? "lg:col-span-2" : "lg:col-span-3"
              )}>
                <ProjectContent 
                  content={project.content} 
                  tech={project.tech}
                  links={project.links}
                />
              </div>
              
              {/* 성능 지표 */}
              {project.performance && (
                <div className="lg:col-span-1">
                  <div className="sticky top-20 bg-card rounded-lg p-6">
                    <Metrics performance={project.performance} />
                  </div>
                </div>
              )}
            </div>

            {/* 주요 기능 */}
            <div className="p-6 rounded-lg border bg-card">
              <Features features={project.features} />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
