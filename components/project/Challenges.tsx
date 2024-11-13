import { useState } from "react"
import { Section } from "./Section"
import { AccordionCard } from "./AccordionCard"

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
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <Section title="도전 과제">
      <div className="grid gap-4">
        {challenges.map((challenge, index) => (
          <AccordionCard
            key={index}
            title={challenge.title}
            tags={challenge.tags}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
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
