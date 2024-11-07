import type { WithContext, Person } from 'schema-dts'

const structuredData: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "DEVIN",
  jobTitle: "프론트엔드 개발자",
  url: "https://your-domain.com",
  sameAs: [
    "https://github.com/devin-down"
  ],
  knowsAbout: [
    "프론트엔드 개발",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX 디자인"
  ],
  description: "프론트엔드 개발자 DEVIN의 포트폴리오입니다.",
  email: "mailto:gr22nist@gmail.com",
  nationality: "KR",
}

export default function StructuredData() {
  const safeJsonLd = JSON.stringify(structuredData)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/'/g, '\\u0027')
    .replace(/"/g, '\\u0022')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      key="jsonld"
    />
  )
}