import ProcessCard from "../process-card/process-card";
import Section from "../section/section";

import "./process-section.css";

const processCards = [
  {
    rune: "ᚨ",
    runeMeaning: "Ansuz · la runa del conocimiento",
    header: "Descubir",
    text: "Escuchamos tu operación y entendemos el problema real antes de escribir una línea."
  },
  {
    rune: "ᚱ",
    runeMeaning: "Raidō · la runa del viaje",
    header: "Diseñar",
    text: "Definimos la arquitectura y el diseño: el plano del núcleo."
  },
  {
    rune: "ᚦ",
    runeMeaning: "Thurisaz · la runa de la fuerza",
    header: "Construir",
    text: "Desarrollamos en equipo, con entregas frecuentes y foco en la calidad."
  }, {
    rune: "ᚹ",
    runeMeaning: "Wunjō · la runa de la armonía",
    header: "Sostener",
    text: "Entregamos, acompañamos y mantenemos el sistema en el tiempo."
  }
]

export default function ProcessSection() {
  return (
    <Section
      id="process"
      badge="PROCESO"
      saga="II"
      header="De la idea al producto"
      subheader="// de la niebla a la piedra"
    >
      <div className="process-section__grid">
        {processCards.map((card, index) => (
          <ProcessCard
            key={index}
            index={index}
            rune={card.rune}
            runeMeaning={card.runeMeaning}
            header={card.header}
            text={card.text}
          />
        ))}
      </div>
    </Section>
  )
}