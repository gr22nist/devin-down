"use client"

import { Section } from "./Section"

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
      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <div className="text-muted-foreground">
              {Array.isArray(feature.description) ? (
                feature.description.map((desc, i) => (
                  <p key={i} className="mt-1">{desc}</p>
                ))
              ) : (
                <p>{feature.description}</p>
              )}
            </div>
            {feature.tags && feature.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, i) => (
                  <span key={i} className="text-sm text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
} 