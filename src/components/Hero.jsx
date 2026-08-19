import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <img className="hero__bg" src="/img/ca3.jpg" alt="Estructura metálica de gran escala fabricada e instalada por Estructuras Metálicas C.A." />
      <div className="hero__overlay" />

      <span className="hero__corner hero__corner--tl" aria-hidden="true" />
      <span className="hero__corner hero__corner--br" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">IBAGUÉ · TOLIMA · COLOMBIA</p>

        <h1 className="hero__title">
          Estructuramos
          <br />
          lo que hace
          <br />
          posible la industria.
        </h1>

        <p className="hero__subtitle">
          Fabricación, soldadura, mecanizado, instalaciones y reconstrucción de maquinaria en Ibagué, Tolima.
        </p>

        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Solicitar cotización
          </a>
          <a href="#servicios" className="btn btn--ghost">
            Ver nuestros servicios
          </a>
        </div>
      </div>

      <span className="hero__coordinates">4.4389° N / 75.2322° O</span>
    </section>
  )
}

export default Hero
