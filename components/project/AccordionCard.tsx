import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionCardProps {
  title: string
  tags?: string[]
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export function AccordionCard({ title, tags, isOpen, onToggle, children }: AccordionCardProps) {
  return (
    <div className="border rounded-lg bg-card overflow-hidden">
      <button
        className="w-full px-4 py-3 flex items-start justify-between hover:bg-accent/50"
        onClick={onToggle}
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {tags && (
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
        <ChevronDown 
          className={`h-4 w-4 transition-transform flex-shrink-0 ml-4 mt-1.5 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
