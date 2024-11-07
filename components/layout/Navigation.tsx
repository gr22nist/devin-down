"use client"

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')

  // 스크롤 위치에 따른 활성 섹션 감지
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* 데스크톱 네비게이션 */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 space-y-4 z-50 hidden md:block">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative flex items-center"
          >
            <span className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeSection === id 
                ? "bg-primary scale-150" 
                : "bg-muted hover:bg-muted-foreground"
            )} />
            <span className="absolute left-6 px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* 모바일 네비게이션 */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex gap-4 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative"
            >
              <div className={cn(
                "w-2 h-2 rounded-full transition-all",
                activeSection === id 
                  ? "bg-primary scale-150" 
                  : "bg-muted hover:bg-muted-foreground"
              )} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs 
                opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm whitespace-nowrap">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}