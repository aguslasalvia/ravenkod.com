import Section from "../section/section"

import "./contact-section.css"

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Proyecto — ${data.get("name")}${data.get("company") ? ` (${data.get("company")})` : ""}`
    const body = `${data.get("project")}\n\n${data.get("name")}\n${data.get("email")}`
    window.location.href = `mailto:hola@ravenkod.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Section id="contact" rune="ᚲ" header="Agendemos una llamada." subheader="Enviá tu señal, coordinamos el resto.">
      <div className="contact__grid">
        <div className="contact__info">
          <p className="contact__text">
            Contanos en qué estás pensando y coordinamos una
            llamada para conocer tu proyecto.
          </p>
          <div className="contact__email-block">
            <span className="contact__email-label">O escribinos a</span>
            <a className="contact__email" href="mailto:hola@ravenkod.com">hola@ravenkod.com</a>
          </div>
        </div>

        <form className="contact__form glass-panel" onSubmit={handleSubmit}>
          <input className="contact__input" name="name" type="text" placeholder="Nombre" required />
          <input className="contact__input" name="email" type="email" placeholder="Email" required />
          <input className="contact__input" name="company" type="text" placeholder="Empresa" />
          <input className="contact__input" name="project" type="text" placeholder="Contanos brevemente tu proyecto" required />
          <button className="contact__submit" type="submit">Agendar llamada</button>
        </form>
      </div>
    </Section>
  )
}
