"use client"

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'

const sections = [
  { id: 'hero', label: '홈' },
  { id: 'about', label: '소개' },
  { id: 'skills', label: '스킬' },
  { id: 'projects', label: '프로젝트' }
]

export function Navigation() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (pathname.startsWith('/projects/')) return

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
  }, [pathname])

  if (pathname.startsWith('/projects/')) {
    return null
  }

  return (
    <>
      {/* 데스크톱 네비게이션 */}
      <motion.nav 
        className="fixed right-8 top-[40%] -translate-y-1/2 hidden xl:flex items-center justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ zIndex: 100 }}
      >
        <div className="relative flex flex-col items-center gap-6">
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
              className="group relative flex items-center justify-center w-6 h-6"
            >
              <span className="absolute right-8 px-2 py-1 rounded-md text-sm 
                opacity-0 group-hover:opacity-100 transition-opacity 
                bg-background/80 dark:bg-black/20 backdrop-blur-sm text-foreground dark:text-white whitespace-nowrap">
                {label}
              </span>
              <span className={cn(
                "block rounded-full transition-all",
                activeSection === id 
                  ? "w-2 h-2 dark:bg-white bg-foreground scale-150" 
                  : "w-2 h-2 dark:bg-white/40 bg-foreground/40 hover:dark:bg-white/80 hover:bg-foreground/80"
              )} />
            </button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation
