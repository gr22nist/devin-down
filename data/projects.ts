import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "DEVIN DOWN",
    description: "DEVIN의 포트폴리오",
    content: {
      overview: "Next.js와 Tailwind CSS를 활용하여 구현한 개인 포트폴리오 웹사이트입니다. SSR/SSG 하이브리드 렌더링을 통해 초기 로딩 시간을 최적화하고, Framer Motion을 활용한 부드러운 인터랙션으로 사용자 경험을 향상시켰습니다.",
      role: {
        main: "프론트엔드 개발 (개인 프로젝트)",
        tasks: [
          "Next.js App Router를 활용한 프로젝트 구조 설계",
          "Tailwind CSS와 shadcn/ui로 디자인 시스템 구축",
          "Framer Motion을 활용한 인터랙션 구현",
          "다크모드 및 반응형 레이아웃 구현"
        ]
      },
      challenges: [
        {
          issue: "성능과 사용자 경험의 균형",
          solution: "SSR/SSG 하이브리드 렌더링 도입, 이미지 최적화, 컴포넌트 지연 로딩 적용",
          result: "Lighthouse 성능 점수 95+ 달성, FCP 0.8초 달성"
        }
      ],
      troubleShooting: [
        {
          issue: "다크모드 전환 시 깜빡임 문제 해결",
          solution: "next-themes의 suppressHydrationWarning 적용 및 초기 렌더링 최적화",
          result: "부드러운 테마 전환 구현 및 사용자 경험 개선"
        }
      ]
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui"
    ],
    features: [
      {
        title: "하이브리드 렌더링",
        description: "SSR과 SSG를 조합하여 최적의 성능 제공",
        tags: ["성능", "SEO"]
      },
      {
        title: "반응형 디자인",
        description: "모든 디바이스에서 최적화된 레이아웃 제공",
        tags: ["UI/UX", "접근성"]
      },
      {
        title: "다크모드",
        description: "시스템 설정과 연동되는 자연스러운 테마 전환",
        tags: ["UI/UX", "접근성"]
      }
    ],
    links: {
      github: "https://github.com/gr22nist/devin-down",
      demo: "https://devin-down.vercel.app"
    },
    image: "/images/project/project1.jpg",
    gallery: [
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg"
    ],
    performance: {
      desktop: {
        score: 98,
        fcp: 0.8,
        lcp: 1.2,
        cls: 0.05,
        si: 1.5
      },
      mobile: {
        score: 95,
        fcp: 1.2,
        lcp: 2.1,
        cls: 0.08,
        si: 2.3
      }
    }
  },
  {
    id: "sqool",
    title: "SQooL",
    description: "한글 데이터로 배우는 마음 편한 SQLite!\n설치 없이 바로 실행하는 웹 기반 SQL 학습 플랫폼",
    content: {
      overview: "SQL 입문자가 편리하게 사용할 수 있는 웹 에디터 기반 SQLit 학습 서비스입니다.\n한글 데이터베이스를 활용하여 학습 진입 장벽을 낮추고, 재미있는 학습을 제공합니다.",
      role: {
        main: "프론트엔드 개발 (4인 팀 프로젝트)",
        tasks: [
          "SQLite 학습을 위한 직관적인 UI/UX 구현",
          "샘플 한글 데이터베이스 제공",
          "웹 에디터 기반 SQLite 학습 기능 구현"
        ]
      },
      challenges: [
        {
          issue: "입문 학습자의 수준을 고려한 편의성 필요",
          solution: "문서와 에디터를 같은 페이지에서도 사용할 수 있도록 구현",
          result: "문서를 확인하고 연습 문제 카피 기능을 추가하여 빠른 학습 유도"
        }
      ],
      troubleShooting: [
        {
          issue: "쿼리 결과 테이블의 반응형 레이아웃 도입 어려움",
          solution: "카드 뷰 형식으로 쿼리 결과 시각화",
          result: "모바일 환경에서도 쿼리 실행 결과를 쉽게 확인할 수 있도록 개선"
        }
      ],
      futurePlans: [
        {
          title: "난이도 별 데이터베이스 추가",
          description: "초급, 중급, 고급 난이도 별 샘플 한글 데이터베이스 추가.",
          status: "planning"
        },
      ]
    },
    tech: ["Next.js", "Tailwind CSS", "Zustand", "Python", "Flask", "MariaDB"],
    features: [
      {
        title: "실시간 쿼리 실행",
        description: "작성한 쿼리를 즉시 실행하고 결과를 확인할 수 있습니다.",
        tags: ["실시간", "SQLite", "CodeMirror"]
      },
      {
        title: "한글 데이터베이스",
        description: "친숙한 한글 데이터로 SQLite를 쉽게 학습할 수 있습니다.",
        tags: ["교육", "데이터"]
      },
    ],
    links: {
      github: "https://github.com/username/sqool",
      demo: "https://sqool.kr"
    },
    image: "/images/project/project1.jpg",
    gallery: [
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg"
    ],
    performance: {
      desktop: {
        score: 97,
        fcp: 0.3,
        lcp: 0.9,
        cls: 0.073,
        si: 1.3
      },
      mobile: {
        score: 62,
        fcp: 1.2,
        lcp: 4.4,
        cls: 0.195,
        si: 4.4
      }
    }
  },
  {
    id: "myr",
    title: "My력서",
    description: "누구나 간단하게 작성하는 나의 역사, My력서\n안전하고 간편한 온라인 이력서 작성 서비스",
    content: {
      overview: "IndexedDB를 활용하여 사용자의 이력서 데이터를 브라우저에 안전하게 저장하고, 실시간 미리보기와 자동 저장 기능을 제공하는 온라인 이력서 작성 서비스입니다. 사용자의 개인정보를 보호하면서도 편리한 이력서 작성 경험을 제공하는 것에 중점을 두었습니다.",
      role: {
        main: "프론트엔드 개발 (개인 프로젝트)",
        tasks: [
          "IndexedDB를 활용한 클라이언트 사이드 데이터 저장 구현",
          "Zustand를 활용한 상태 관리 및 실시간 미리보기 기능 개발",
          "자동 저장, 내보내기/가져오기 시스템 구축",
        ]
      },
      challenges: [
        {
          issue: "사용자의 민감한 개인정보를 안전하게 보호하는 서버리스 서비스 제공",
          solution: "IndexedDB를 활용하여 모든 데이터를 클라이언트에서 안전하게 저장하고 관리하도록 구현. 데이터 암호화 및 복호화 기능 추가.",
          result: "실시간 자동 저장, 내보내기/가져오기 기능을 구현하여 편의성 및 보안성 강화."
        }
      ],
      troubleShooting: [
        {
          issue: "복잡한 상태 관리와 번들 크기로 인한 성능 저하 문제",
          solution: "동적 임포트를 활용하고 상태 업데이트 배치 처리로 렌더링 최적화",
          result: "페이지 로드 시간 30% 감소, 실시간 미리보기 성능 개선"
        }
      ],
      futurePlans: [
        {
          title: "PDF 익스포트 기능 개선",
          description: "다양한 이력서 템플릿 지원 및 커스텀 스타일링 옵션 추가",
          status: "in-progress"
        },
      ]
    },
    tech: ["Next.js", "Tailwind CSS", "Zustand", "IndexedDB"],
    features: [
      {
        title: "서버리스 시스템",
        description: "브라우저에서 모든 데이터를 안전하게 저장하고 관리합니다.",
        tags: ["IndexedDB", "보안",]
      },
      {
        title: "실시간 미리보기",
        description: "작성하는 내용을 실시간으로 미리볼 수 있습니다.",
        tags: ["실시간", "미리보기"]
      },
      {
        title: "자동 저장",
        description: "작성 중인 내용이 자동으로 저장되어 데이터 손실 걱정이 없습니다.",
        tags: ["자동저장", "UX"]
      },
    ],
    links: {
      github: "https://github.com/gr22nist/MYR",
      demo: "https://myrec.kr"
    },
    image: "/images/project/project1.jpg",
    gallery: [
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg"
    ],
    performance: {
      desktop: {
        score: 98,
        fcp: 0.8,
        lcp: 1.2,
        cls: 0.05,
        si: 1.5
      },
      mobile: {
        score: 92,
        fcp: 1.2,
        lcp: 1.8,
        cls: 0.08,
        si: 2.1
      }
    }
  }
]
