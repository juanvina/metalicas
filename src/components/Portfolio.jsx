import useReveal from '../hooks/useReveal.js'
import { IconCamera } from './icons.jsx'
import './Portfolio.css'

const projects = [
  {
    number: '01',
    title: 'Rejas de seguridad residencial',
    location: 'Ibagué · Tolima',
    image: '/img/ca4.jpg',
    imageAlt: 'Rejas de seguridad metálicas instaladas en ventanas y acceso de una vivienda',
    problem: 'Vivienda sin protección adecuada en ventanas y accesos.',
    solution: 'Fabricación e instalación de rejas metálicas a la medida del espacio.',
    result: 'Acceso protegido sin perder luz natural ni la estética de la fachada.',
  },
  {
    number: '02',
    title: 'Cerramiento metálico perimetral',
    location: 'Ibagué · Tolima',
    image: '/img/ca2.jpg',
    imageAlt: 'Cerca metálica instalada sobre zona verde',
    problem: 'Zona verde y perímetro sin delimitación segura.',
    solution: 'Fabricación y montaje de cerca metálica perimetral.',
    result: 'Cerramiento firme, durable y de bajo mantenimiento.',
  },
  {
    number: '03',
    title: 'Estructura para cancha deportiva',
    location: 'Ibagué · Tolima',
    image: '/img/ca1.jpg',
    imageAlt: 'Estructura metálica con malla para cancha deportiva techada',
    problem: 'Espacio deportivo que requería cerramiento en malla para uso seguro.',
    solution: 'Fabricación e instalación de estructura y malla perimetral para cancha techada.',
    result: 'Cancha delimitada y lista para uso continuo.',
  },
]

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`project-card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="project-card__media">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-card__number">{project.number}</span>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__location eyebrow">{project.location}</p>

        <dl className="project-card__facts">
          <div>
            <dt>Problema</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Solución</dt>
            <dd>{project.solution}</dd>
          </div>
          <div>
            <dt>Resultado</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

const galleryItems = [
  { src: '/img/Cerca1.jpg', alt: 'Cerca metálica instalada en vivienda', label: 'Cerca metálica' },
  { src: '/img/Cerca2.jpg', alt: 'Cerca metálica perimetral', label: 'Cerca metálica' },
  { src: '/img/Cerca3.jpg', alt: 'Cerca metálica en zona verde', label: 'Cerca metálica' },
  { src: '/img/Escalera1.jpeg', alt: 'Escalera metálica fabricada a la medida', label: 'Escalera metálica' },
  { src: '/img/Escalera2.jpeg', alt: 'Escalera metálica instalada', label: 'Escalera metálica' },
  { src: '/img/Escalera3.jpeg', alt: 'Escalera metálica con pasamanos', label: 'Escalera metálica' },
  { src: '/img/Escalera4.jpeg', alt: 'Escalera metálica industrial', label: 'Escalera metálica' },
  { src: '/img/Porton1.jpeg', alt: 'Portón metálico corredizo', label: 'Portón metálico' },
  { src: '/img/Porton2.jpeg', alt: 'Portón metálico de acceso', label: 'Portón metálico' },
  { src: '/img/Puerta-estilo-reja.jpeg', alt: 'Puerta de seguridad tipo reja', label: 'Puerta tipo reja' },
  { src: '/img/Ventanal.jpg', alt: 'Ventanal con protección metálica', label: 'Ventanal' },
]

function GalleryItem({ item, index }) {
  const [ref, visible] = useReveal()

  return (
    <figure
      ref={ref}
      className={`gallery-item reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
      <figcaption>{item.label}</figcaption>
    </figure>
  )
}

function PlaceholderCard({ index }) {
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`project-card project-card--placeholder placeholder-frame reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <IconCamera width={28} height={28} />
      <span className="placeholder-frame__label">Próximo proyecto</span>
      <p className="project-card__placeholder-text">
        Seguimos documentando proyectos ejecutados. Muy pronto se sumarán aquí.
      </p>
    </article>
  )
}

function Portfolio() {
  return (
    <section id="proyectos" className="portfolio">
      <div className="container">
        <p className="eyebrow">03 — Portafolio</p>
        <h2 className="portfolio__title">Trabajos que hablan por nosotros.</h2>
        <p className="portfolio__intro">
          Selección de proyectos ejecutados en Ibagué y la región. El portafolio se irá ampliando con cada entrega.
        </p>

        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.number} />
          ))}
          <PlaceholderCard index={projects.length} />
        </div>

        <h3 className="portfolio__gallery-title">Más trabajos realizados</h3>
        <div className="portfolio__gallery">
          {galleryItems.map((item, index) => (
            <GalleryItem item={item} index={index} key={item.src} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
