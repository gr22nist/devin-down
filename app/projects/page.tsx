import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailClient } from '@/components/project/ProjectDetailClient'

interface Props {
  searchParams: { id: string }
}

export default async function ProjectPage({ searchParams }: Props) {
  const project = projects.find(p => p.id === searchParams.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
} 