"use client"

import { usePathname } from 'next/navigation'
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function FloatingContact() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const isProjectDetail = pathname.startsWith('/projects/')
  if (isProjectDetail) return null
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <Mail className="h-6 w-6" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-sm sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>연락하기</DialogTitle>
            <DialogDescription>
              이메일 또는 오픈 채팅으로 연락주세요.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button asChild variant="outline" className="w-full">
              <a href="mailto:gr22nist@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                이메일 보내기
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href="https://open.kakao.com/o/sHj0RZZg" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.54732C0 4.04892 5.64534 0 11.9753 0C18.3604 0 24 4.0534 24 9.64417C24 15.1426 18.3547 19.1915 12.0247 19.1915C11.4399 19.1915 10.8844 19.1593 10.3348 19.0947L6.01939 21.9516H5.81928C5.81852 21.9518 5.81776 21.952 5.81699 21.9522C5.78749 21.9601 5.74415 21.9708 5.69231 21.98C5.64319 21.9886 5.56367 22 5.46643 22C5.15978 22 4.9202 21.8848 4.84707 21.8489C4.73768 21.7951 4.58425 21.7047 4.44266 21.5657C4.26165 21.3879 4.11724 21.1606 4.03876 20.9037C3.97365 20.6906 3.92955 20.3658 4.05365 20.0209L4.82498 17.2436C1.98989 15.5429 0 12.7982 0 9.54732ZM11.9753 2.34043C6.37235 2.34043 2.35294 5.84543 2.35294 9.54732C2.35294 11.9834 3.99892 14.2547 6.73366 15.6195L7.59739 16.0505L6.90152 18.5562L9.77914 16.6511L10.2289 16.7191C10.8099 16.8068 11.3919 16.8511 12.0247 16.8511C17.6276 16.8511 21.6471 13.3461 21.6471 9.64417C21.6471 5.84096 17.6219 2.34043 11.9753 2.34043Z" />
                </svg>
                오픈 채팅 참여하기
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 