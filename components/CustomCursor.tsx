"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const cursorSize = useMotionValue(16)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const cursorSizeSpring = useSpring(cursorSize, springConfig)

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      setIsHovered(true)
      cursorSize.set(48)
      
      if (target.hasAttribute('data-cursor')) {
        const text = target.getAttribute('data-cursor')
        setCursorText(text || "")
      }
    }
    
    const handleMouseLeave = () => {
      setIsHovered(false)
      cursorSize.set(16)
      setCursorText("")
    }

    const handleMouseDown = () => cursorSize.set(12)
    const handleMouseUp = () => cursorSize.set(isHovered ? 48 : 16)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    const setupHoverListeners = () => {
      const hoverElements = document.querySelectorAll(`
        a, 
        button,
        [data-hover],
        [role="button"],
        .cursor-pointer,
        [data-state="open"],
        [data-cursor]
      `)
      
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    setupHoverListeners()
    const observer = new MutationObserver(setupHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      observer.disconnect()
    }
  }, [cursorX, cursorY, cursorSize, isHovered, isMobile])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.2 }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          width: cursorSizeSpring,
          height: cursorSizeSpring,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          animate={{
            scale: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        />

        {isHovered && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border border-white"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1.5,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-white"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 2,
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.2,
              }}
            />
          </>
        )}

        {cursorText && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-white text-sm whitespace-nowrap font-medium"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}
