'use client'

import Image from 'next/image'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-8 py-16">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('hero.greeting')}
          <span className="text-blue-600 dark:text-blue-400"> Vinícius Lima</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {t('hero.role')}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {t('hero.contact')}
          </a>
          <a
            href="#projects"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg transition-colors"
          >
            {t('hero.viewProjects')}
          </a>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
          <Image
            src="https://avatars.githubusercontent.com/u/159471546?v=4"
            alt="Profile picture"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
} 