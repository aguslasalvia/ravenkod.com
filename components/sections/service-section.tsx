import Section from "../section/section"
import ServiceCard from "../service-card/service-card"
import "./service-section.css"

const serviceOptions = [
  {
    header: "Desarrollo Web",
    content: "Plataformas, portales y aplicaciones web a la medida de tu operación, rápidas y escalables."
  },
  {
    header: "Desarrollo Móvil",
    content: "Aplicaciones móviles nativas o híbridas, para iOS y Android, con la mejor experiencia de usuario."
  },
  {
    header: "Aplicaciones Desktop",
    content: "Software de escritorio para procesos críticos, robusto y confiable."
  },
  {
    header: "Software a medida",
    content: "Cuando ninguna herramienta encaja, construimos el sistema exacto que necesitás, desde cero."
  }
]

export default function ServiceSection() {
  return (
    <Section
      id="services"
      badge="SERVICIOS"
      saga="I"
      header="Un solo equipo para todo tu software."
    >
      <div className="service-section__grid">
        {serviceOptions.map((option, index) => (
          <ServiceCard
            key={index}
            header={option.header}
            content={option.content}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}