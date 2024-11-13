"use client"

import { useState } from "react"
import { Badge } from "../ui/badge"
import { Section } from "./Section"
import { AccordionCard } from "./AccordionCard"

interface TroubleShootingProps {
  items: {
    title: string
    tags?: string[]
    process?: string[]
    solution: string | string[]
    result: string
    relatedTech?: string[]
  }[]
}

export function TroubleShooting({ items }: TroubleShootingProps) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <Section title="트러블 슈팅">
      <div className="grid gap-4">
        {items.map((item, index) => (
          <AccordionCard
            key={index}
            title={item.title}
            tags={item.tags}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div className="space-y-4">
              {item.process && item.process.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">해결 과정</h4>
                  <ul className="list-decimal list-inside text-muted-foreground space-y-1">
                    {item.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4 className="font-medium mb-2">해결 방안</h4>
                <p className="text-muted-foreground">{item.solution}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">결과</h4>
                <p className="text-muted-foreground">{item.result}</p>
              </div>
              {item.relatedTech && item.relatedTech.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">관련 기술</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTech.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AccordionCard>
        ))}
      </div>
    </Section>
  )
} 