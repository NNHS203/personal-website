import { useTheme } from './hooks/useTheme'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { WorkSection } from './components/work/WorkSection'
import { ToolkitSection } from './components/toolkit/ToolkitSection'
import { ProjectsSection } from './components/projects/ProjectsSection'
import { ContactSection } from './components/contact/ContactSection'
import { Footer } from './components/footer/Footer'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <WorkSection />
        <ToolkitSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
