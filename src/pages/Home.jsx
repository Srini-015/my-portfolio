import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>Built from Srinivasan T&apos;s resume with React and Framer Motion.</p>
          <p>Download the resume anytime from the navigation or contact section.</p>
        </div>
      </footer>
    </div>
  )
}
