import localFont from 'next/font/local'

export const suit = localFont({
  src: '../public/fonts/SUIT-Variable.woff2',
  variable: '--font-suit',
  display: 'block',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})
