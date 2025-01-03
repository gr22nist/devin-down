import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { ProjectDetailClient } from '@/components/project/ProjectDetailClient'
import { ProjectBackground } from '@/components/project/ProjectBackground'
import { ProjectHeader } from '@/components/project/ProjectHeader'
import { Metadata } from "next"

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

interface Props {
  params: Params
  searchParams: SearchParams
}

export default async function ProjectPage(props: Props) {
  const params = await props.params
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

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found"
    }
  }

  return {
    title: `${project.title} | DEVIN DOWN`,
    description: Array.isArray(project.description) 
      ? project.description.join(' ') 
      : project.description
  }
}
