import "./process-card.css";

interface ProcessCardProps {
  index: number,
  rune: string,
  header: string,
  text: string

}

export default function ProcessCard(props: ProcessCardProps) {
  return (
    <article className="process-card">
      <div className="process-card__number-header">
        <div className="process-card__number">0{props.index + 1}</div>
        <div className="process-card__rune runic-font">{props.rune}</div>
      </div>
      <h3 className="process-card__header">{props.header}</h3>
      <p className="process-card__text">{props.text}</p>
    </article>
  )
}