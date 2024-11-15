"use client"

import { motion } from "framer-motion"

interface SectionProps {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}

export function Section({ title, children, action }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`space-y-4`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        {action}
      </div>
      {children}
    </motion.section>
  )
} 