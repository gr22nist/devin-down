"use client"

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

const sections = [
  { id: 'hero', label: '홈' },
  { id: 'about', label: '소개' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '스킬' } 
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection('hero')
        return
      }

      for (const section of sections.slice(1)) {
        const element = document.getElementById(section.id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 데스크톱 네비게이션 */}
      <nav className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="relative space-y-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                if (id === 'hero') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative flex items-center justify-end w-full h-6"
            >
              {/* 툴팁 */}
              <span className="absolute right-6 px-3 py-1.5 rounded-md text-sm opacity-0 
                group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm 
                dark:bg-black/20 text-foreground dark:text-white whitespace-nowrap">
                {label}
              </span>
              
              {/* 인디케이터 점 컨테이너 */}
              <div className="w-6 h-6 flex items-center justify-center">
                <span className={cn(
                  "block rounded-full transition-all duration-300",
                  activeSection === id 
                    ? "w-3 h-3 dark:bg-white bg-foreground scale-125" 
                    : "w-2 h-2 dark:bg-white/50 bg-foreground/50 hover:dark:bg-white/80 hover:bg-foreground/80"
                )} />
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* 모바일 네비게이션 */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex gap-8 px-6 py-3 rounded-full bg-background/80 dark:bg-black/20 backdrop-blur-sm">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                if (id === 'hero') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative w-6 h-6 flex items-center justify-center"
            >
              <span className={cn(
                "block rounded-full transition-all",
                activeSection === id 
                  ? "w-3 h-3 dark:bg-white bg-foreground scale-125" 
                  : "w-2 h-2 dark:bg-white/50 bg-foreground/50 hover:dark:bg-white/80 hover:bg-foreground/80"
              )} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs 
                opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm text-white whitespace-nowrap">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navigation
