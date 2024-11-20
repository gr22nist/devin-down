"use client"

import { usePathname } from 'next/navigation'
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function FloatingContact() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const isProjectDetail = pathname.startsWith('/projects/')
  if (isProjectDetail) return null
  
  return (
    <div className="fixed bottom-8 right-8 md:right-12 md:bottom-12 z-100">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          size="icon"
          aria-label="연락하기"
          variant="default"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <Mail className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xs sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>연락하기</DialogTitle>
            <DialogDescription>
              이메일 또는 오픈 채팅으로 연락주세요.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button 
              asChild 
              variant="outline" 
              className="w-full hover:bg-foreground/5 hover:border-foreground/20 transition-colors"
            >
              <a href="mailto:gr22nist@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                이메일 보내기
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="w-full hover:bg-foreground/5 hover:border-foreground/20 transition-colors"
            >
              <a 
                href="https://open.kakao.com/o/sLPR7Qaf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                오픈채팅 참여하기
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 