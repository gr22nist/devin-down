"use client"

import { Section } from "./Section"
import { Badge } from "../ui/badge"

interface Feature {
  title: string
  description: string | string[]
  tags?: string[]
}

interface FeaturesProps {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <Section title="주요 기능">
      <div className="grid gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-5 rounded-lg bg-gradient-to-br from-foreground/5 to-foreground/10 hover:from-foreground/10 hover:to-foreground/15 transition-all"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                {feature.tags && (
                  <div className="flex gap-2">
                    {feature.tags.map((tag, i) => (
                      <Badge key={i} variant="feature">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-muted-foreground">
                {Array.isArray(feature.description) ? (
                  <ul className="space-y-2 list-disc list-inside">
                    {feature.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{feature.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 