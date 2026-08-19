import useReveal from '../hooks/useReveal.js'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Nos cuentas el problema',
    description: 'Nos compartes qué necesitas fabricar, instalar o reparar.',
  },
  {
    number: '02',
    title: 'Analizamos la solución',
    description: 'Evaluamos el proyecto y definimos el proceso técnico adecuado.',
  },
  {
    number: '03',
    title: 'Fabricamos',
    description: 'Ejecutamos en taller con los materiales y procesos definidos.',
  },
  {
    number: '04',
    title: 'Instalamos / reconstruimos',
    description: 'Montamos en sitio o reconstruimos el equipo según el caso.',
  },
  {
    number: '05',
    title: 'Entregamos',
    description: 'Entregamos el proyecto terminado y listo para operar.',
  },
]

function Step({ step, index }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`process-step reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: `${index * 90}ms` }}>
      <span className="process-step__dot" aria-hidden="true" />
      <span className="section-number">{step.number}</span>
      <h3 className="process-step__title">{step.title}</h3>
      <p className="process-step__desc">{step.description}</p>
    </div>
  )
}

function Process() {
  return (
    <section id="proceso" className="process">
      <div className="container">
        <p className="eyebrow">04 — Proceso</p>
        <h2 className="process__title">Así trabajamos</h2>

        <div className="process__track">
          {steps.map((step, index) => (
            <Step step={step} index={index} key={step.number} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
