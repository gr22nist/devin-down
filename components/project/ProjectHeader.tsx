"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ScrollProgress } from "@/components/ScrollProgress"

export function ProjectHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-40 bg-background/70 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            asChild 
            className="gap-1 sm:gap-2 px-2 sm:px-4"
          >
            <Link href="/main/#projects">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">돌아가기</span>
              <span className="sm:hidden">뒤로</span>
            </Link>
          </Button>
        </div>
        <ModeToggle />
      </div>
      <ScrollProgress />
    </header>
  )
}
