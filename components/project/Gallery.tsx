"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
        <Image
          src={images[currentIndex]}
          alt={`${title} 스크린샷 ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                currentIndex === index 
                  ? "bg-white w-3"
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm"
            onClick={() => setCurrentIndex((i) => (i - 1 + images.length) % images.length)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm"
            onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
} 