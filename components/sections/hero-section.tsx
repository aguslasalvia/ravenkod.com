import "./hero-section.css"

export default function HeroSection() {
  return (
    <section id="hero">
      <span className="hero__rail load-appear load-delay-5" aria-hidden="true">RAVENKOD ᚱ · SOFTWARE A MEDIDA</span>

      <div className="hero__left">
        <div className="hero__copy">
          <span className="hero__badge load-rise load-delay-1">WEB · MÓVIL · DESKTOP</span>

          <h1 className="hero__title load-rise load-delay-2">
            Software a medida, <span className="hero__title-accent">tallando</span> pieza por pieza.
          </h1>

          <p className="hero__subtitle load-rise load-delay-3">
            Construimos el núcleo que hace funcionar tu empresa:
            diseñado desde cero, con oficio y precisión.
          </p>

          <p className="hero__tagline load-rise load-delay-4">// forjadores del núcleo</p>

          <div className="hero__actions load-rise load-delay-5">
            <a className="hero__cta" href="/#contact">Contanos tu proyecto</a>
            <a className="hero__cta hero__cta--ghost" href="/#services">Ver servicios</a>
          </div>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__window load-rise load-delay-3">
          <div className="hero__window-bar">
            <span className="hero__window-dot" aria-hidden="true" />
            <span className="hero__window-dot" aria-hidden="true" />
            <span className="hero__window-dot" aria-hidden="true" />
            <span className="hero__window-title">nucleo.saga — forja</span>
          </div>
          <pre className="hero__code">
            <code>
              <span className="hero__code-comment">// toda empresa tiene su saga</span>{"\n"}
              <span className="hero__code-keyword">forjar</span> <span className="hero__code-string">"nucleo"</span> {"{"}{"\n"}
              {"  "}<span className="hero__code-prop">web</span>     = <span className="hero__code-value">true</span>{"\n"}
              {"  "}<span className="hero__code-prop">movil</span>   = <span className="hero__code-value">true</span>{"\n"}
              {"  "}<span className="hero__code-prop">desktop</span> = <span className="hero__code-value">true</span>{"\n"}
              {"  "}<span className="hero__code-prop">temple</span>  = <span className="hero__code-value">eterno</span>{"\n"}
              {"}"}{"\n"}
              {"\n"}
              <span className="hero__code-comment"><span className="runic-font hero__code-rune">ᚨ</span> descubrir → <span className="runic-font hero__code-rune">ᚱ</span> diseñar → <span className="runic-font hero__code-rune">ᚦ</span> construir → <span className="runic-font hero__code-rune">ᚹ</span> sostener</span>
              <span className="hero__code-cursor" aria-hidden="true">▍</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
