"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { skills } from "@/data/skills"
import Image from "next/image"
import { IconSet } from "@/components/icons/IconSet"
import type { IconType } from "@/types/skill"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const hoverEffect = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 10 }
}

function renderIcon(icon: IconType) {
  if (Array.isArray(icon)) {
    return (
      <div className="flex gap-1">
        {icon.map((name) => (
          <IconSet key={name} name={name} className="h-5 w-5" />
        ))}
      </div>
    )
  }
  
  if (typeof icon === 'object' && 'type' in icon) {
    return (
      <div className="relative h-5 w-5">
        <Image
          src={icon.src}
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
    )
  }

  return <IconSet name={icon} className="h-5 w-5" />
}

export default function SkillsSection() {
  const categories = ['frontend', 'tools'] as const
  
  return (
    <section id="skills" className="container py-24 space-y-8">
      {/* 헤더 */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">스킬</h2>
        <p className="text-muted-foreground">
          보유 기술 스택과 툴입니다
        </p>
      </div>

      {/* 스킬 카드 */}
      <div className="space-y-12">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-6 capitalize">
              {category}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={hoverEffect}
                  >
                    <Card 
                      className="h-full p-4 transition-colors hover:bg-accent border-t-4" 
                      style={{
                        borderColor: 
                          category === 'frontend' ? 'rgb(59, 130, 246)' : // 파란색
                          'rgb(168, 85, 247)'                             // 보라색
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {renderIcon(skill.icon)}
                        <h3 className="font-medium">{skill.name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

