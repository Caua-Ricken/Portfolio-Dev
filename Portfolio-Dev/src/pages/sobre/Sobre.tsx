
import { portfolioData } from '../../data/dados'
import './Sobre.css'

const Sobre = () => {
  const { bio, role, location } = portfolioData.profile
  const { education } = portfolioData

  return (
    <section id="sobre" className="sobre" aria-labelledby="sobre-title">
      <div className="sobre__content">
        <div className="sobre__text">
          <span className="sobre__eyebrow">UM POUCO SOBRE MIM</span>
          <h2 id="sobre-title">Sobre mim<span>.</span></h2>
          <p className="sobre__bio">{bio}</p>
        </div>
        <div className="sobre__profile">
          <span className="sobre__file" aria-hidden="true">&gt;_ perfil.dev</span>
          <dl className="sobre__details">
            <div>
              <dt>Atuação</dt>
              <dd>{role}</dd>
            </div>
            <div>
              <dt>Localização</dt>
              <dd>{location}</dd>
            </div>
          </dl>

          {education.length > 0 && (
            <div className="sobre__education">
              <h3>Formação acadêmica</h3>
              <ul className="sobre__education-list">
                {education.map((item) => (
                  <li key={item.id} className="sobre__education-item">
                    <p className="sobre__education-course">{item.course}</p>
                    <p className="sobre__education-institution">{item.institution}</p>
                    <span className="sobre__education-period">{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Sobre
