import { portfolioData } from '../../data/dados'
import './Inicio.css'

const Inicio = () => {
  const { name, role, headline, location, avatar, resumeUrl } =
    portfolioData.profile

  return (
    <section id="inicio" className="inicio">
      <div className="inicio__content">
        <div className="inicio__text">
          <span className="inicio__eyebrow">&lt;dev /&gt; · {location}</span>

          <p className="inicio__greeting">Olá, eu sou</p>
          <h1>{name}<span>.</span></h1>

          <p className="inicio__role">{role}</p>
          <p className="inicio__headline">{headline}</p>

          <div className="inicio__actions">
            <a className="inicio__button inicio__button--primary" href="#projetos">
              Ver projetos <span aria-hidden="true">↗</span>
            </a>

            <a className="inicio__button inicio__button--outline" href="#contato">
              Entrar em contato
            </a>
          </div>

          {resumeUrl && (
            <a className="inicio__resume" href={resumeUrl} target="_blank" rel="noreferrer">
              Ver currículo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        {avatar && (
          <div className="inicio__photo-frame">
            <div className="inicio__window-bar" aria-hidden="true">
              <span className="inicio__window-dots"><i /><i /><i /></span>
              <span>developer.tsx</span>
              <span>⌘</span>
            </div>
            <img src={avatar} alt={`Foto de ${name}`} className="inicio__photo" />
            <div className="inicio__photo-caption"><span aria-hidden="true">&gt;_</span> transformando ideias em código</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Inicio
