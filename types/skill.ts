export type IconName = 
  | 'NextJs'
  | 'React'
  | 'JavaScript'
  | 'Html'
  | 'Css'
  | 'GitHub'
  | 'Tailwind'
  | 'Figma'
  | 'Vercel'
  | 'Adobe'
export type IconType = 
  | IconName 
  | IconName[] 
  | { type: 'image'; src: string }

export interface Skill {
  name: string
  description: string
  icon: IconType
  category: 'frontend' | 'tools' | 'design'
} 