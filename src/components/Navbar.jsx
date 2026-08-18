import { useState } from 'react'

const links = [
  { href: '#introduccion', label: 'Inicio' },
  { href: '#servicios', label: 'Productos' },
  { href: '#seccion-contacto', label: 'Contáctenos' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3" id="menu">
      <div className="container-fluid">
        <a className="navbar-brand text-primary fs-5 fw-bold" href="#introduccion">
          Nosotros
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Mostrar u ocultar navegación"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
