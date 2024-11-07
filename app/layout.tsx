import type { Metadata } from "next"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "./structured-data"
import { suit } from './fonts'

export const metadata: Metadata = {
  title: "DEVIN DOWN | 프론트엔드 포트폴리오",
  description: "프론트엔드 개발자 DEVIN의 포트폴리오입니다.",
  keywords: ["프론트엔드", "개발자", "프론트엔드 개발자", "포트폴리오", "FE", "Frontend Developer", "Next.js", "React"],
  authors: [{ name: "DEVIN" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://your-domain.com",
    title: "포트폴리오 | 프론트엔드 개발자 DEVIN",
    description: "프론트엔드 개발자 DEVIN의 포트폴리오입니다.",
    siteName: "DEVIN의 포트폴리오",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${suit.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="font-suit">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
