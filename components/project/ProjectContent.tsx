"use client"

import { Section } from "./Section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/project"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectContentProps {
  content: Project['content']
  tech: Project['tech']
  links: Project['links']
}

export function ProjectContent({ content, tech, links }: ProjectContentProps) {
  return (
    <div className="space-y-8">
      {/* 프로젝트 개요 */}
      <div className="p-6 rounded-lg border bg-card space-y-6">
        <Section title="프로젝트 개요">
          <div className="space-y-6">
            <p className="text-muted-foreground whitespace-pre-line">
              {content.overview}
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
                    <span>{content.role.main}</span>
                    <Badge>참여율 100%</Badge>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {content.role.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild>
                  <a href={links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    데모 보기
                  </a>
                </Button>
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

      {/* 도전 과제 및 해결 */}
      <div className="p-6 rounded-lg border bg-card space-y-8">
        <Section title="도전 과제 및 해결">
          <div className="grid gap-6">
            {content.challenges.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">도전 과제</h4>
                    <p className="text-muted-foreground">{item.issue}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">해결 방안</h4>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">결과</h4>
                    <p className="text-muted-foreground">{item.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {content.troubleShooting && (
          <Section title="트러블 슈팅">
            <div className="grid gap-6">
              {content.troubleShooting.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">문제 상황</h4>
                      <p className="text-muted-foreground">{item.issue}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">해결 방안</h4>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">결과</h4>
                      <p className="text-muted-foreground">{item.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  )
}
