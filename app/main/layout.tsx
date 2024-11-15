import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"
import { Navigation } from "@/components/layout/Navigation"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col mx-auto">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
      <Navigation />
    </div>
  )
} 