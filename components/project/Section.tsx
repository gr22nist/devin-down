"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 ${className}`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </motion.section>
  )
} 