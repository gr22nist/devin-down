"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="min-h-full flex flex-col justify-between p-8 md:p-12">
      <div className="space-y-8">
        {/* 메인 타이틀 */}
        <div className="space-y-6">
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Creative Frontend Explorer
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            DEVIN KIM
          </motion.h1>
        </div>
      </div>

      {/* 소개 텍스트 */}
      <motion.p 
        className="max-w-2xl text-lg md:text-xl text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        코드의 세상을 탐험하는 주니어 프론트엔드<br />
        창의적인 해결책을 찾아, 즐거운 사용자 경험을 만들어갑니다.
      </motion.p>
    </section>
  )
}
