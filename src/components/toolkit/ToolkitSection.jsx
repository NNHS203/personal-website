import { tracks } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import './toolkit.css'

export function ToolkitSection() {
  return (
    <section id="toolkit" className="section" aria-labelledby="toolkit-title">
      <div className="container">
        <SectionHeader
          number="02"
          label="Capabilities"
          title={
            <span id="toolkit-title">
              A working toolkit,
              <br />
              not a <em>transcript</em>.
            </span>
          }
          lede="Six tracks spanning detection, offensive security, forensics, infrastructure, data, and delivery — skill-first instead of course names."
        />

        <div className="cap-grid">
          {tracks.map((track, index) => (
            <Reveal as="article" key={track.title} delay={(index % 3) * 90} className="cap-cell">
              <p className="cap-cell__num mono">C·{String(index + 1).padStart(2, '0')}</p>
              <h3 className="cap-cell__title serif">{track.title}</h3>
              <p className="cap-cell__focus">{track.focus}</p>
              <p className="cap-cell__tools mono">{track.tools.join('  ·  ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
