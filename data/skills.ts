import type { Skill } from "@/types/skill"

export const skills: Skill[] = [
  { 
    name: "Next.js", 
    description: "App Router, API Routes, 서버 컴포넌트를 활용합니다",
    icon: "NextJs",
    category: 'frontend'
  },
  { 
    name: "React", 
    description: "컴포넌트 설계와 다양한 라이브러리 활용이 가능합니다",
    icon: "React",
    category: 'frontend'
  },
  { 
    name: "JavaScript", 
    description: "ES6+ 문법과 비동기 처리 기능 등을 활용합니다",
    icon: "JavaScript",
    category: 'frontend'
  },
  { 
    name: "HTML/CSS", 
    description: "시맨틱 마크업, 웹접근성을 고려한 반응형 레이아웃을 만듭니다",
    icon: ["Html", "Css"],
    category: 'frontend'
  },
  { 
    name: "Git/GitHub", 
    description: "기능별 브랜치 관리와 버전 관리를 합니다",
    icon: "GitHub",
    category: 'tools'
  },
  { 
    name: "Tailwind CSS", 
    description: "컴포넌트 스타일링, 커스텀 유틸리티, @layer 등을 활용합니다",
    icon: "Tailwind",
    category: 'frontend'
  },
  { 
    name: "Zustand", 
    description: "간단한 전역 상태 관리 경험이 있습니다",
    icon: { type: 'image', src: '/images/project/icon_zustand.svg' },
    category: 'frontend'
  },
  { 
    name: "Vercel", 
    description: "자동 배포 환경을 구축하고 관리합니다",
    icon: "Vercel",
    category: 'tools'
  },
  { 
    name: "Figma", 
    description: "디자인 시스템을 이해하고 컴포넌트화 합니다",
    icon: "Figma",
    category: 'tools'
  },
  { 
    name: "Adobe", 
    description: "포토샵, 일러스트레이터 등 다양한 디자인 도구를 사용 가능합니다",
    icon: "Adobe",
    category: 'tools'
  },
] as const

export type SkillName = (typeof skills)[number]['name']