"use client"

export const ProjectBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 
          dark:from-gray-950 dark:via-slate-950 dark:to-gray-950 opacity-40 dark:opacity-70" 
      />
      <div 
        className="absolute inset-0 [mask-image:url(/noise.svg)] [mask-size:100px] 
          mix-blend-soft-light opacity-30"
      />
  </div>
)
