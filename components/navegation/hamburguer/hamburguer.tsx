import { createPortal } from 'react-dom'

import './hamburguer.css'

interface HamburguerProps {
  open: boolean;
  onClick: () => void;
}

export default function Hamburguer(props: HamburguerProps) {
  return createPortal(
    <button
      className={`hamburguer${props.open ? ' hamburguer--open' : ''}`}
      aria-label={props.open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={props.open}
      onClick={props.onClick}
    >
      <span className="hamburguer__line"></span>
      <span className="hamburguer__line"></span>
      <span className="hamburguer__line"></span>
    </button>,
    document.body
  )
}
