'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    title: 'FF Logs Discord Bot',
    description: 'Discord bot that fetches player data from FF Logs and displays it in embeds in a specific Discord channel.',
    image: '/imagemProjetos.png',
    technologies: ['Go'],
    link: 'https://github.com/ViniciusLBarbosa/fflogs-bot',
    github: 'https://github.com/ViniciusLBarbosa/fflogs-bot'
  },
  {
    title: 'Sabor Express',
    description: 'Simple python project that simulates a restaurant app, where you can register, list, and activate restaurants.',
    image: '/imagemProjetos.png',
    technologies: ['Python'],
    link: 'https://github.com/ViniciusLBarbosa/sabor-express',
    github: 'https://github.com/ViniciusLBarbosa/sabor-express'
  },
  {
    title: 'FFXIV Discord BOT',
    description: 'Discord bot that registers users, using Lodestone as a verification and registration method.',
    image: '/imagemProjetos.png',
    technologies: ['Python'],
    link: 'https://github.com/ViniciusLBarbosa/bot_registro_FFXIV',
    github: 'https://github.com/ViniciusLBarbosa/bot_registro_FFXIV'
  },
  {
    title: 'Website Monitor',
    description: 'Website monitor developed in Golang. Checks if websites are online.',
    image: '/imagemProjetos.png',
    technologies: ['GoLang'],
    link: 'https://github.com/ViniciusLBarbosa/monitorador-sites',
    github: 'https://github.com/ViniciusLBarbosa/monitorador-sites'
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-blue-600/20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    {t('projects.viewProject')}
                  </a>
                  <button
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 text-center border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded transition-colors"
                  >
                    {t('projects.github')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAll ? t('projects.showLess') : t('projects.showMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 