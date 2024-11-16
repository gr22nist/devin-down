import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "DEVIN DOWN",
    description: [
      "Next.js, TypeScript로 만든 포트폴리오",
      "편안한 UX와 성능 최적화 프론트엔드 프로젝트"
    ],
    status: {
      main: "운영 중",
      additional: ["버전 1.0"]
    },
    period: "2024.11 ~",
    content: {
      overview: "Next.js App Router와 TypeScript를 기반의 포트폴리오 웹사이트입니다. 성능 최적화와 접근성을 고려한 UI/UX 설계에 중점을 두었습니다.\n\n프로젝트별 상세 페이지에서는 동적 임포트와 Suspense를 활용한 점진적 로딩으로 초기 로딩 속도를 개선했고, 반응형 레이아웃과 다크모드로 다양한 사용 환경을 지원합니다.",
      role: {
        main: "프론트엔드 개발 (개인 프로젝트)",
        tasks: [
          "Next.js App Router 기반 프로젝트 구조 설계",
          "성능 최적화 (동적 임포트, Suspense, 이미지 최적화)",
          "Framer Motion 활용한 인터랙션 구현",
          "반응형 레이아웃 및 다크모드 구현",
          "접근성과 SEO 최적화"
        ],
        participation: 100
      },
      challenges: [
        {
          title: "프로젝트 상세 페이지 성능 최적화",
          tags: ["성능", "Next.js"],
          issue: "프로젝트 상세 페이지의 큰 번들 크기로 인한 초기 로딩 지연",
          solution: [
            "dynamic import로 컴포넌트 분할 로딩",
            "Suspense boundary 설정으로 점진적 로딩",
            "next/image로 이미지 최적화",
            "스켈레톤 UI로 로딩 UX 개선"
          ],
          result: "Lighthouse 성능 점수 98점 달성, LCP 1.0초 이내 로딩"
        },
        {
          title: "접근성과 SEO 최적화",
          tags: ["접근성", "SEO"],
          issue: "스크린리더 지원 미흡과 검색엔진 최적화 필요",
          solution: [
            "시맨틱 HTML 구조 개선",
            "ARIA 레이블 및 랜드마크 적용",
            "구조화 된 메타 데이터와 최적화",
          ],
          result: "PSI 접근성, SEO 100점 달성"
        }
      ],
      troubleShooting: [
        {
          title: "다크모드 전환 시 깜빡임 현상",
          tags: ["UI/UX", "Next.js"],
          issue: "페이지 초기 로드 시 라이트 모드가 잠깐 보였다가 다크모드로 전환되는 깜빡임 현상 발생",
          process: [
            "next-themes 문서 확인",
            "HTML class 적용 시점 분석",
            "다크모드 전환 프로세스 디버깅"
          ],
          solution: [
            "<html> 태그에 suppressHydrationWarning 속성 추가",
            "tailwind.config에 darkMode: 'class' 설정",
            "ThemeProvider로 애플리케이션 래핑"
          ],
          result: "페이지 초기 로드 시 발생하는 테마 깜빡임 현상 제거",
          relatedTech: ["next-themes", "Tailwind CSS"]
        },
        {
          title: "프로젝트 데이터 관리 개선",
          tags: ["TypeScript", "데이터구조"],
          issue: "프로젝트 데이터 타입 정의 부족으로 인한 유지보수 어려움",
          process: [
            "기존 데이터 구조 분석",
            "필요한 타입 정의 식별",
            "인터페이스 설계"
          ],
          solution: [
            "명확한 타입 인터페이스 정의와 타입 안정성 확보를 위한 타입 시스템 구축",
            "데이터 정규화 전략 수립"
          ],
          result: "코드 품질 향상 및 유지보수 편의성 증가",
          relatedTech: ["TypeScript", "Next.js"]
        }
      ],
      techStacks: [
        {
          name: "Next.js",
          reason: "App Router & SSR",
          description: "App Router를 활용한 페이지 구조화 및 동적 라우팅 구현"
        },
        {
          name: "TypeScript",
          reason: "코드 안정성 & 데이터 타입 정의",
          description: "인터페이스를 활용한 프로젝트 데이터 타입 정의"
        },
        {
          name: "Tailwind CSS",
          reason: "빠른 UI 개발 & 다크모드 구현",
          description: "유틸리티 클래스를 활용한 반응형 레이아웃"
        },
      ],
      features: [
        {
          title: "반응형 레이아웃",
          description: "모바일, 태블릿, 데스크톱 화면 크기별 최적화",
          tags: ["UI/UX", "반응형"]
        },
        {
          title: "다크모드",
          description: "next-themes를 활용한 라이트/다크 모드 전환",
          tags: ["UI/UX", "테마"]
        },
        {
          title: "스크롤 인터랙션",
          description: "스크롤 프로그레스바와 탑 버튼 구현",
          tags: ["UI/UX", "인터랙션"]
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
      demo: "https://devin.myrec.kr"
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
        fcp: 0.2,
        lcp: 1.0,
        tbt: 10,
        cls: 0.006,
        si: 1.2
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
    period: "2024.07 ~ 2024.08",
    content: {
      overview: "SQL 입문자가 편리하게 사용할 수 있는 웹 에디터 기반 SQLite 학습 서비스입니다.\n한글 데이터베이스를 활용하여 학습 진입 장벽을 낮추고, 재미있는 학습을 제공합니다.",
      role: {
        main: "프론트엔드 개발 (4인 팀 프로젝트)",
        tasks: [
          "SQLite 학습을 위한 직관적인 UI/UX 구현",
          "웹 에디터 기반 SQLite 학습 기능 구현",
          "후속 작업으로 자료 및 반응형 레이아웃, 샘플 DB 추가"
        ],
        participation: 50
      },
      challenges: [
        {
          title: "SQL 학습 진입 장벽 낮추기",
          tags: ["UX", "교육"],
          issue: "SQL 초보자들이 겪는 설치와 환경설정의 어려움",
          solution: [
            "웹 기반 SQLite 에디터로 설치 과정 제거",
            "K-문화 테마의 한글 데이터로 친숙성 확보",
            "문서와 에디터를 같은 화면에 배치하여 학습 효율 향상"
          ],
          result: "설치 없이 바로 시작하는 SQL 학습 경험 제공"
        },
        {
          title: "하이브리드 레이아웃 구현",
          tags: ["UI/UX", "반응형"],
          issue: "디바이스별로 다른 학습 경험 최적화 필요",
          solution: [
            "모바일에서는 문서와 에디터를 세로로 배치",
            "데스크톱에서는 좌우 분할 레이아웃 적용",
            "Next.js Image와 Font 최적화로 CLS 개선"
          ],
          result: "디바이스 특성에 맞는 최적화된 학습 경험 제공"
        },
        {
          title: "성능과 보안 최적화",
          tags: ["성능", "보안"],
          issue: "에디터 번들 크기와 XSS 취약점 위험",
          solution: [
            "CodeMirror 동적 임포트로 초기 로딩 최적화",
            "DOMPurify로 마크다운 콘텐츠 소독",
            "Next.js CSP로 리소스 보안 강화"
          ],
          result: "Lighthouse 성능 점수 98점 및 안전한 콘텐츠 제공"
        }
      ],
      troubleShooting: [
        {
          title: "반응형 레이아웃 최적화",
          tags: ["UI/UX", "레이아웃"],
          issue: "모바일과 데스크톱에서 문서와 에디터의 레이아웃 구조가 달라야 하는 문제",
          process: [
            "useStore로 전역 상태에서 화면 크기 관리",
            "브레이크포인트별 레이아웃 분석",
            "컴포넌트 재사용성 검토"
          ],
          solution: [
            "totalOffset 값을 활용한 동적 높이 계산",
            "isMobile 상태에 따른 조건부 레이아웃 렌더링",
            "CSS Grid와 Flexbox 조합으로 유연한 레이아웃 구현"
          ],
          result: "디바이스별 최적화된 학습 경험 제공",
          relatedTech: ["Tailwind CSS", "Zustand"]
        },
        {
          title: "SQL 에디터 재사용성 개선",
          tags: ["성능", "아키텍처"],
          issue: "시작 페이지와 에디터 페이지에서 동일한 에디터 컴포넌트 사용 시 불필요한 기능 로드",
          process: [
            "에디터 컴포넌트 분석",
            "공통 기능과 페이지별 기능 분리",
            "동적 임포트 전략 수립"
          ],
          solution: [
            "isEditorPage prop으로 기능 분기 처리",
            "dynamic import로 에디터 지연 로딩",
            "LoadingEditor 컴포넌트로 로딩 UX 개선"
          ],
          result: "페이지별 최적화된 에디터 로딩과 사용성 향상",
          relatedTech: ["Next.js", "CodeMirror"]
        },
        {
          title: "마크다운 콘텐츠 보안 강화",
          tags: ["보안", "XSS"],
          issue: "사용자 생성 마크다운 콘텐츠의 XSS 취약점 위험",
          process: [
            "마크다운 파싱 프로세스 분석",
            "DOMPurify 설정 검토",
            "허용할 HTML 태그와 속성 정의"
          ],
          solution: [
            "DOMPurify로 HTML 콘텐츠 sanitize",
            "허용된 태그와 속성만 필터링하여 렌더링"
          ],
          result: "안전한 마크다운 렌더링과 XSS 공격 방지",
          relatedTech: ["DOMPurify"]
        }
      ],
      techStacks: [
        {
          name: "Next.js",
          reason: "빠른 페이지 로드와 SEO 최적화",
          description: "App Router, Image/Font 최적화, CSP 설정 활용"
        },
        {
          name: "CodeMirror",
          reason: "SQL 에디터 구현",
          description: "구문 강조, 자동완성, 실시간 문법 검사 기능 제공"
        },
        {
          name: "Tailwind CSS",
          reason: "반응형 UI 개발",
          description: "다크모드와 반응형 레이아웃 구현에 활용"
        },
        {
          name: "Zustand",
          reason: "상태 관리",
          description: "경량화된 전역 상태 관리로 레이아웃 상태 제어"
        },
      ],
      features: [
        {
          title: "하이브리드 레이아웃",
          description: "디바이스 크기에 따라 최적화된 문서-에디터 레이아웃 제공",
          tags: ["UI/UX", "반응형"]
        },
        {
          title: "한글 데이터베이스",
          description: [
            "K-POP 아티스트 데이터베이스",
            "한국 영화 데이터베이스",
            "데이터베이스 파일 다운로드 기능"
          ],
          tags: ["데이터", "K-문화"]
        },
        {
          title: "최적화된 학습 경험",
          description: [
            "문서와 에디터 통합 인터페이스",
            "디바이스별 최적화된 레이아웃",
            "연습 문제 복사 및 실행 기능"
          ],
          tags: ["UX", "교육"]
        },
        {
          title: "안전한 콘텐츠 렌더링",
          description: "DOMPurify를 활용한 마크다운 콘텐츠 보안 처리",
          tags: ["보안", "마크다운"]
        }
      ]
    },
    tech: ["Next.js", "Tailwind CSS", "Zustand", "Python", "Flask", "SQLite"],
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
        tbt: 0,
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
          title: "클라이언트 사이드 데이터 보안",
          tags: ["보안", "아키텍처"],
          issue: "민감한 개인정보 보호와 데이터 유출 방지",
          process: [
            "IndexedDB를 활용한 로컬 저장소 구현",
            "AES-256 암호화 적용",
            "데이터 복호화 로직 최적화"
          ],
          solution: [
            "민감 정보 암호화 저장",
            "섹션별 데이터 분리 저장",
            "에러 복구 메커니즘 구현"
          ],
          result: "서버 없이 안전한 데이터 관리 구현"
        },
        {
          title: "동적 섹션 관리",
          tags: ["UX", "상태관리"],
          issue: "복잡한 이력서 섹션의 실시간 상태 관리",
          process: [
            "섹션 CRUD 로직 분석",
            "상태 업데이트 최적화",
            "드래그 앤 드롭 구현"
          ],
          solution: [
            "useCallback으로 핸들러 최적화",
            "uuid를 도입하여 섹션 오더 관리",
            "실시간 미리보기 연동"
          ],
          result: "섹션 순서 관리 및 실시간 미리보기 연동"
        },
        {
          title: "데이터 이식성",
          tags: ["기능", "UX"],
          issue: "브라우저 간 데이터 이동과 백업 필요",
          process: [
            "데이터 구조 분석",
            "임포트/엑스포트 로직 설계",
            "에러 처리 구현"
          ],
          solution: [
            "JSON 기반 데이터 직렬화",
            "섹션 순서 보존",
            "데이터 검증 로직 추가"
          ],
          result: "안정적인 데이터 이식 기능 구현"
        }
      ],
      techStacks: [
        {
          name: "Next.js",
          reason: "클라이언트 사이드 최적화",
          description: "App Router, Image/Font 최적화, CSP 설정 활용"
        },
        {
          name: "IndexedDB",
          reason: "클라이언트 사이드 데이터 저장",
          description: "Dexie.js로 추상화된 안전한 데이터 관리"
        },
        {
          name: "crypto-js",
          reason: "데이터 보안",
          description: "AES-256 암호화로 로컬 데이터 보호"
        },
        {
          name: "@dnd-kit",
          reason: "섹션 관리",
          description: "드래그 앤 드롭 기반 섹션 정렬 구현"
        },
        {
          name: "Zustand",
          reason: "상태 관리",
          description: "경량화된 전역 상태 관리로 섹션 상태 제어"
        }
      ],
      features: [
        {
          title: "Next.js 최적화",
          description: [
            "App Router와 서버 컴포넌트 활용",
            "Image/Font 자동 최적화",
            "CSP 기반 리소스 보안"
          ],
          tags: ["성능", "Next.js"]
        },
        {
          title: "보안 중심 설계",
          description: [
            "서버리스 아키텍처로 데이터 유출 방지",
            "AES-256 암호화로 로컬 데이터 보호",
            "안전한 IndexedDB 저장소 활용"
          ],
          tags: ["보안", "아키텍처"]
        },
        {
          title: "섹션 관리 시스템",
          description: [
            "드래그 앤 드롭 기반 섹션 정렬",
            "커스텀 섹션 생성 지원",
            "실시간 자동 저장"
          ],
          tags: ["UX", "기능"]
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
