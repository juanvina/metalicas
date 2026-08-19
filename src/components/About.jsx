import useReveal from '../hooks/useReveal.js'
import './About.css'

function About() {
  const [textRef, textVisible] = useReveal()
  const [mediaRef, mediaVisible] = useReveal()

  return (
    <section id="nosotros" className="about">
      <div className="container about__grid">
        <div ref={textRef} className={`about__text reveal ${textVisible ? 'reveal--visible' : ''}`}>
          <p className="eyebrow">05 — Nosotros</p>
          <h2 className="about__title">Hecho por personas que conocen el oficio.</h2>
          <p className="about__paragraph">
            Detrás de cada estructura hay alguien que sabe medir, cortar, soldar y ensamblar con precisión. Ese
            oficio no se improvisa: se aprende a punta de taller, de horas frente al metal y de proyectos que
            exigen que la pieza quede exactamente como se necesita.
          </p>
          <p className="about__paragraph">
            Así trabajamos en Estructuras Metálicas C.A. desde Ibagué: con gente que entiende el material,
            las herramientas y lo que un proyecto industrial realmente necesita para funcionar.
          </p>
        </div>

        <div ref={mediaRef} className={`about__media reveal ${mediaVisible ? 'reveal--visible' : ''}`}>
          <img src="/img/11.jpg" alt="Taller de Estructuras Metálicas C.A. en Ibagué" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default About
