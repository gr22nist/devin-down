"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
  {
    title: "Lighthouse Score",
    value: 98,
    color: "bg-green-500"
  },
  {
    title: "First Contentful Paint",
    value: 0.8,
    suffix: "s",
    color: "bg-blue-500"
  },
  {
    title: "Time to Interactive",
    value: 1.2,
    suffix: "s",
    color: "bg-purple-500"
  },
  {
    title: "Cumulative Layout Shift",
    value: 0.1,
    color: "bg-orange-500"
  }
]

export default function PerformanceSection() {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold">성능 지표</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.title} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{metric.title}</span>
                    <span className="font-bold">
                      {metric.value}{metric.suffix || ""}
                    </span>
                  </div>
                  <Progress 
                    value={metric.value * 100 / (metric.suffix ? 2 : 100)} 
                    className={metric.color}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
} 