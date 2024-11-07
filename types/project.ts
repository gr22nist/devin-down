export interface Performance {
  desktop: {
    score: number
    fcp: number
    lcp: number
    cls: number
    si: number
  }
  mobile: {
    score: number
    fcp: number
    lcp: number
    cls: number
    si: number
  }
}

export interface Project {
  id: string
  title: string
  description: string
  content: {
    overview: string
    role: {
      main: string
      tasks: string[]
    }
    challenges: {
      issue: string
      solution: string
      result: string
    }[]
    troubleShooting?: {
      issue: string
      solution: string
      result: string
    }[]
    futurePlans?: {
      title: string
      description: string
      status?: "planning" | "in-progress" | "completed"
    }[]
  }
  tech: string[]
  features: {
    title: string
    description: string
    tags: string[]
  }[]
  links: {
    github: string
    demo?: string
  }
  image: string
  gallery?: string[]
  performance?: Performance
}