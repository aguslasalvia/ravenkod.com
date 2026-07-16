import './service-card.css'

interface ServiceCardProps {
  header: string,
  content: string,
  index: number
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <article className="service-card">
      <span className="service-card__number">0{props.index + 1}</span>
      <h3 className="service-card__title">{props.header}</h3>
      <p className="service-card__text">{props.content}</p>
    </article>
  )
}