import { work } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import './work.css'

export function WorkSection() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeader
          number="01"
          label="Field record"
          title={
            <span id="work-title">
              Operational work,
              <br />
              not just <em>coursework</em>.
            </span>
          }
          lede="Security and data work across risk compliance, public safety, critical infrastructure, environmental intelligence, and digital agriculture."
        />

        <ol className="work-list">
          {work.map((item, index) => (
            <li key={`${item.organization}-${item.period}`}>
              <Reveal as="article" className={`work-row${item.incoming ? ' work-row--incoming' : ''}`}>
                <div className="work-row__id mono" aria-hidden="true">
                  CF-{String(index + 1).padStart(2, '0')}
                </div>

                <div className="work-row__logo">
                  <img
                    src={`${import.meta.env.BASE_URL}${item.logo}`}
                    alt={item.logoAlt}
                    loading="eager"
                    decoding="async"
                    width="104"
                    height="46"
                  />
                </div>

                <div className="work-row__body">
                  <h3 className="work-row__org serif">{item.organization}</h3>
                  <p className="work-row__role mono">
                    {item.role}
                    {item.incoming && (
                      <span className="work-row__badge mono">
                        <span className="status-dot" aria-hidden="true" />
                        Incoming
                      </span>
                    )}
                  </p>
                  <ul className="work-row__points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="work-row__tags mono" aria-label="Skills used">
                    {item.tags.join('  ·  ')}
                  </p>
                </div>

                <div className="work-row__period mono">{item.period}</div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
