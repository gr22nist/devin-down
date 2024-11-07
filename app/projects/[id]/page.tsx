import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailClient } from '@/components/project/ProjectDetailClient'
import { ProjectBackground } from '@/components/project/ProjectBackground'
import { ProjectHeader } from '@/components/project/ProjectHeader'

interface Props {
  params: { id: string }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

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

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
