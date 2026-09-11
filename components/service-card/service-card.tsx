import './service-card.css'

interface ServiceCardProps {
  header: string,
  content: string
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <article className="service-card glass-panel">
      <h3 className="service-card__title">{props.header}</h3>
      <p className="service-card__text">{props.content}</p>
    </article>
  )
}
