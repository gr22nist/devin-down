"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProjectStatus, ProjectStatusType } from '@/types/project'
import type { BadgeProps } from "@/components/ui/badge"

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
  status: ProjectStatus
}

type BadgeVariant = NonNullable<BadgeProps["variant"]>

export function ProjectCard({ id, title, description, tech, image, status }: ProjectCardProps) {
  const router = useRouter()

  return (
    <Card className="group overflow-hidden bg-background/50 backdrop-blur-sm border-border/40 
                    hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <div 
        className="aspect-video relative overflow-hidden cursor-pointer"
        onClick={() => router.push(`/projects/${id}`)}
        data-cursor=""
      >
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30
                      opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                variant="outline" 
                className="bg-background/10 backdrop-blur-md border-white/20 text-white 
                         hover:bg-white/20 hover:border-white/40 transition-all duration-300
                         px-6 py-2 rounded-full text-sm font-medium
                         shadow-[0_0_15px_rgba(0,0,0,0.1)]"
              >
                프로젝트 상세보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <Badge 
              variant={getStatusVariant(status.main)}
              className="text-[10px] px-2 py-0.5 font-medium shrink-0"
            >
              {status.main}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground/80 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="border-t border-border/40" />

        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 4).map((item) => (
            <span 
              key={item} 
              className="px-2 py-1 rounded-md text-xs font-medium
                       bg-muted/50 text-muted-foreground/70 
                       hover:text-muted-foreground/90 transition-colors"
            >
              {item}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="px-2 py-1 rounded-md text-xs font-medium
                         bg-muted/30 text-muted-foreground/50
                         hover:text-muted-foreground/70 transition-colors">
              +{tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

function getStatusVariant(status: ProjectStatusType): BadgeVariant {
  switch (status) {
    case '운영 중':
      return 'success'
    case '버전 1.0':
      return 'secondary'
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