import './section.css'

interface SectionProps {
  id?: string,
  children?: React.ReactNode
  rune?: string,
  header?: string,
  subheader?: string
}

export default function Section(props: SectionProps) {
  return (
    <section id={props.id} data-rune={props.rune}>
      <div className="section__content">
        {(props.rune || props.header || props.subheader) && (
          <div className="section__intro">
            {props.rune && <span className="section__stamp runic-font" aria-hidden="true">{props.rune}</span>}
            <div className="section__header-content">
              {props.header && <h2 className="section__header">{props.header}</h2>}
              {props.subheader && <p className="section__subheader">{props.subheader}</p>}
            </div>
          </div>
        )}

        {props.children}
      </div>
    </section>
  )
}
