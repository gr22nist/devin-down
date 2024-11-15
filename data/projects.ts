import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "DEVIN DOWN",
    description: "DEVIN 다운 코드! Next.js와 TypeScript로 만든 프론트엔드 포트폴리오 페이지",
    status: {
      main: "운영 중",
      additional: ["리뉴얼 예정"]
    },
    period: "2024.11 ~",
    content: {
      overview: "개인 포트폴리오 페이지입니다. Framer Motion을 활용해 부드러운 미니 인터랙션을 다양하게 사용했습니다.",
      role: {
        main: "프론트엔드 개발 (개인 프로젝트)",
        tasks: [
          "Next.js App Router를 활용한 프로젝트 구조 설계",
          "Tailwind CSS와 shadcn/ui로 디자인 시스템 구축",
          "Framer Motion을 활용한 인터랙션 구현",
          "다크모드 및 반응형 레이아웃 구현"
        ],
        participation: 100
      },
      challenges: [
        {
          title: "동적 컴포넌트 로딩 최적화",
          tags: ["성능", "Next.js"],
          issue: "프로젝트 상세 페이지의 초기 로딩 속도 저하 문제",
          solution: [
            "dynamic import를 활용한 컴포넌트 분할",
            "Suspense를 활용한 로딩 상태 관리",
            "ProjectSkeleton 컴포넌트로 사용자 경험 개선"
          ],
          result: "초기 페이지 로드 시간 40% 감소 및 사용자 경험 개선"
        },
        {
          title: "반응형 레이아웃 구현",
          tags: ["UI/UX", "Tailwind CSS"],
          issue: "다양한 디바이스에서의 최적화된 레이아웃 제공 필요",
          solution: [
            "Tailwind CSS의 반응형 클래스 활용",
            "Grid 시스템을 활용한 유동적 레이아웃 구현",
            "컴포넌트별 독립적인 반응형 처리"
          ],
          result: "모든 디바이스에서 일관된 사용자 경험 제공"
        }
      ],
      troubleShooting: [
        {
          title: "프로젝트 상세 페이지 성능 최적화",
          tags: ["성능", "Next.js"],
          issue: "프로젝트 상세 페이지 렌더링 시 발생하는 성능 저하 문제",
          process: [
            "Chrome DevTools를 통한 성능 분석",
            "컴포넌트 렌더링 패턴 분석",
            "동적 임포트 전략 수립"
          ],
          solution: [
            "dynamic import를 활용한 컴포넌트 분할",
            "Suspense 경계 설정으로 점진적 로딩 구현",
            "스켈레톤 UI 적용으로 로딩 UX 개선"
          ],
          result: "페이지 초기 로딩 시간 40% 감소, Lighthouse 성능 점수 98점 달성",
          relatedTech: ["Next.js", "React Suspense", "Dynamic Import"]
        },
        {
          title: "프로젝트 데이터 관리 최적화",
          tags: ["상태관리", "TypeScript"],
          issue: "복잡한 프로젝트 데이터 구조로 인한 타입 안정성과 유지보수성 저하",
          process: [
            "프로젝트 데이터 구조 분석",
            "TypeScript 타입 시스템 설계",
            "데이터 정규화 전략 수립"
          ],
          solution: "명확한 인터페이스 정의와 타입 안정성 확보를 위한 타입 시스템 구축",
          result: "코드 품질 향상 및 개발 생산성 30% 증가",
          relatedTech: ["TypeScript", "Next.js"]
        }
      ],
      techStacks: [
        {
          name: "Next.js",
          reason: "SSR/SSG 하이브리드 렌더링과 App Router를 활용한 최적화된 라우팅을 위해 선택",
          description: "서버 사이드 렌더링과 정적 생성을 조합하여 최적의 성능 제공"
        },
        {
          name: "Tailwind CSS",
          reason: "빠른 UI 개발과 일관된 디자인 시스템 구축을 위해 선택",
          description: "유틸리티 기반의 CSS로 생산성 향상과 번들 크기 최적화"
        }
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
      ]
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/gr22nist/devin-down",
      demo: "https://devin-down.vercel.app"
    },
    image: "/images/dd-thumbnail.svg",
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
        si: 2.1
      }
    }
  },
  {
    id: "sqool",
    title: "SQooL",
    description: "한글 데이터로 배우는 마음 편한 SQLite!\n설치 없이 바로 실행하는 웹 기반 SQL 학습 플랫폼",
    status: {
      main: "운영 중",
      additional: ["버전 1.0"]
    },
    period: "2024.01 ~ 2024.02",
    content: {
      overview: "SQL 입문자가 편리하게 사용할 수 있는 웹 에디터 기반 SQLite 학습 서비스입니다.\n한글 데이터베이스를 활용하여 학습 진입 장벽을 낮추고, 재미있는 학습을 제공합니다.",
      role: {
        main: "프론트엔드 개발 (4인 팀 프로젝트)",
        tasks: [
          "SQLite 학습을 위한 직관적인 UI/UX 구현",
          "샘플 한글 데이터베이스 제공",
          "웹 에디터 기반 SQLite 학습 기능 구현"
        ],
        participation: 50
      },
      challenges: [
        {
          title: "SQL 학습 진입 장벽 낮추기",
          tags: ["UX", "교육"],
          issue: "입문 학습자의 수준을 고려한 편의성 필요",
          solution: "문서와 에디터를 같은 페이지에서도 사용할 수 있도록 구현",
          result: "문서를 확인하고 연습 문제 카피 기능을 추가하여 빠른 학습 유도"
        }
      ],
      troubleShooting: [
        {
          title: "다크모드 전환 시 깜빡임 문제 해결",
          tags: ["UX", "Next.js"],
          issue: "페이지 새로고침 시 다크모드 테마가 늦게 적용되어 깜빡이는 현상 발생",
          process: [
            "next-themes 라이브러리 분석",
            "suppressHydrationWarning 옵션 검토",
            "초기 렌더링 프로세스 최적화"
          ],
          solution: "next-themes의 suppressHydrationWarning 적용 및 초기 렌더링 최적화",
          result: "부드러운 테마 전환 구현 및 사용자 경험 개선",
          relatedTech: ["next-themes", "Next.js"]
        }
      ],
      techStacks: [
        {
          name: "Next.js",
          reason: "빠른 페이지 로드와 SEO 최적화를 위해 선택"
        },
        {
          name: "Flask",
          reason: "경량화된 백엔드 서버 구축과 SQLite 연동을 위해 선택"
        }
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
      ]
    },
    tech: ["Next.js", "Tailwind CSS", "Zustand", "Python", "Flask", "MariaDB"],
    links: {
      github: "https://github.com/gr22nist/sqool",
      demo: "https://sqool.kr"
    },
    image: "/images/sqool-thumbnail.svg",
    gallery: [
      "/images/project/sqool-01.png",
      "/images/project/sqool-02.png",
    ],
    performance: {
      desktop: {
        score: 98,
        fcp: 0.3,
        lcp: 0.9,
        cls: 0.068,
        si: 0.7
      }
    }
  },
  {
    id: "myr",
    title: "My력서",
    description: "누구나 간단하게 작성하는 나의 역사, My력서\n안전하고 간편한 온라인 이력서 작성 서비스",
    status: {
      main: "개발 중",
      additional: ["MVP"]
    },
    period: "2024.09 ~ 현재",
    content: {
      overview: "IndexedDB를 활용하여 사용자의 이력서 데이터를 브라우저에 안전하게 저장하고, 실시간 미리보기와 자동 저장 기능을 제공하는 온라인 이력서 작성 서비스입니다.\n\n사용자의 개인정보를 보호하면서도 편리한 이력서 작성 경험을 제공하는 것에 중점을 두었습니다.",
      role: {
        main: "프론트엔드 개발 (개인 프로젝트)",
        tasks: [
          "IndexedDB를 활용한 클라이언트 사이드 데이터 저장 구현",
          "Zustand를 활용한 상태 관리 및 실시간 미리보기 기능 개발",
          "자동 저장, 내보내기/가져오기 시스템 구축",
        ],
        participation: 100
      },
      challenges: [
        {
          title: "개인정보 보호와 사용자 경험",
          tags: ["보안", "UX"],
          issue: "사용자의 민감한 개인정보를 안전하게 보호하는 서버리스 서비스 제공",
          solution: "IndexedDB를 활용하여 모든 데이터를 클라이언트에서 안전하게 저장하고 관리하도록 구현. 데이터 암호화 및 복호화 기능 추가.",
          result: "실시간 자동 저장, 내보내기/가져오기 기능을 구현하여 편의성 및 보안성 강화."
        }
      ],
      troubleShooting: [
        {
          title: "상태 관리 성능 최적화",
          tags: ["성능", "상태관리"],
          issue: "복잡한 상태 관리와 번들 크기로 인한 성능 저하 문제",
          process: [
            "성능 병목 지점 분석",
            "상태 업데이트 로직 검토",
            "동적 임포트 적용 검토"
          ],
          solution: "동적 임포트를 활용하고 상태 업데이트 배치 처리로 렌더링 최적화",
          result: "페이지 로드 시간 30% 감소, 실시간 미리보기 성능 개선",
          relatedTech: ["Zustand", "Dynamic Import"]
        }
      ],
      techStacks: [
        {
          name: "Next.js",
          reason: "클라이언트 사이드 렌더링과 정적 페이지 생성을 위해 선택",
          description: "빠른 초기 로딩과 SEO 최적화를 위한 하이브리드 렌더링 활용"
        },
        {
          name: "IndexedDB",
          reason: "클라이언트 사이드 데이터 저장과 보안을 위해 선택",
          description: "사용자 데이터를 브라우저에 안전하게 저장하고 관리"
        },
        {
          name: "Zustand",
          reason: "경량화된 상태 관리와 높은 성능을 위해 선택",
          description: "실시간 미리보기와 자동 저장을 위한 상태 관리"
        }
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
      ]
    },
    tech: ["Next.js", "Tailwind CSS", "Zustand", "IndexedDB"],
    links: {
      github: "https://github.com/gr22nist/MYR",
      demo: "https://myrec.kr"
    },
    image: "/images/myr-thumbnail.svg",
    gallery: [
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg",
      "/images/project/project1.jpg"
    ],
    performance: undefined
  }
]
