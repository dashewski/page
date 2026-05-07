import { useState, useEffect, startTransition } from 'react'
import { Lang } from '@/types'

export function useLang() {
  const [lang, setLangState] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    startTransition(() => {
      const saved = localStorage.getItem('lang') as Lang
      if (saved === 'en' || saved === 'ru') {
        setLangState(saved)
      } else {
        const deviceLang = navigator.language.toLowerCase()
        if (deviceLang.startsWith('ru')) setLangState('ru')
      }
      setMounted(true)
    })
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return { lang, setLang, mounted }
}