'use client'

import React, { createContext, useContext, useState } from 'react'
import { translations } from './translations'

type Language = 'en' | 'pt'
type TranslationKey = keyof typeof translations.en

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let translation: Record<string, any> = translations[language]
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k]
      } else {
        return key
      }
    }

    return typeof translation === 'string' ? translation : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 