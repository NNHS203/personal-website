import './marquee.css'

export function Marquee({ items }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((tool, index) => (
          <span
            key={`${tool}-${index}`}
            className={`marquee__item mono${index >= items.length ? ' marquee__item--dupe' : ''}`}
          >
            {tool}
            <span className="marquee__sep">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
