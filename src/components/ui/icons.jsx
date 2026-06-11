const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'square',
  'aria-hidden': true
}

export function ArrowUpRight({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  )
}

export function ArrowDown({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M8 2v11M3.5 9L8 13.5 12.5 9" />
    </svg>
  )
}

export function SunIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <circle cx="8" cy="8" r="3.2" />
      <path d="M8 1v1.8M8 13.2V15M1 8h1.8M13.2 8H15M3 3l1.3 1.3M11.7 11.7L13 13M13 3l-1.3 1.3M4.3 11.7L3 13" />
    </svg>
  )
}

export function MoonIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M13.5 9.5A5.7 5.7 0 1 1 6.5 2.5a4.6 4.6 0 0 0 7 7z" />
    </svg>
  )
}
