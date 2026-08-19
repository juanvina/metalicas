import useReveal from '../hooks/useReveal.js'
import './Trust.css'

const pillars = [
  { title: 'Experiencia', text: 'Experiencia aplicada a proyectos industriales reales.' },
  { title: 'Capacidad de fabricación', text: 'Taller equipado para fabricar, soldar y mecanizar a la medida.' },
  { title: 'Precisión', text: 'Cada pieza fabricada bajo medida y con control de calidad.' },
  { title: 'Seguridad', text: 'Procesos de trabajo pensados para proteger al equipo y al cliente.' },
  { title: 'Respuesta', text: 'Atención directa para resolver lo que tu proyecto necesita.' },
]

function Pillar({ pillar, index }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`trust-pillar reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: `${index * 70}ms` }}>
      <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="trust-pillar__title">{pillar.title}</h3>
      <p className="trust-pillar__text">{pillar.text}</p>
    </div>
  )
}

function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <p className="eyebrow">06 — Confianza</p>
        <h2 className="trust__title">Lo que respalda cada proyecto</h2>

        <div className="trust__grid">
          {pillars.map((pillar, index) => (
            <Pillar pillar={pillar} index={index} key={pillar.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
