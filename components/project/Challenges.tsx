"use client"

import { useState } from "react"
import { Section } from "./Section"
import { AccordionCard } from "./AccordionCard"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Challenge {
  title: string
  tags?: string[]
  solution: string | string[]
  result: string
}

interface ChallengesProps {
  challenges: Challenge[]
}

export function Challenges({ challenges }: ChallengesProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    challenges.map((_, index) => index)
  )
  const allOpen = openIndexes.length === challenges.length

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndexes([])
    } else {
      setOpenIndexes(challenges.map((_, index) => index))
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
      title="도전 과제"
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
        {challenges.map((challenge, index) => (
          <AccordionCard
            key={index}
            title={challenge.title}
            tags={challenge.tags?.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggleItem(index)}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">해결 방안</h4>
                {Array.isArray(challenge.solution) ? (
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {challenge.solution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{challenge.solution}</p>
                )}
              </div>
              <div>
                <h4 className="font-medium mb-2">결과</h4>
                <p className="text-muted-foreground">{challenge.result}</p>
              </div>
            </div>
          </AccordionCard>
        ))}
      </div>
    </Section>
  )
}
