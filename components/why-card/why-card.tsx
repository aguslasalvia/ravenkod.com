import "./why-card.css"
interface WhyCardProps {
  rune: string,
  header: string,
  text: string
}

export default function WhyCard(props: WhyCardProps) {
  return (
    <div className="why-card">
      <span className="why-card__rune rune-font">{props.rune}</span>
      <h3 className="why-card__header">{props.header}</h3>
      <p className="why-card__text">{props.text}</p>
    </div>
  )
}