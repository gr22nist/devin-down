"use client"

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

const sections = [
  { id: 'overview', label: '개요' },
  { id: 'gallery', label: '갤러리' },
  { id: 'features', label: '기능' },
  { id: 'challenges', label: '도전 과제' },
  { id: 'metrics', label: '성과' }
]

export function ProjectNavigation() {
  const [activeSection, setActiveSection] = useState('overview')

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
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-30 hidden md:block">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="group relative flex items-center justify-end"
        >
          <span className="absolute right-6 px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
            {label}
          </span>
          <span className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            activeSection === id 
              ? "bg-primary scale-150" 
              : "bg-gray-300"
          )}></span>
        </button>
      ))}
    </nav>
  )
} 