const stats = [
  { value: '248', label: 'Días de sol al año' },
  { value: '100%', label: 'Proyectos entregados' },
  { value: '24°C', label: 'Temperatura promedio' },
]

function Location() {
  return (
    <section id="local" className="border-top border-2">
      <div className="mapa" role="img" aria-label="Mapa de ubicación en Ibagué, Tolima"></div>
      <div className="wrapper">
        <h2>Ubicados en la Ciudad de Ibagué, Tolima</h2>
        <p className="fs-5 text-body">
          Atendemos proyectos de fabricación de estructuras metálicas, instalaciones eléctricas,
          soldadura especializada y reconstrucción de maquinaria pesada para clientes de Ibagué y la región.
        </p>

        <section className="d-flex" id="numeros-locales">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-primary fs-5 fw-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Location
