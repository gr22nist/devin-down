"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryProps {
  images: string[]
  title: string
  className?: string
  isModal?: boolean
  autoPlay?: boolean
}

export function Gallery({ 
  images, 
  title, 
  className,
  isModal = false,
  autoPlay = true 
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [preloadedImages, setPreloadedImages] = useState<string[]>([])

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const loadedImages = await Promise.all(
          images.map((src) => {
            return new Promise<string>((resolve, reject) => {
              const img = document.createElement('img')
              img.src = src
              img.onload = () => resolve(src)
              img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
            })
          })
        )
        setPreloadedImages(loadedImages)
        setIsLoaded(true)
      } catch (error) {
        console.error('Error preloading images:', error)
        setPreloadedImages(images)
        setIsLoaded(true)
      }
    }
    
    preloadImages()
  }, [images])

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % images.length)
    setProgress(0)
  }, [images.length])

  const previous = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
    setProgress(0)
  }, [images.length])

  useEffect(() => {
    if (!isPlaying) return
    
    const duration = 5000
    const interval = 50
    const updateProgress = () => {
      setProgress(prev => {
        if (prev >= 100) {
          next()
          return 0
        }
        return prev + (interval / duration) * 100
      })
    }

    const timer = setInterval(updateProgress, interval)
    return () => clearInterval(timer)
  }, [isPlaying, next])

  return (
    <Card className={cn(
      "relative overflow-hidden group",
      className
    )}>
      <div className={cn(
        "aspect-video relative",
        isModal && "aspect-auto max-h-[80vh]"
      )}>
        {preloadedImages.length === images.length ? (
          <Image
            src={preloadedImages[currentIndex]}
            alt={`${title} 스크린샷 ${currentIndex + 1}`}
            fill
            className={cn(
              "object-contain transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <div className="flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all relative",
                    currentIndex === index 
                      ? "bg-primary scale-110" 
                      : "bg-background/50 hover:bg-background/70"
                  )}
                  onClick={() => setCurrentIndex(index)}
                >
                  {currentIndex === index && isPlaying && (
                    <div 
                      className="absolute inset-0 rounded-full bg-primary/50"
                      style={{
                        transform: `scale(${1 + progress / 100})`,
                        opacity: 1 - progress / 100,
                        transition: 'all 50ms linear'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
              onClick={previous}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
} 