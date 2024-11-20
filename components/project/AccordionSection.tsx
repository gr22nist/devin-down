"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Section } from "./Section"
import { AccordionCard } from "./AccordionCard"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

interface Section {
  title: string;
  content: string | string[];
}

interface AccordionSectionProps {
  title: string;
  items: {
    title: string;
    tags?: string[];
    relatedTech?: string[];
    sections: Section[];
  }[];
  action?: React.ReactNode;
}

export function AccordionSection({ title, items, action }: AccordionSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])
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

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    }
    return <p className="text-muted-foreground">{content}</p>
  }

  return (
    <Section 
      title={title}
      action={
        action || (
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
        )
      }
    >
      <div className="grid gap-4">
        {items.map((item, index) => (
          <AccordionCard
            key={index}
            title={item.title}
            tags={item.tags?.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
            isOpen={openIndexes.includes(index)}
            onToggle={() => toggleItem(index)}
          >
            <div className="space-y-6">
              {/* 섹션 내용 */}
              <div className="grid gap-4">
                {item.sections.map((section, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-medium">{section.title}</h4>
                    {renderContent(section.content)}
                  </div>
                ))}
              </div>
              
              {/* 관련 기술 태그 */}
              {item.relatedTech && item.relatedTech.length > 0 && (
                <div className="pt-2 border-t">
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