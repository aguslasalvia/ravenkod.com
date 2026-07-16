import ProcessCard from "../process-card/process-card";
import Section from "../section/section";

import "./process-section.css";

const processCards = [
  {
    rune: "ᚨ",
    header: "Descubir",
    text: "Escuchamos tu operación y entendemos el problema real antes de escribir una línea."
  },
  {
    rune: "ᚱ",
    header: "Diseñar",
    text: "Definimos la arquitectura y el diseño: el plano del núcleo."
  },
  {
    rune: "ᚦ",
    header: "Construir",
    text: "Desarrollamos en equipo, con entregas frecuentes y foco en la calidad."
  }, {
    rune: "ᚹ",
    header: "Sostener",
    text: "Entregamos, acompañamos y mantenemos el sistema en el tiempo."
  }
]

export default function ProcessSection() {
  return (
    <Section
      id="process"
      badge="Proceso"
      header="De la idea al producto"
      subheader="// de la niebla a la piedra"
    >
      <div className="process-section__grid">
        {processCards.map((card, index) => (
          <ProcessCard
            key={index}
            index={index}
            rune={card.rune}
            header={card.header}
            text={card.text}
          />
        ))}
      </div>
    </Section>
  )
}