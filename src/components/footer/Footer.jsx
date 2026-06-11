import { profile } from '../../data/content'
import './footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner mono">
        <span>© 2026 {profile.name}</span>
        <span className="site-footer__tag">Cybersecurity &amp; Digital Criminology — Purdue ’26</span>
        <span className="site-footer__updated">File last updated 06 / 2026</span>
      </div>
    </footer>
  )
}
