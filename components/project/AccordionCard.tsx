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
        className="flex w-full items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex gap-2">
            {tags?.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
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
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}