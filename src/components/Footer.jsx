import { NAV_LINKS } from '../siteConfig.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span>ESTRUCTURAS METÁLICAS C.A.</span>
          <span className="footer__tag">Ibagué · Tolima · Colombia</span>
        </div>

        <nav className="footer__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href="#" aria-label="Facebook">
            FB
          </a>
          <a href="#" aria-label="Instagram">
            IG
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Estructuras Metálicas C.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
