"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { ScrollProgress } from "@/components/ScrollProgress"
import { ProjectHeader } from "../project/ProjectHeader"
import { ScrollToTop } from "@/components/ScrollToTop"
import { LogoIcon } from "@/components/icons/logo"

const navigation = [
  { name: "홈", id: "hero" },
  { name: "소개", id: "about" },
  { name: "스킬", id: "skills" },
  { name: "프로젝트", id: "projects" },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoIcon className="h-6 w-auto" />
    </Link>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isProjectDetail = pathname.startsWith('/projects/') && pathname !== '/projects'

  if (isProjectDetail) {
    return <ProjectHeader />
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-background/50">
        <div className="container">
          <nav className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-2">
              <ModeToggle />
              
              {/* 모바일 메뉴 */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="xl:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">메뉴 열기</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[40vh]">
                  <SheetHeader>
                    <SheetTitle>메뉴</SheetTitle>
                    <SheetDescription>
                      원하시는 섹션으로 이동하세요
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-2 py-4">
                    {navigation.map((item) => (
                      <Button 
                        key={item.name}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                          setOpen(false)
                        }}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
        <ScrollProgress />
      </header>
      <ScrollToTop />
    </>
  )
}