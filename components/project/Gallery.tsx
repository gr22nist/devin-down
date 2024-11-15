"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryProps {
  images: string[]
  title: string
  className?: string
  isModal?: boolean
}

export function Gallery({ 
  images, 
  title, 
  className,
  isModal = false
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <Card className={cn(
      "relative overflow-hidden group",
      className
    )}>
      <div className={cn(
        "aspect-[16/9] md:aspect-[21/9]",
        isModal && "aspect-auto max-h-[80vh]",
        "relative"
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} 스크린샷 ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-full bg-secondary/90 hover:bg-secondary dark:bg-secondary/80 dark:hover:bg-secondary border-none shadow-lg"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6 text-background dark:text-background" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-full bg-secondary/90 hover:bg-secondary dark:bg-secondary/80 dark:hover:bg-secondary border-none shadow-lg"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6 text-background dark:text-background" />
          </Button>
        </div>

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                currentIndex === index 
                  ? "bg-primary dark:bg-primary w-3" 
                  : "bg-primary/50 hover:bg-primary/70 dark:bg-primary/50 dark:hover:bg-primary/70"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  )
} 