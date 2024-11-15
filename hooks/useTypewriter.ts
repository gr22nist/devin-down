import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const startTyping = () => {
      let currentIndex = 0
      
      const type = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
          timeout = setTimeout(type, speed)
        }
      }
      
      type()
    }

    const initialDelay = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(initialDelay)
    }
  }, [text, speed, delay])

  return displayText
}
