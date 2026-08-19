import useReveal from '../hooks/useReveal.js'
import './Location.css'

function Location() {
  const [ref, visible] = useReveal()

  return (
    <section id="ubicacion" className="location">
      <div className="container location__grid">
        <div ref={ref} className={`location__text reveal ${visible ? 'reveal--visible' : ''}`}>
          <p className="eyebrow">07 — Ubicación</p>
          <h2 className="location__title">Desde Ibagué, trabajamos para la industria.</h2>
          <p className="location__paragraph">
            Estamos ubicados en Ibagué, Tolima, y atendemos proyectos de fabricación de estructuras metálicas,
            soldadura especializada, instalaciones eléctricas y reconstrucción de maquinaria en la región.
          </p>
          <p className="location__paragraph">
            ¿Tu proyecto está fuera de Ibagué? Cuéntanos el alcance y evaluamos cobertura.
          </p>

          <div className="location__tag">
            <span>Ibagué</span>
            <span>Tolima</span>
            <span>Colombia</span>
          </div>
        </div>

        <div className="location__map">
          <iframe
            title="Ubicación de Estructuras Metálicas C.A. en Ibagué, Tolima"
            src="https://www.google.com/maps?q=Ibagu%C3%A9,Tolima,Colombia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Location
