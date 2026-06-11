import { projects } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import './projects.css'

export function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          number="03"
          label="Selected builds"
          title={
            <span id="projects-title">
              Builds with
              <br />
              security <em>instincts</em>.
            </span>
          }
          lede="Product thinking, backend integration, and awareness campaigns grounded in practical delivery."
        />

        <div className="proj-grid">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.name}
              delay={(index % 3) * 90}
              className={`proj-cell${index === 0 ? ' proj-cell--featured' : ''}`}
            >
              <div className="proj-cell__top mono">
                <span className="proj-cell__num">B·{String(index + 1).padStart(2, '0')}</span>
                <span className="proj-cell__type">{project.type}</span>
              </div>
              <h3 className="proj-cell__name serif">{project.name}</h3>
              <p className="proj-cell__summary">{project.summary}</p>
              <p className="proj-cell__stack mono">{project.stack.join('  ·  ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
