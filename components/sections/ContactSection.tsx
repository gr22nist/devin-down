"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <h2 className="text-3xl font-bold">Contact</h2>
                </div>
                <p className="text-muted-foreground">
                  이메일로 연락주시면 빠른 시간 내에 답변드리겠습니다.
                </p>
              </div>
              <div>
                <a 
                  href="mailto:gr22nist@gmail.com" 
                  className="text-xl font-medium hover:underline"
                >
                  gr22nist@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}