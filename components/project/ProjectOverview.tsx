import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Section } from "./Section"

interface ProjectOverviewProps {
  overview: string
  tech: string[]
  role: {
    main: string
    tasks: string[]
  }
  links: {
    github: string
    demo?: string
  }
}

export function ProjectOverview({ overview, tech, role, links }: ProjectOverviewProps) {
  return (
    <div className="space-y-6">
      <Section title="프로젝트 개요">
        <div className="space-y-6">
          <p className="text-muted-foreground whitespace-pre-line">
            {overview}
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">사용 기술</h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">담당 역할</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>{role.main}</span>
                  <Badge>참여율 100%</Badge>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {role.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              {links.demo && (
                <Button asChild>
                  <a href={links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    사이트 보기
                  </a>
                </Button>
              )}
              <Button variant="outline" asChild>
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  깃허브
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
} 