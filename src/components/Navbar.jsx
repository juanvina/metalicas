import { useEffect, useState } from 'react'
import { IconMenu, IconClose } from './icons.jsx'
import { NAV_LINKS } from '../siteConfig.js'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={close}>
          <span className="navbar__brand-main">ESTRUCTURAS METÁLICAS</span>
          <span className="navbar__brand-suffix">C.A.</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--primary navbar__cta" onClick={close}>
            Solicitar cotización
          </a>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
