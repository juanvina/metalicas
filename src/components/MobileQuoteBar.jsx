import { IconWhatsApp } from './icons.jsx'
import { buildWhatsAppLink } from '../siteConfig.js'
import './MobileQuoteBar.css'

function MobileQuoteBar() {
  return (
    <a
      className="mobile-quote-bar"
      href={buildWhatsAppLink('Hola, quiero solicitar una cotización.')}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWhatsApp width={20} height={20} />
      Cotizar por WhatsApp
    </a>
  )
}

export default MobileQuoteBar
