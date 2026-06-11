import { useEffect, useRef } from 'react'
import { profile } from '../../data/content'
import { ArrowUpRight, MoonIcon, SunIcon } from '../ui/icons'
import './header.css'

const navLinks = [
  { number: '01', label: 'Work', href: '#work' },
  { number: '02', label: 'Toolkit', href: '#toolkit' },
  { number: '03', label: 'Projects', href: '#projects' },
  { number: '04', label: 'Contact', href: '#contact' }
]

export function Header({ theme, onToggleTheme }) {
  const progressRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const ratio = max > 0 ? Math.min(doc.scrollTop / max, 1) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand serif">
          Hansheng&nbsp;<em>Liu</em>
        </a>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-header__link mono">
              <span className="site-header__link-num" aria-hidden="true">
                {link.number}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <span className="site-header__status mono" title="Incoming: Texas Instruments, July 2026">
            <span className="status-dot" aria-hidden="true" />
            TI ’26
          </span>
          <button
            type="button"
            className="site-header__toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__cta mono"
          >
            LinkedIn
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
      <span ref={progressRef} className="site-header__progress" aria-hidden="true" />
    </header>
  )
}
