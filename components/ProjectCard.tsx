"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

export function ProjectCard({ id, title, description, tech, image }: ProjectCardProps) {
  const router = useRouter()

  return (
    <Card className="group overflow-hidden bg-background/50 backdrop-blur-sm border-muted/50 hover:border-primary/50 transition-colors duration-300">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center"
            >
              <Button 
                variant="outline" 
                className="bg-background/20 backdrop-blur-sm border-white/30 text-white 
                         hover:bg-white/20 hover:border-white transition-all duration-300
                         px-6 py-2 rounded-full"
              >
                자세히 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
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
      </CardContent>
    </Card>
  )
} 