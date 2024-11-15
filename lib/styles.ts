export const shadowStyles = {
  card: {
    base: "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.07)]",
    hover: "hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]",
    full: "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.07)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
  }
} as const 

export const zIndexLayers = {
  background: -10,
  content: 10,
  navigation: 100,
  header: 40,
  modal: 200
} as const 