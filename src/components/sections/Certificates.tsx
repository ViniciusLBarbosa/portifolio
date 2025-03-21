'use client'

import { useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'

type Certificate = {
  title: string
  institution: string
  date: string
  description: string
  link?: string
}

const certificates: Certificate[] = [
  {
    title: 'Java: applying Object Orientation',
    institution: 'Alura',
    date: 'March 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/java-aplicando-orientacao-objetos/certificate?lang=en'
  },
  {
    title: 'Java: creating your first application',
    institution: 'Alura',
    date: 'March 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/java-criando-primeira-aplicacao/certificate?lang=en'
  },
  {
    title: 'Go: Object Oriented',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/go-lang-oo/certificate?lang=en'
  },
  {
    title: 'HTTP: understanding the web under the hood',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/http-entendendo-web-por-baixo-dos-panos/certificate?lang=en'
  },
  {
    title: 'Go: the proggraming language of Google',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/golang/certificate?lang=en'
  },
  {
    title: 'Python: advancing Object Orientation and consuming API',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/python-avance-orientacao-objetos-consuma-api/certificate?lang=en'
  },
  {
    title: 'Python: applying Object Orientation',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/python-aplicando-orientacao-objetos/certificate?lang=en'
  },
  {
    title: 'Python: creating your first application',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/python-crie-sua-primeira-aplicacao/certificate?lang=en'
  },
  {
    title: 'Starting in Programming: career and first steps',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/comecando-programacao-carreira-primeiros-passos/certificate?lang=en'
  },
  {
    title: 'Programming logic: practicing with challenges',
    institution: 'Alura',
    date: 'February 2025',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/logica-programacao-praticando-desafios/certificate?lang=en'
  },
  {
    title: 'JavaScript: Programming Object Oriented',
    institution: 'Alura',
    date: 'December 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/javascritpt-orientacao-objetos/certificate?lang=en'
  },
  {
    title: 'JavaScript: Exploring the Language',
    institution: 'Alura',
    date: 'November 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/javascript-introducao/certificate?lang=en'
  },
  {
    title: 'Git and GitHub: sharing and collaborating on projects',
    institution: 'Alura',
    date: 'October 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/git-github-compartilhando-colaborando-projetos/certificate?lang=en'
  },
  {
    title: 'Programming logic: explore functions and lists',
    institution: 'Alura',
    date: 'October 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/logica-programacao-funcoes-listas/certificate?lang=en'
  },
  {
    title: 'React: developing in React Router with JavaScript',
    institution: 'Alura',
    date: 'October 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/React-desenvolvendo-react-router-javaScript/certificate?lang=en'
  },
  {
    title: 'React: how components work',
    institution: 'Alura',
    date: 'August 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/react-componentes-funcionam/certificate?lang=en'
  },
  {
    title: 'React: start your full stack project',
    institution: 'Alura',
    date: 'June 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/react-crie-primeira-pagina-web/certificate?lang=en'
  },
  {
    title: 'Programming logic: dive into programming with JavaScript',
    institution: 'Alura',
    date: 'June 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/logica-programacao-mergulhe-programacao-javascript/certificate?lang=en'
  },
  {
    title: 'HTML and CSS: mobile-first responsiveness',
    institution: 'Alura',
    date: 'May 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/html-css-responsividade-mobile-first/certificate?lang=en'
  },
  {
    title: 'HTML and CSS: Practicing HTML/CSS',
    institution: 'Alura',
    date: 'April 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/html-css-praticando-html-css/certificate?lang=en'
  },
  {
    title: 'HTML and CSS: working with responsiveness and publishing projects',
    institution: 'Alura',
    date: 'April 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/html-css-responsividade-publicacao-projetos/certificate?lang=en'
  },
  {
    title: 'JavaScript: manipulating elements in the DOM',
    institution: 'Alura',
    date: 'March 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/javascript-manipulando-elementos-dom/certificate?lang=en'
  },
  {
    title: 'HTML and CSS: header, footer and CSS variables',
    institution: 'Alura',
    date: 'March 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/html-css-cabecalho-footer-variaveis-css/certificate?lang=en'
  },
  {
    title: 'HTML and CSS: Classes, positioning and Flexbox',
    institution: 'Alura',
    date: 'February 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/html-css-classes-posicionamento-flexbox/certificate?lang=en'
  },
  {
    title: 'JavaScript for the Web: Create Dynamic Pages',
    institution: 'Alura',
    date: 'February 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/javascript-web-paginas-dinamicas/certificate?lang=en'
  },
  {
    title: 'HTML and CSS: development environments, file structure and tags',
    institution: 'Alura',
    date: 'February 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/html-css-ambiente-arquivos-tags/certificate?lang=en'
  },
  {
    title: 'React: Developing with JavaScript',
    institution: 'Alura',
    date: 'February 2024',
    description: '',
    link: 'https://cursos.alura.com.br/user/vinilimab/course/react-desenvolvendo-javascript/certificate?lang=en'
  },
  // Add more certificates here
]

export default function Certificates() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3)

  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('certificates.title')}</h2>
        <div className="space-y-6">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {cert.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {cert.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors whitespace-nowrap"
                  >
                    {t('certificates.viewCertificate')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {certificates.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              {showAll ? t('certificates.showLess') : t('certificates.showMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 