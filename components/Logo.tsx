"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image"

interface LogoProps {
  className?: string
  animate?: boolean
  hideText?: boolean
}

export function Logo({ 
  className = "", 
  animate = false,
  hideText = false 
}: LogoProps) {
  const { theme } = useTheme()
  
  const logoSrc = theme === "dark" ? "/images/dd_dark.svg" : "/images/dd_light.svg"
  
  const imageElement = (
    <Image
      src={logoSrc}
      alt="DEVIN DOWN"
      width={92}
      height={40}
      priority
      aria-hidden={!hideText}
    />
  )
  
  const accessibleText = !hideText && (
    <span className="sr-only">DEVIN DOWN</span>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ 
          scale: [0.1, 1, 1],
          opacity: [0, 1, 1]
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
        className={className}
      >
        {imageElement}
        {accessibleText}
      </motion.div>
    )
  }

  return (
    <div className={className}>
      {imageElement}
      {accessibleText}
    </div>
  )
} 