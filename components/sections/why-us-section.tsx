import Section from '../section/section'
import WhyCard from '../why-card/why-card'
import './why-us-section.css'

const whyUsCards = [
  {
    rune: "ᛞ",
    header: "A medida de verdad",
    text: "Nada de plantillas: cada solución nace desde cero para tu empresa."
  },
  {
    rune: "ᛏ",
    header: "Calidad y oficio",
    text: "Código sólido, pensado para durar y crecer con vos."
  },
  {
    rune: "ᚷ",
    header: "Cercanía",
    text: "Trabajamos cerca tuyo, con comunicación clara y directa."
  },
  {
    rune: "ᛖ",
    header: "Equipo",
    text: "Un equipo que se apropia del problema como propio."
  },

]

export default function WhyUsSection() {
  return (
    <Section
      id="why"
      badge="POR QUÉ RAVENKOD"
      header="Oficio, no plantillas."
      subheader="// tallado, no fundido en molde"
    >
      <div className="why-section__grid">
        {
          whyUsCards.map((e, index) => {
            return (
              <WhyCard
                key={index}
                rune={e.rune}
                header={e.header}
                text={e.text}
              />
            )
          })
        }
      </div>


    </Section>
  )
}   