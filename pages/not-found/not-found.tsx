import "./not-found.css"

export default function NotFound() {
  return (
    <section className="not-found">
      <img className="not-found__logo" src="/favicon.png" alt="" />
      <span className="not-found__code">404</span>
      <h1 className="not-found__title">Muninn no recuerda esta página.</h1>
      <p className="not-found__text">
        El cuervo de la memoria voló sin ella. Quizás nunca existió,
        o quizás cambió de lugar.
      </p>
      <span className="not-found__tagline">// ᛗᚢᚾᛁᚾ · la memoria</span>
      <a className="not-found__cta" href="/">Volver al inicio</a>
    </section>
  )
}
