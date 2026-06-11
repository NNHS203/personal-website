import { Reveal } from './Reveal'
import './section-header.css'

export function SectionHeader({ number, label, title, lede, inverse = false }) {
  return (
    <Reveal as="header" className={`section-header${inverse ? ' section-header--inverse' : ''}`}>
      <span className="section-header__watermark serif" aria-hidden="true">
        {number}
      </span>
      <div className="section-header__meta">
        <span className="section-header__num serif" aria-hidden="true">
          {number}
        </span>
        <span className="section-header__label mono">{label}</span>
        <span className="section-header__file mono" aria-hidden="true">
          File {number} / 04
        </span>
      </div>
      <h2 className="section-header__title serif">{title}</h2>
      {lede && <p className="section-header__lede">{lede}</p>}
    </Reveal>
  )
}
