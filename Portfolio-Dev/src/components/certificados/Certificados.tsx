import { portfolioData } from '../../data/dados'
import './Certificados.css'

const Certificados = () => {
  const { certificates } = portfolioData

  if (certificates.length === 0) return null

  return (
    <section id="certificados" className="certificados" aria-labelledby="certificados-title">
      <div className="certificados__content">
        <header className="certificados__heading">
          <span className="certificados__eyebrow">APRENDIZADO CONTÍNUO</span>
          <h2 id="certificados-title">Certificados<span>.</span></h2>
        </header>

        <ul className="certificados__list">
          {certificates.map((certificate) => {
            const details = [certificate.year, certificate.workload]
              .filter((value) => value !== undefined && value !== '')
              .join(' · ')

            return (
              <li className="certificados__item" key={certificate.id}>
                <div className="certificados__course">
                  <h3>{certificate.name}</h3>
                  {details && <p className="certificados__details">{details}</p>}
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
      </div>
    </section>
  )
}

export default Certificados
