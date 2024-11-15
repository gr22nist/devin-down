export function ProjectSkeleton() {
  return (
    <div className="rounded-lg border bg-card/80 backdrop-blur-sm animate-pulse">
      <div className="p-6 space-y-4">
        <div className="h-6 bg-muted rounded w-1/3" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>
      </div>
    </div>
  )
}
