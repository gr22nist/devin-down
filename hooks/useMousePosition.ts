import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function useMousePosition() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

 
  const smoothX = useSpring(x, {
    damping: 50,
    stiffness: 400
  })
  
  const smoothY = useSpring(y, {
    damping: 50,
    stiffness: 400
  })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [x, y])

  return { x: smoothX, y: smoothY }
} 