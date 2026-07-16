import './section.css'

interface SectionProps {
  id?: string,
  children: React.ReactNode
  badge?: string,
  header?: string,
  subheader?: string
}

export default function Section(props: SectionProps) {
  return (
    <section id={props.id}>
      <div className="section__content">
        <div>
          {props.badge && <span className="section__badge">{props.badge}</span>}
        </div>

        {props.header && <h2 className="section__header">{props.header}</h2>}
        {props.subheader && <p className="section__subheader">{props.subheader}</p>}


        {props.children}

      </div>

    </section>
  )
}
