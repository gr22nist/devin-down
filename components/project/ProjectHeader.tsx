"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ScrollProgress } from "@/components/ScrollProgress"

export function ProjectHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container h-full flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="gap-2"
        >
          <Link href="/main/#projects">
            <ArrowLeft className="h-4 w-4" />
            돌아가기
          </Link>
        </Button>
        <ModeToggle />
      </div>
      <ScrollProgress />
    </header>
  )
}
