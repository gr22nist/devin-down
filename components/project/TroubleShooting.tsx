"use client"

import { useState } from "react"
import { Badge } from "../ui/badge"
import { Section } from "./Section"
import { AccordionCard } from "./AccordionCard"
import { Button } from "../ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TroubleShooting {
  title: string
  tags?: string[]
  issue?: string
  process?: string[]
  solution: string | string[]
  result: string
  relatedTech?: string[]
}

interface TroubleShootingProps {
  items: TroubleShooting[]
}

export function TroubleShooting({ items }: TroubleShootingProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    items.map((_, index) => index)
  )
  const allOpen = openIndexes.length === items.length

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndexes([])
    } else {
      setOpenIndexes(items.map((_, index) => index))
    }
  }

  const toggleItem = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <Section 
      title="트러블 슈팅"
      action={
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAll}
          className="flex items-center gap-1"
        >
          {allOpen ? (
            <>
              <ChevronUp className="h-4 w-4" />
              모두 접기
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              모두 펼치기
            </>
          )}
        </Button>
      }
    >
      <div className="grid gap-4">
        {items.map((item, index) => (
          <AccordionCard
            key={index}
            title={item.title}
            tags={item.tags?.map(tag => (
              <Badge key={tag} variant="trouble">{tag}</Badge>
            ))}
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggleItem(index)}
          >
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground">{item.issue}</p>
              </div>
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
                {Array.isArray(item.solution) ? (
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {item.solution.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{item.solution}</p>
                )}
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