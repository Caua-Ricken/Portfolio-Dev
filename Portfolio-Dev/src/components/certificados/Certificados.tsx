import { portfolioData } from '../../data/dados'
import { useState } from 'react'
import './Certificados.css'

const Certificados = () => {
  const { certificates } = portfolioData
  const [showAll, setShowAll] = useState(false)

  const certificatesToShow = showAll ? certificates : certificates.slice(0, 3)

  if (certificates.length === 0) return null

  return (
    <section id="certificados" className="certificados" aria-labelledby="certificados-title">
      <div className="certificados__content">
        <header className="certificados__heading">
          <span className="certificados__eyebrow">APRENDIZADO CONTÍNUO</span>
          <h2 id="certificados-title">Certificados<span>.</span></h2>
        </header>

        <ul id="certificados-list" className="certificados__list">
          {certificatesToShow.map((certificate) => {
            const details = [certificate.year, certificate.workload]
              .filter((value) => value !== undefined && value !== '')
              .join(' · ')

            return (
              <li className="certificados__item" key={certificate.id}>
                <div className="certificados__course">
                  <h3>{certificate.name}</h3>
                  {details && <p className="certificados__details">{details}</p>}
                  {certificate.skills.length > 0 && (
                    <ul className="certificados__skills" aria-label="Habilidades aprendidas">
                      {certificate.skills.map((skill) => (
                        <li key={skill} className="certificados__skill">{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="certificados__institution">{certificate.institution}</p>
                <a
                  className="certificados__link"
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver certificado de ${certificate.name} (abre em nova aba)`}
                >
                  Ver certificado <span aria-hidden="true">↗</span>
                </a>
              </li>
            )
          })}
        </ul>
        {certificates.length > 3 && (
          <div className="certificados__actions">
            <button
              type="button"
              className="certificados__toggle"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              aria-controls="certificados-list"
            >
              {showAll ? 'Ver menos' : 'Ver mais'}
              <span aria-hidden="true">{showAll ? '↑' : '↓'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificados
