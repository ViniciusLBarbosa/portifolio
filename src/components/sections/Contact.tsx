'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setStatus('loading')
      
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is missing')
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vinícius',
        }
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const getStatusMessage = () => {
    switch (status) {
      case 'loading':
        return t('contact.sending')
      case 'success':
        return t('contact.success')
      case 'error':
        return t('contact.error')
      default:
        return null
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.subtitle')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('contact.description')}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:vinilimab@gmail.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                vinilimab@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/vinícius-de-lima-barbosa-18b74a210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/ViniciusLBarbosa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 disabled:opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 disabled:opacity-50"
              />
            </div>
            {status !== 'idle' && (
              <div
                className={`text-sm ${
                  status === 'success'
                    ? 'text-green-600 dark:text-green-400'
                    : status === 'error'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {getStatusMessage()}
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 