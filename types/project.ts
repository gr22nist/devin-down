interface PerformanceMetrics {
  score: number
  fcp: number
  lcp: number
  cls: number
  si: number
}

interface Performance {
  desktop?: PerformanceMetrics
  mobile?: PerformanceMetrics
}

interface Contribution {
  part: string 
  percentage: number
  details: string[]
}

interface TechStack {
  name: string
  reason: string
  description?: string
}

interface Challenge {
  title: string
  tags?: string[]
  issue: string
  solution: string | string[]
  result: string
}

interface TroubleShooting {
  title: string
  tags?: string[]
  issue: string
  process: string[]
  solution: string
  result: string
  relatedTech?: string[]
}

interface Feature {
  title: string
  description: string
  tags?: string[]
}

interface ProjectContent {
  overview: string
  role: {
    main: string
    contributions?: Contribution[]
    tasks: string[]
  }
  techStacks: TechStack[]
  challenges: Challenge[]
  troubleShooting: TroubleShooting[]
  features?: Feature[]
}

export interface Project {
  id: string
  title: string
  description: string
  content: ProjectContent
  tech: string[]
  links: {
    github: string
    demo?: string
  }
  image: string
  gallery?: string[]
  performance?: Performance
}