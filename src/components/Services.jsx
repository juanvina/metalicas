const services = [
  {
    img: '/img/11.jpg',
    alt: 'Fabricación de estructuras metálicas',
    title: 'Fabricación de Estructuras Metálicas',
  },
  {
    img: '/img/8.jpg',
    alt: 'Instalaciones eléctricas',
    title: 'Instalaciones Eléctricas',
  },
  {
    img: '/img/soldadura.jpg',
    alt: 'Soldaduras especializadas',
    title: 'Soldaduras',
  },
  {
    img: '/img/12.jpg',
    alt: 'Reconstrucción de maquinaria pesada',
    title: 'Reconstrucción de Maquinaria',
  },
]

function Services() {
  return (
    <section className="container text-center py-5" id="servicios">
      <h2 className="mb-4 fs-2">Nuestros Servicios</h2>
      <div className="row row-cols-1 row-cols-sm-2 g-4">
        {services.map((service) => (
          <div className="col" key={service.title}>
            <img src={service.img} alt={service.alt} className="servicio-img img-fluid rounded shadow-sm" />
            <p className="mt-2 fw-semibold">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
