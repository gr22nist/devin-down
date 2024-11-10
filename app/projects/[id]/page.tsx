import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailClient } from '@/components/project/ProjectDetailClient'
import { ProjectBackground } from '@/components/project/ProjectBackground'
import { ProjectHeader } from '@/components/project/ProjectHeader'
import { Metadata } from "next"

// Next.js 15의 새로운 타입 정의
type PageProps = {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <ProjectHeader />
      <main className="pt-16">
        <ProjectBackground />
        <ProjectDetailClient project={project} />
      </main>
    </div>
  )
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }

  return {
    title: `${project.title} | DEVIN DOWN`,
    description: project.description
  }
}
