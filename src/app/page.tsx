import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  )
}
