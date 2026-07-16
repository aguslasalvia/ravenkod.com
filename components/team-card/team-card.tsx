import "./team-card.css"

interface TeamCardProps {
  photoPlaceholder?: string;
  name: string;
  role: string;
  rune: string;
  bio: string;
}

export default function TeamCard(props: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-card__photo">
        <span>{props.photoPlaceholder || "foto fundador"}</span>
      </div>
      <div className="team-card__body">
        <div className="team-card__header">
          <h3 className="team-card__name">{props.name}</h3>
          <span className="team-card__rune runic-font">{props.rune}</span>
        </div>
        <div className="team-card__role">{props.role}</div>
        <p className="team-card__bio">{props.bio}</p>
      </div>
    </div>
  );
}