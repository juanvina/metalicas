// TODO: reemplazar estos datos de contacto por los reales de la empresa antes de publicar el sitio.
export const WHATSAPP_NUMBER = '573000000000'
export const CONTACT_EMAIL = 'contacto@metalicasca.com'
export const CONTACT_PHONE_DISPLAY = '+57 300 000 0000'

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
]
