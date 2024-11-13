import { Badge } from "../ui/badge"
import { Section } from "./Section"

interface TechStacksProps {
  stacks: {
    name: string
    reason: string
    description?: string
  }[]
}

export function TechStacks({ stacks }: TechStacksProps) {
  return (
    <Section title="기술 스택 선정 이유">
      <div className="grid gap-8">
        {stacks.map((stack, index) => (
          <div key={index} className="relative">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold">{stack.name}</h3>
              <Badge variant="outline" className="bg-white/5">{stack.name}</Badge>
            </div>
            <div className="space-y-3 pl-4 border-l-2 border-border">
              <p className="text-muted-foreground">{stack.reason}</p>
              {stack.description && (
                <p className="text-sm text-muted-foreground/80">{stack.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 