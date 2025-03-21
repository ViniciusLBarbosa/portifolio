'use client'

import { useLanguage } from '@/i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('about.whoIAm')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {t('about.description2')}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('about.skills')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">{t('about.frontend')}</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>React.js</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">{t('about.backend')}</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Java</li>
                  <li>GoLang</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 