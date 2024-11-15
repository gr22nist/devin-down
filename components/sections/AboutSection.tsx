"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { shadowStyles } from '@/lib/styles'

export default function AboutSection() {
  const introTexts = {
    background: [
      "좋은 디자인이란 무엇일까요? 늘 이렇게 답했습니다. ",
      "개발을 시작한 지금도, 이 생각은 변함이 없습니다.",
    ],
    mindset: [
      "세상의 모든 서비스는 필요에 의해 태어납니다. ",
      "특별하지는 않아도 불편함 없이 자연스럽게 사용할 수 있는 것, ",
      "그것이 바로 좋은 서비스라고 믿습니다.",
    ],
    strength: [
      "기능의 완성도, 시각적 아름다움, 성능 최적화, ",
      "그리고 사용자 경험까지 - 어느 하나 소홀히 할 수 없습니다. ",
      "이 모든 것이 밸런스를 이루는 지점을 찾아갑니다.",
    ],
    vision: [
      "보기 좋고, 쓰기 편한 서비스를 만들길 바랍니다. ",
      "함께 일하는 이들에게도 편안한 코드를 제공하길 바랍니다. ",
      "만드는 이도, 사용하는 이도 행복해지는 서비스, 저의 이상향입니다."
    ]
  }

  const IntroBlock = ({ texts, delay, highlight = false }: { texts: string[], delay: number, highlight?: boolean }) => (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="pl-0 lg:pl-4"
    >
      {texts.map((text, index) => (
        <span 
          key={index}
          className={cn(
            "sm:block last:mb-0",
            highlight && "text-primary"
          )}
        >
          {text}
        </span>
      ))}
    </motion.p>
  )

  return (
    <section id="about" className="container pt-24 lg:pt-32">
      <motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div 
            className="lg:col-span-2 lg:sticky lg:top-24 mx-auto lg:mx-0 max-w-sm lg:max-w-none w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={cn(
              "relative aspect-square rounded-lg overflow-hidden",
              shadowStyles.card.base
            )}>
              <Image
                src="/images/profile.jpg"
                width={500}
                height={500}
                alt="Profile image"
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            <motion.div 
              className={cn(
                "relative mt-6 p-6 rounded-lg",
                "bg-card/30 dark:bg-card/20",
                "backdrop-blur-md",
                shadowStyles.card.full
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2">김민서</h3>
              <p className="text-xs text-background bg-primary/90 rounded-full px-2 py-1 inline-flex">
                Frontend Developer
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 bg-">
                  <p>UX/UI Designer → Frontend Developer</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>사용자 중심의 웹 서비스 개발</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-3 space-y-6 lg:space-y-8 relative lg:pt-12">
            <motion.h2 
              className={cn(
                "text-2xl md:text-3xl font-bold lg:text-left mb-4 lg:mb-8"
              )}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              &ldquo;보기 좋고 쓰기 편한 것이 가장 좋은 것&rdquo;
            </motion.h2>
            <motion.div className="flex flex-col gap-6 text-base lg:text-lg text-muted-foreground">
              <IntroBlock texts={introTexts.background} delay={0.4} />
              <IntroBlock texts={introTexts.mindset} delay={0.6} />
              <IntroBlock texts={introTexts.strength} delay={0.8} />
              <IntroBlock texts={introTexts.vision} delay={1} highlight />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 