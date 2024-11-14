"use client"

import { Section } from "./Section"
import { Badge } from "@/components/ui/badge"

interface Feature {
  title: string
  description: string
  tags?: string[]
}

interface FeaturesProps {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <Section title="주요 기능">
      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
            {feature.tags && (
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
} 