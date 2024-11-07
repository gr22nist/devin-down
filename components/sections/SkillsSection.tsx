"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Wrench } from "lucide-react"

const skills = {
  development: [
    { 
      name: "Next.js", 
      description: "App Router, API Routes, 서버 컴포넌트를 활용합니다" 
    },
    { 
      name: "React", 
      description: "컴포넌트 설계와 다양한 라이브러리 활용이 가능합니다" 
    },
    { 
      name: "JavaScript", 
      description: "ES6+ 문법과 비동기 처리 경험이 있습니다" 
    },
    { 
      name: "HTML/CSS", 
      description: "시맨틱 마크업, 웹접근성을 고려한 반응형 레이아웃을 만듭니다" 
    },
    { 
      name: "Git/GitHub", 
      description: "기능별 브랜치 관리와 버전 관리를 합니다" 
    }
  ],
  tools: [
    { 
      name: "Tailwind CSS", 
      description: "컴포넌트 스타일링, 커스텀 유틸리티, @layer 시스템을 활용합니다" 
    },
    { 
      name: "Zustand", 
      description: "간단한 전역 상태 관리 경험이 있습니다" 
    },
    { 
      name: "Shadcn UI",
      description: "재사용 가능한 컴포넌트 라이브러리를 활용합니다" 
    },
    { 
      name: "Figma", 
      description: "디자인 시스템을 이해하고 개발에 반영합니다" 
    },
    { 
      name: "Vercel", 
      description: "자동 배포 환경을 구축하고 관리합니다" 
    }
  ]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const SkillsSection = () => {
  return (
    <section className="container py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">스킬</h2>
          <p className="text-muted-foreground">프론트엔드 개발에 사용하는 기술 스택입니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">개발</h3>
                </div>
                <div className="grid gap-4">
                  {skills.development.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="group relative pl-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-border group-hover:bg-primary transition-colors" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">
                            {skill.name}
                          </span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">개발 도구</h3>
                </div>
                <div className="grid gap-4">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="group relative pl-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-border group-hover:bg-primary transition-colors" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">
                            {skill.name}
                          </span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection

