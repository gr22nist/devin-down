import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border border-input",
        status: "bg-primary/10 text-primary font-medium",
        tech: "bg-background/50 text-foreground/80 border border-border/50",
        reason: "bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400 font-medium",
        feature: "bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400",
        challenge: "bg-green-500/10 text-green-500 dark:bg-green-400/10 dark:text-green-400",
        trouble: "bg-orange-500/10 text-orange-500 dark:bg-orange-400/10 dark:text-orange-400",
        related: "bg-background/50 text-foreground/70 border border-border/50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
