"use client"

import { cn } from "@/lib/utils"
import { useScroll, motion, useTransform } from "framer-motion"

export function ColorfulBackground({ isDetailPage = false }) {
  const { scrollY } = useScroll()
  const opacity = useTransform(
    scrollY,
    [0, 500],
    isDetailPage ? [0.5, 0.2] : [0.5, 0.3]
  )

  return (
    <motion.div
      style={{ opacity }}
      className={cn(
        "fixed inset-0 pointer-events-none",
        isDetailPage ? "z-0" : "z-10"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
      <div className="absolute inset-0 [mask-image:url(/images/noise.svg)] [mask-size:100px] opacity-25" />
    </motion.div>
  )
}