"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-primary-foreground z-40">
      <motion.div
        className="h-full bg-accent/80 origin-left"
        style={{ scaleX }}
      />
    </div>
  )
} 