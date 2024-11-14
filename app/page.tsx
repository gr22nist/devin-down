"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useRef } from "react"

const PARTICLE_COUNT = 40
const PARTICLE_SPEED = 0.3

function createParticles(width: number, height: number) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 4 + 0.5,
    speedX: (Math.random() - 0.5) * PARTICLE_SPEED,
    speedY: (Math.random() - 0.5) * PARTICLE_SPEED,
  }))
}

export default function IntroPage() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    router.prefetch('/main')
  }, [router])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    
    if (!canvas || !context) return

    let particles = createParticles(window.innerWidth, window.innerHeight)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = createParticles(canvas.width, canvas.height)
    }

    handleResize() // 초기 설정

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        context.fillStyle = 'rgba(0, 168, 215, 0.2)'
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/main")
    }, 1700)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="h-screen bg-background overflow-hidden relative flex flex-col items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: [0, 1, 2.5, 110],
          rotate: [-180, 0, 0],
        }}
        transition={{ 
          duration: 1.5,
          times: [0, 0.4, 1.5],
          ease: "easeInOut",
        }}
        onAnimationStart={() => {
          router.prefetch('/main')
        }}
      >
        <Image
          src="/images/d.svg"
          alt="DEVIN DOWN Logo"
          width={92}
          height={40}
          priority
          className="w-[80px] md:w-[120px] lg:w-[150px] h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 bottom-10 -translate-x-1/2"
      >
      </motion.div>
    </div>
  )
}