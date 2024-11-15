export interface ProjectOverviewProps {
  overview: string
  tech: string[]
  role: ProjectRole
  links: ProjectLinks
  status: ProjectStatus
  period: string
}

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
  issue?: string
  solution: string | string[]
  result: string
}

interface TroubleShooting {
  title: string
  tags?: string[]
  issue?: string
  process?: string[]
  solution: string | string[]
  result: string
  relatedTech?: string[]
}

interface Feature {
  title: string
  description: string
  tags?: string[]
}

export interface ProjectRole {
  main: string
  tasks: string[]
  participation: number
  contributions?: Contribution[]
}

export interface ProjectLinks {
  github: string
  demo?: string
}

export interface ProjectContent {
  overview: string
  role: ProjectRole
  techStacks: TechStack[]
  challenges: Challenge[]
  troubleShooting: TroubleShooting[]
  features?: Feature[]
}

export type ProjectStatusType = 
  | '개발 중'
  | '버전 1.0' 
  | '운영 중' 
  | '종료' 
  | '리뉴얼 예정'
  | 'MVP'
  | '유지보수 중'

export interface ProjectStatus {
  main: ProjectStatusType
  additional?: ProjectStatusType[]
}

export interface Project {
  id: string
  title: string
  description: string
  status: ProjectStatus
  period: string
  content: ProjectContent
  tech: string[]
  links: ProjectLinks
  image: string
  gallery?: string[]
  performance?: Performance
}