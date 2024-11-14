"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useMousePosition } from "@/hooks/useMousePosition"
import Navigation from "../layout/Navigation"
import { Github, Mail } from "lucide-react"
import { Button } from "../ui/button"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const { x, y } = useMousePosition()
  
  const moveX = useTransform(x, [0, window.innerWidth], [-20, 20])
  const moveY = useTransform(y, [0, window.innerHeight], [-20, 20])
  
  // 스크롤에 따른 페이드아웃 효과 조정
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.95])

  return (
    <section 
      id="hero"
      className="fixed inset-0 w-full min-h-screen overflow-hidden -mt-16"
    >
      {/* 배경 */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </motion.div>

      {/* 메인 컨텐츠 */}
      <motion.div 
        className="relative h-screen flex flex-col items-center justify-center z-10 px-4"
        style={{ 
          opacity,
          scale,
        }}
      >
        {/* 역할 (유지) */}
        <motion.p
          className="text-lg md:text-xl text-primary/80 font-mono mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frontend Developer
        </motion.p>

        {/* 이름 (유지) */}
        <motion.div
          className="relative"
          style={{ x: moveX, y: moveY }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent
              bg-gradient-to-r from-blue-500 via-primary to-purple-500
              hover:from-purple-500 hover:via-primary hover:to-blue-500
              transition-all duration-500
              animate-gradient bg-300% bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DEVIN KIM
          </motion.h1>
        </motion.div>

        {/* 소개 */}
        <motion.div 
          className="mt-12 space-y-6 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            사용자 경험을 개선하는 프론트엔드 개발자입니다
          </p>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              디자인 시스템과 컴포넌트 설계에 관심이 많으며,<br />
              성능 최적화와 클린 코드를 추구합니다.
            </p>
            <p>
              새로운 기술을 배우고 적용하는 것을 즐기며,<br />
              협업을 통한 성장을 지향합니다.
            </p>
          </div>

          {/* 소셜/연락처 링크 */}
          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:email@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* 스크롤 인디케이터 (유지) */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent"
            animate={{ 
              scaleY: [1, 0.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* 네비게이션 (유지) */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
    </section>
  )
}
