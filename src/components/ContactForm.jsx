import { useState } from 'react'
import { IconWhatsApp, IconMail } from './icons.jsx'
import { buildWhatsAppLink, CONTACT_EMAIL } from '../siteConfig.js'
import './ContactForm.css'

const projectTypes = [
  'Estructuras metálicas',
  'Soldadura especializada',
  'Mecanizado / torno',
  'Instalaciones eléctricas',
  'Trabajo con láminas',
  'Reconstrucción de maquinaria',
  'Otro',
]

const initialValues = {
  name: '',
  company: '',
  phone: '',
  email: '',
  projectType: projectTypes[0],
  description: '',
}

function buildMessage(values) {
  return [
    `Solicitud de cotización — ${values.name || 'sin nombre'}`,
    values.company && `Empresa: ${values.company}`,
    values.phone && `Teléfono: ${values.phone}`,
    values.email && `Correo: ${values.email}`,
    `Tipo de proyecto: ${values.projectType}`,
    '',
    values.description || 'Sin descripción adicional.',
  ]
    .filter(Boolean)
    .join('\n')
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [fileName, setFileName] = useState('')
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setSent(false)
  }

  const handleFile = (event) => {
    setFileName(event.target.files?.[0]?.name ?? '')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.open(buildWhatsAppLink(buildMessage(values)), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const subject = encodeURIComponent(`Solicitud de cotización — ${values.name || 'sitio web'}`)
  const body = encodeURIComponent(buildMessage(values))
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

  return (
    <section id="contacto" className="contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">08 — Contacto</p>
          <h2 className="contact__title">Solicitar cotización</h2>
          <p className="contact__paragraph">
            Cuéntanos qué necesitas fabricar, instalar o reparar. Te respondemos directamente para definir alcance,
            planos o fotografías si el proyecto lo requiere.
          </p>

          <div className="contact__direct">
            <a
              className="contact__direct-link"
              href={buildWhatsAppLink('Hola, quiero solicitar una cotización.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp width={20} height={20} /> Escribir por WhatsApp
            </a>
            <a className="contact__direct-link" href={`mailto:${CONTACT_EMAIL}`}>
              <IconMail width={20} height={20} /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <label>
              Nombre
              <input type="text" name="name" value={values.name} onChange={handleChange} required />
            </label>
            <label>
              Empresa (opcional)
              <input type="text" name="company" value={values.company} onChange={handleChange} />
            </label>
          </div>

          <div className="contact__row">
            <label>
              Teléfono / WhatsApp
              <input type="tel" name="phone" value={values.phone} onChange={handleChange} required />
            </label>
            <label>
              Correo electrónico
              <input type="email" name="email" value={values.email} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Tipo de proyecto
            <select name="projectType" value={values.projectType} onChange={handleChange}>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Descripción del proyecto
            <textarea name="description" value={values.description} onChange={handleChange} rows={4} required />
          </label>

          <label className="contact__file">
            Adjuntar archivo (planos, fotos, medidas)
            <input type="file" onChange={handleFile} accept="image/*,.pdf" />
            {fileName && <span className="contact__file-name">{fileName}</span>}
            <span className="contact__file-note">
              Este formulario todavía no envía archivos adjuntos: al escribirte por WhatsApp o correo te los
              pedimos directamente.
            </span>
          </label>

          <button type="submit" className="btn btn--primary contact__submit">
            <IconWhatsApp width={18} height={18} /> Enviar solicitud por WhatsApp
          </button>

          <a className="contact__mail-fallback" href={mailtoHref}>
            Prefiero escribir por correo
          </a>

          {sent && (
            <p className="contact__sent" role="status">
              Se abrió WhatsApp con tu mensaje listo para enviar.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
