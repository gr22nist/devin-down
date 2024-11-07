"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Performance } from "@/types/project"
import { Monitor, Smartphone } from "lucide-react"

interface MetricsProps {
  performance: Performance
}

const getMetricColor = (metric: string, value: number): { text: string, bg: string } => {
  switch (metric) {
    case 'FCP':
      if (value <= 1.8) return { text: "text-green-500", bg: "bg-green-500" }
      if (value <= 3.0) return { text: "text-orange-500", bg: "bg-orange-500" }
      return { text: "text-red-500", bg: "bg-red-500" }
    case 'LCP':
      if (value <= 2.5) return { text: "text-green-500", bg: "bg-green-500" }
      if (value <= 4.0) return { text: "text-orange-500", bg: "bg-orange-500" }
      return { text: "text-red-500", bg: "bg-red-500" }
    case 'CLS':
      if (value <= 0.1) return { text: "text-green-500", bg: "bg-green-500" }
      if (value <= 0.25) return { text: "text-orange-500", bg: "bg-orange-500" }
      return { text: "text-red-500", bg: "bg-red-500" }
    case 'SI':
      if (value <= 3.4) return { text: "text-green-500", bg: "bg-green-500" }
      if (value <= 5.8) return { text: "text-orange-500", bg: "bg-orange-500" }
      return { text: "text-red-500", bg: "bg-red-500" }
    default:
      return { text: "text-muted-foreground", bg: "bg-muted-foreground" }
  }
}

const getTargets = (metric: string) => {
  switch (metric) {
    case 'FCP':
      return { good: 1.8, medium: 3.0 }
    case 'LCP':
      return { good: 2.5, medium: 4.0 }
    case 'CLS':
      return { good: 0.1, medium: 0.25 }
    case 'SI':
      return { good: 3.4, medium: 5.8 }
    default:
      return { good: 0, medium: 0 }
  }
}

const MetricItem = ({ 
  label, 
  fullLabel, 
  value, 
  unit 
}: { 
  label: string
  fullLabel: string
  value: number
  unit: string 
}) => {
  const color = getMetricColor(label, value)
  const targets = getTargets(label)
  const maxValue = targets.medium * 1.5

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{label}</span>
          <span className="text-xs text-muted-foreground">
            {fullLabel}
          </span>
        </div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`tabular-nums text-sm font-medium ${color.text}`}
        >
          {value.toFixed(value === Math.floor(value) ? 0 : 1)}{unit}
        </motion.span>
      </div>

      <div className="relative h-1.5 w-full rounded-full overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="h-full bg-green-500/15" style={{ width: `${(targets.good / maxValue) * 100}%` }} />
          <div className="h-full bg-orange-500/15" style={{ width: `${((targets.medium - targets.good) / maxValue) * 100}%` }} />
          <div className="h-full bg-red-500/15 flex-1" />
        </div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(value / maxValue) * 100}%` }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: "easeOut"
          }}
          className={`absolute top-0 h-full ${color.bg}`}
        />
      </div>
    </motion.div>
  )
}

export function Metrics({ performance }: MetricsProps) {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="desktop">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">PSI</h2>
          <TabsList className="grid grid-cols-2 gap-2 items-center">
            <TabsTrigger 
              value="desktop" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-2"
            >
              <Monitor className="w-4 h-4 mr-1" />
              데스크톱
            </TabsTrigger>
            <TabsTrigger 
              value="mobile"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-2"
            >
              <Smartphone className="w-4 h-4 mr-1" />
              모바일
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="desktop">
          <MetricsContent metrics={performance.desktop} />
        </TabsContent>
        <TabsContent value="mobile">
          <MetricsContent metrics={performance.mobile} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MetricsContentProps {
  metrics: {
    score: number
    fcp: number
    lcp: number
    cls: number
    si: number
  }
}

const MetricsContent = ({ metrics }: MetricsContentProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 50) return "text-orange-500"
    return "text-red-500"
  }

  return (
    <div className="space-y-6 mt-4">
      {/* Performance Score */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between p-4 rounded-lg bg-card"
      >
        <span className="text-sm font-bold text-muted-foreground">
          Performance Score
        </span>
        <div className="flex items-baseline gap-1">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-2xl font-bold tracking-tight tabular-nums ${getScoreColor(metrics.score)}`}
          >
            {metrics.score}
          </motion.span>
          <span className="text-sm text-muted-foreground">/ 100</span>
        </div>
      </motion.div>

      {/* Core Web Vitals */}
      <div className="space-y-5">
        <MetricItem 
          label="FCP" 
          fullLabel="First Contentful Paint"
          value={metrics.fcp}
          unit="s" 
        />
        <MetricItem 
          label="LCP" 
          fullLabel="Largest Contentful Paint"
          value={metrics.lcp}
          unit="s" 
        />
        <MetricItem 
          label="CLS" 
          fullLabel="Cumulative Layout Shift"
          value={metrics.cls}
          unit="" 
        />
        <MetricItem 
          label="SI" 
          fullLabel="Speed Index"
          value={metrics.si}
          unit="s" 
        />
      </div>
    </div>
  )
} 