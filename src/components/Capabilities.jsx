import useReveal from '../hooks/useReveal.js'
import { IconLathe, IconElectric, IconPlate, IconGear, IconCamera } from './icons.jsx'
import './Capabilities.css'

const capabilities = [
  {
    number: '01',
    title: 'Estructuras metálicas',
    description:
      'Diseño y fabricación de estructuras, cerramientos, cubiertas y elementos metálicos a la medida del proyecto.',
    image: '/img/ca2.jpg',
    imageAlt: 'Cerca metálica fabricada e instalada por Estructuras Metálicas C.A.',
    size: 'large',
  },
  {
    number: '02',
    title: 'Soldadura especializada',
    description:
      'Soldadura general y procesos especiales: aluminio, bronce y uniones que exigen control fino del calor.',
    image: '/img/ca1.jpg',
    imageAlt: 'Estructura metálica soldada para cerramiento de cancha deportiva',
    size: 'large',
  },
  {
    number: '03',
    title: 'Mecanizado / torno',
    description: 'Piezas torneadas y mecanizadas a medida para maquinaria y equipos industriales.',
    Icon: IconLathe,
    size: 'compact',
  },
  {
    number: '04',
    title: 'Instalaciones eléctricas',
    description: 'Montaje y mantenimiento de instalaciones eléctricas industriales y residenciales.',
    Icon: IconElectric,
    size: 'compact',
  },
  {
    number: '05',
    title: 'Trabajo con láminas',
    description: 'Corte, doblado y conformado de láminas metálicas para piezas y estructuras.',
    Icon: IconPlate,
    size: 'compact',
  },
  {
    number: '06',
    title: 'Reconstrucción de maquinaria',
    description: 'Recuperación y reconstrucción de maquinaria pesada para extender su vida útil.',
    Icon: IconGear,
    size: 'compact',
  },
]

function LargeCard({ item, index }) {
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`capability-card capability-card--large reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="capability-card__media">
        <img src={item.image} alt={item.imageAlt} loading="lazy" />
      </div>
      <div className="capability-card__body">
        <span className="section-number">{item.number}</span>
        <h3 className="capability-card__title">{item.title}</h3>
        <p className="capability-card__desc">{item.description}</p>
      </div>
    </article>
  )
}

function CompactRow({ item, index }) {
  const [ref, visible] = useReveal()
  const Icon = item.Icon

  return (
    <article
      ref={ref}
      className={`capability-row reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="section-number capability-row__number">{item.number}</span>
      <span className="capability-row__icon">
        <Icon width={22} height={22} />
      </span>
      <div className="capability-row__text">
        <h3 className="capability-row__title">{item.title}</h3>
        <p className="capability-row__desc">{item.description}</p>
      </div>
      <div className="capability-row__placeholder placeholder-frame">
        <IconCamera width={20} height={20} />
        <span className="placeholder-frame__label">Foto próximamente</span>
      </div>
    </article>
  )
}

function Capabilities() {
  const large = capabilities.filter((item) => item.size === 'large')
  const compact = capabilities.filter((item) => item.size === 'compact')

  return (
    <section id="servicios" className="capabilities">
      <div className="container">
        <p className="eyebrow">02 — Capacidades</p>
        <h2 className="capabilities__title">
          No solo fabricamos metal.
          <br />
          Resolvemos problemas industriales.
        </h2>

        <div className="capabilities__large-grid">
          {large.map((item, index) => (
            <LargeCard item={item} index={index} key={item.number} />
          ))}
        </div>

        <div className="capabilities__compact-list">
          {compact.map((item, index) => (
            <CompactRow item={item} index={index} key={item.number} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
