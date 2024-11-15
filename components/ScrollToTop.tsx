"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const isProjectDetail = pathname.startsWith('/projects/')

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (isProjectDetail) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-24 right-8 md:right-12 md:bottom-28 z-50 opacity-50 hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Button
              size="icon"
              variant="default"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }}
            >
              <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
