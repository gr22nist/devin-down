"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function LogoIcon({ className }: { className?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <svg 
      width="32" 
      height="34" 
      viewBox="0 0 32 34" 
      className={className}
    >
      <path
        d="M16.7075 0C21.6729 0 25.3065 1.33719 28.0656 4.15485C31.1125 7.3068 32.4931 11.7959 31.8419 16.4761C31.204 21.0608 28.6763 25.5022 24.9022 28.6064C20.9716 31.8061 17.1291 33 10.9223 33H6.33874C2.80561 33 1.40525 32.4269 0.423025 30.5644C-0.0992196 29.5137 -0.136138 28.7496 0.302421 25.5977L2.82745 7.45007C3.33246 3.82055 3.55543 3.24747 4.73749 1.95803C6.01504 0.668596 7.7314 0 10.0709 0H16.7075ZM13.2868 10.1722L11.5193 22.8755C15.2978 22.8278 16.2249 22.6845 17.5992 21.7294C19.382 20.5832 20.7114 18.5774 21.0038 16.4761C21.3294 14.136 20.2638 11.8437 18.2548 10.8408C17.3186 10.3632 16.1038 10.1722 14.194 10.1722H13.2868Z"
        fill={theme === 'dark' ? "url(#paint0_angular_dark)" : "url(#paint0_angular_light)"}
      />
      <defs>
        <radialGradient
          id="paint0_angular_dark"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(34.182 18.8562) rotate(-104.042) scale(23.6131 49.9505)"
        >
          <stop stopColor="#22CFFF" />
          <stop offset="1" stopColor="#A837FF" />
        </radialGradient>
        <radialGradient
          id="paint0_angular_light"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(34.182 18.8562) rotate(-104.042) scale(23.6131 49.9505)"
        >
          <stop stopColor="#00A8D7" />
          <stop offset="1" stopColor="#8B00F5" />
        </radialGradient>
      </defs>
    </svg>
  )
}