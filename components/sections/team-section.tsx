import "./team-section.css"

import Section from "../section/section"
import TeamCard from "../team-card/team-card"

const team = [
  {
    name: "Agustin Lasalvia",
    role: "CO-FUNDADOR - BACKEND",
    rune: "ᚱ",
    bio: "Arquitectura y back-end. Obsesionado con sistemas que aguanten años."
  }
]

export default function TeamSection() {
  return (
    <Section
      id="team"
      badge="EQUIPO"
      header="Las manos detrás del núcleo."
      subheader="// un clan chico, puro oficio"
    >
      <div className="team-grid">
        {team.map((e, index) => {
          return (
            <TeamCard
              key={index}
              name={e.name}
              role={e.role}
              rune={e.rune}
              bio={e.bio}

            />
          )
        })}
        <div className="guild-card">
          <span className="guild-card__rune runic-font">ᛗ</span>
          <h3 className="guild-card__title">El gremio crece por proyecto.</h3>
          <p className="guild-card__text">
            Una red de especialistas de confianza se suma cuando tu proyecto lo pide: diseño, datos, DevOps.
          </p>
        </div>
      </div>
    </Section>
  )
}