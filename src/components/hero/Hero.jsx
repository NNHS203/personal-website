import { dossierMeta, heroFacts, marqueeTools, profile } from '../../data/content'
import { ArrowDown, ArrowUpRight } from '../ui/icons'
import { Marquee } from '../ui/Marquee'
import { Reveal } from '../ui/Reveal'
import './hero.css'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <Reveal as="p" className="hero__kicker mono">
          <span className="hero__kicker-name">{profile.name}</span>
          <span className="hero__kicker-sep" aria-hidden="true" />
          <span className="mono-muted">Security portfolio — Purdue ’26</span>
        </Reveal>

        <Reveal as="h1" delay={60} id="hero-heading" className="hero__title serif">
          Cybersecurity &<br />
          <em>digital forensics</em>.
        </Reveal>

        <Reveal delay={120} className="hero__main">
          <p className="hero__lede">
            Incoming Security Risk &amp; Compliance at Texas Instruments. I build security
            operations, risk analytics, and forensics work where the evidence has to hold up.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#work">
              View the field record
              <ArrowDown className="btn__arrow" size={13} />
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <dl className="hero__facts">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="hero__fact">
                <dt className="mono">{fact.label}</dt>
                <dd className="serif">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="aside" delay={200} className="hero__aside" aria-label="Personnel file summary">
          <article className="dossier">
            <header className="dossier__head mono">
              <span>File — HL·26</span>
              <span className="dossier__head-type">Personnel record</span>
            </header>

            <figure className="dossier__figure">
              <img
                src={`${import.meta.env.BASE_URL}hansheng-liu-profile.jpg`}
                alt="Hansheng Liu at Purdue graduation, in gown with gold stole"
                width="640"
                height="800"
                loading="eager"
                fetchpriority="high"
              />
              <span className="dossier__mark dossier__mark--tl" aria-hidden="true" />
              <span className="dossier__mark dossier__mark--br" aria-hidden="true" />
            </figure>

            <dl className="dossier__meta">
              {dossierMeta.map((row) => (
                <div key={row.label} className="dossier__row">
                  <dt className="mono">{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <footer className="dossier__foot">
              <span className="dossier__status mono">
                <span className="status-dot" aria-hidden="true" />
                Status — Active
              </span>
              <a
                className="dossier__link mono"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={11} />
              </a>
            </footer>
          </article>
        </Reveal>
      </div>

      <Reveal delay={260} className="hero__ticker">
        <p className="visually-hidden">Tools: {marqueeTools.join(', ')}</p>
        <Marquee items={marqueeTools} />
      </Reveal>
    </section>
  )
}
