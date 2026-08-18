import { useEffect, useState } from 'react'

const slides = [
  { src: '/img/ca1.jpg', alt: 'Estructura metálica instalada' },
  { src: '/img/ca2.jpg', alt: 'Proyecto de estructura metálica' },
  { src: '/img/ca3.jpg', alt: 'Fabricación de estructura metálica' },
  { src: '/img/ca4.jpg', alt: 'Trabajo en estructura metálica' },
  { src: '/img/ca5.jpg', alt: 'Instalación eléctrica industrial' },
  { src: '/img/ca6.jpg', alt: 'Soldadura especializada' },
]

const INTERVAL_MS = 4000

function Carousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, INTERVAL_MS)

    return () => clearInterval(id)
  }, [paused])

  const goTo = (i) => setIndex(i)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div
      className="carousel slide"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-indicators">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={i === index ? 'active' : ''}
            aria-current={i === index}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div className={`carousel-item ${i === index ? 'active' : ''}`} key={slide.src}>
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" onClick={prev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={next}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}

export default Carousel
