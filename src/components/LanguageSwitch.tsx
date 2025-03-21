'use client'

import { useLanguage } from '@/i18n/LanguageContext'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="fixed top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  )
} 