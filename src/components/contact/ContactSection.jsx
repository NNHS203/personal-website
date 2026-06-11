import { profile } from '../../data/content'
import { ArrowUpRight } from '../ui/icons'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import './contact.css'

export function ContactSection() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          inverse
          number="04"
          label="Transmission"
          title={<span id="contact-title">Open a line.</span>}
          lede="Most interested in security operations, risk analytics, vulnerability analysis, digital forensics, cybercrime investigation, and data-driven public-sector security work."
        />

        <Reveal>
          <a className="contact__mail serif" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight className="contact__mail-arrow" size={28} />
          </a>
        </Reveal>

        <Reveal as="ul" delay={120} className="contact__links">
          <li>
            <a
              className="contact__link mono"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={11} />
            </a>
          </li>
          <li className="contact__link-meta mono">Base — {profile.location}</li>
          <li className="contact__link-meta mono">
            Next — {profile.nextOrg}, {profile.nextDate}
          </li>
        </Reveal>
      </div>
    </section>
  )
}
