"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tech: string[]
  image: string
  links: {
    github: string
    demo?: string
  }
}

export function ProjectCard({ id, title, description, tech, image, links }: ProjectCardProps) {
  const router = useRouter()

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a[href*="github"]') || 
        (e.target as HTMLElement).closest('a[href*="demo"]')) {
      return
    }
    router.push(`/projects/${id}`)
  }

  return (
    <Card 
      className="group overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium">자세히 보기</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {links.demo && (
            <Button size="sm" asChild>
              <a 
                href={links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          )}
          <Button size="sm" variant="outline" asChild>
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 