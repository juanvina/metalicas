import { useState } from 'react'

// TODO: reemplazar por el correo real de la empresa antes de publicar.
const CONTACT_EMAIL = 'contacto@metalicasca.com'

const initialValues = { name: '', email: '', phone: '', message: '' }

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // No hay backend configurado todavía: se abre el cliente de correo con el
    // mensaje prellenado. Para producción, reemplazar por una llamada a un
    // servicio como Formspree/EmailJS o a un endpoint propio.
    const subject = encodeURIComponent(`Contacto desde la web - ${values.name}`)
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nTeléfono: ${values.phone}\nEmail: ${values.email}\n\n${values.message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    setValues(initialValues)
    setSent(true)
  }

  return (
    <section id="seccion-contacto" className="border-bottom border-secondary border-2">
      <div id="bg-contacto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true">
          <path
            fill="#1b2a4e"
            fillOpacity="1"
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="border-top border-primary" id="contenedor-formulario">
        <div className="text-center mb-4" id="titulo-formulario">
          <img src="/img/contactenos.png" width="120" height="120" alt="" className="img-fluid" />
          <h2>Contáctanos</h2>
          <p className="fs-5">Escríbenos tus inquietudes</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nombre"
              value={values.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="nombre@ejemplo.com"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Correo electrónico</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Teléfono"
              value={values.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Teléfono</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Mensaje"
              style={{ height: '120px' }}
              value={values.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Mensaje</label>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100 fs-5">
              Enviar Mensaje
            </button>
          </div>

          {sent && (
            <p className="text-success text-center" role="status">
              Se abrió tu cliente de correo con el mensaje listo para enviar.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
