export const IMAGE_GUIDELINES = {
  formats: {
    primary: 'webp',
    fallback: 'jpeg'
  },
  quality: 90,
  maxFileSize: 500 * 1024,
  dimensions: {
    desktop: {
      width: 1920,
      height: 1200,
      aspectRatio: '16:10'
    },
    mobile: {
      width: 390,
      height: 844,
      aspectRatio: '9:19.5'
    }
  }
} as const

export const VIEW_TYPES = {
  FULL: 'full',
  FEATURE: 'feature',
  MOBILE: 'mobile',
  TABLET: 'tablet'
} as const

export const getImagePath = (projectId: string, viewType: keyof typeof VIEW_TYPES, index: number) => {
  return `/images/projects/${projectId}/${projectId}_${viewType}_${index}.webp`
} 