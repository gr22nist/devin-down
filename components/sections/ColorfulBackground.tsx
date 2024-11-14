"use client"

import { cn } from "@/lib/utils"
import { useScroll, motion, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ColorfulBackground({ isDetailPage = false }) {
  const { scrollY } = useScroll()
  const opacity = useTransform(
    scrollY,
    [0, 500],
    isDetailPage ? [1, 1] : [1, 0]
  )
  
  const [particleCount, setParticleCount] = useState(50)

  useEffect(() => {
    const updateParticleCount = () => {
      const isMobile = window.innerWidth < 768
      setParticleCount(isMobile ? 20 : 40)
    }

    updateParticleCount()
    window.addEventListener('resize', updateParticleCount)
    return () => window.removeEventListener('resize', updateParticleCount)
  }, [])

  return (
    <motion.div
      style={{ opacity }}
      className={cn(
        "fixed inset-0 pointer-events-none",
        isDetailPage ? "z-0" : "z-10"
      )}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0">
        {Array.from({ length: particleCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: -Math.random() * 20,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}