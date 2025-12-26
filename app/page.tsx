import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Courses from '@/components/sections/Courses'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Education />
      <Courses />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
