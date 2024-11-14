"use client"

import { motion } from "framer-motion"
import { Card } from "../ui/card"
import Image from "next/image"

const strengths = [
  {
    title: "문제 해결",
    description: "사용자 경험 개선을 위해 기술적 해결책을 찾아내는 것을 즐깁니다.",
    icon: "🔍"
  },
  {
    title: "성능 최적화",
    description: "더 나은 성능을 위해 코드를 분석하고 개선하는 것을 좋아합니다.",
    icon: "⚡"
  },
  {
    title: "지속적 학습",
    description: "새로운 기술과 방법론을 학습하고 프로젝트에 적용합니다.",
    icon: "📚"
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 pt-48 pb-24 rounded-md">
      <div className="container px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="lg:col-span-2 sticky top-24 mx-auto lg:mx-0 max-w-sm lg:max-w-none w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <motion.div 
                className="relative mt-6 p-6 rounded-lg bg-card/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-2">김데빈</h3>
                <p className="text-sm text-muted-foreground">
                  프론트엔드 개발자
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>UX 디자이너 → 프론트엔드 개발자</p>
                  <p>사용자 중심의 웹 서비스 개발</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-3 space-y-8">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-center lg:text-left"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                "보기 좋고 쓰기 편한 것이 가장 좋은 것"
              </motion.h2>
              <motion.div className="space-y-4 text-lg text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="pl-4"
                >
                  <span className="md:block">좋은 디자인이란? 질문을 받으면 늘 이렇게 말했습니다. </span>
                  <span className="md:block">개발을 시작한 후, 같은 대답을 할 수 있었습니다. </span>
                  <span className="md:block">세상 모든 서비스는 필요에 의해 생겨납니다. </span>
                  <span className="md:block">아무런 불편함이 없이 자연스럽고 편안하게 사용할 수 있는 것, </span>
                  <span className="md:block">그것이 좋은 서비스라고 생각합니다. </span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pl-4"
                >
                  <span className="md:block">누군가는 저에게 말합니다. </span>
                  <span className="block font-bold py-4">'프론트엔드에게 중요한 것은 네가 신경쓰는 그런 것이 아니다.' </span>
                  <span className="md:block">웹 접근성이, 성능 지표나 사용자 경험 같은 건 부수적인 것이라 말합니다. </span>
                  <span className="md:block">어느 것 하나 중요하지 않은 게 없는데도 말입니다. </span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="pl-4"
                >
                  <span className="md:block text-foreground">보기 좋고, 쓰기 편한 서비스를 만들길 바랍니다.</span>
                  <span className="md:block text-foreground">함께 일하는 이들에게도 편안한 코드를 제공하길 바랍니다.</span>
                  <span className="md:block text-foreground">만든 이도, 사용하는 이도 행복해지는 서비스를 만들고 싶습니다.</span>
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Strengths</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((strength) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 hover:bg-accent transition-colors">
                    <div className="text-3xl mb-4">{strength.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                    <p className="text-muted-foreground">{strength.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 