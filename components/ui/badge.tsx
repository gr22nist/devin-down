import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "bg-foreground/5 text-foreground",
        success: "border-transparent bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20",
        warning: "border-transparent bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20",
        info: "border-transparent bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
        challenge: "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-300",
        trouble: "border-red-200 bg-red-100 text-red-800 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
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
