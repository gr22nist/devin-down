import { Section } from "./Section"
import { Badge } from "../ui/badge"

interface TechStack {
  name: string
  reason: string
  description?: string | string[]
}

interface TechStacksProps {
  stacks: TechStack[]
}

export function TechStacks({ stacks }: TechStacksProps) {
  return (
    <Section title="기술 선정 이유">
      <div className="grid gap-4">
        {stacks.map((stack, index) => (
          <div key={index} className="p-3 sm:p-4 rounded-lg bg-foreground/5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <h3 className="text-base sm:text-lg font-semibold">{stack.name}</h3>
              <Badge 
                variant="tech" 
                className="w-fit"
              >
                {stack.reason}
              </Badge>
            </div>
            {stack.description && (
              <div className="text-muted-foreground">
                {Array.isArray(stack.description) ? (
                  <ul className="space-y-1.5 list-disc list-inside">
                    {stack.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed">{stack.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
} 