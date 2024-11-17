import { Badge } from "../ui/badge"
import type { BadgeProps } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Section } from "./Section"
import { ProjectStatusType, ProjectOverviewProps } from "@/types/project"

type BadgeVariant = NonNullable<BadgeProps["variant"]>

export function ProjectOverview({ overview, tech, role, links, status, period }: ProjectOverviewProps) {
  return (
    <>
      <Section title="프로젝트 정보">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={getStatusVariant(status.main)}>
              {status.main}
            </Badge>
            {status.additional?.map((additionalStatus) => (
              <Badge 
                key={additionalStatus}
                variant={getStatusVariant(additionalStatus)}
              >
                {additionalStatus}
              </Badge>
            ))}
            <span className="text-sm text-muted-foreground">
              {period}
            </span>
          </div>

          <div>
            <p className="text-muted-foreground whitespace-pre-line">
              {overview}
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">사용 기술</h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">담당 역할</h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-start gap-2">
                <span className="font-medium">{role.main}</span>
                <Badge>참여율 {role.participation}%</Badge>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                {role.tasks.map((task, index) => (
                  <li key={index} className="leading-relaxed">{task}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
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
      </Section>
    </>
  )
}

function getStatusVariant(status: ProjectStatusType): BadgeVariant {
  switch (status) {
    case '운영 중':
      return 'success'
    case '버전 1.0':
      return 'outline'
    case '개발 중':
      return 'default'
    case 'MVP':
      return 'warning'
    case '리뉴얼 예정':
      return 'info'
    case '유지보수 중':
      return 'secondary'
    default:
      return 'outline'
  }
} 