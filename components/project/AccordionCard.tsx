import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AccordionCardProps {
  title: string
  tags?: React.ReactNode[]
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export function AccordionCard({ title, tags, isOpen, onToggle, children }: AccordionCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <button
        onClick={onToggle}
        className="w-full p-4"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h3 className="text-lg font-medium">{title}</h3>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags}
              </div>
            )}
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200 mt-1.5",
              isOpen && "rotate-180"
            )}
          />
        </div>
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
            <div className="p-4 pt-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
