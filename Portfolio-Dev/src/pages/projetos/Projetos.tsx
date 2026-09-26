import { portfolioData } from '../../data/dados'
import './Projetos.css'

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <div className="projetos__content">
        <header className="projetos__heading">
          <span className="projetos__eyebrow">CÓDIGO NA PRÁTICA</span>
          <h2>Meus Projetos<span>.</span></h2>
        </header>

        <div className="projetos__grid">
          {portfolioData.projects.map((project) => (
            <article className={`projetos__card${project.featured ? ' projetos__card--featured' : ''}`} key={project.id}>
              <div className="projetos__image-frame">
                {project.image ? (
                  <img
                    className="projetos__image"
                    src={project.image}
                    alt={`Prévia do projeto ${project.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="projetos__placeholder">
                    <span aria-hidden="true">&lt;/&gt;</span>
                    <span>Prévia em breve</span>
                  </div>
                )}
              </div>

              <div className="projetos__card-content">
                {project.featured && <span className="projetos__badge">Projeto em destaque</span>}
                <h3>{project.title}</h3>
                <p className="projetos__description">{project.description}</p>

                <ul className="projetos__tags" aria-label="Tecnologias utilizadas">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="projetos__links">
                  {project.liveUrl && (
                    <a className="projetos__link--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Ver projeto <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.repoUrl && (
                    <a className={!project.liveUrl ? 'projetos__link--primary' : undefined} href={project.repoUrl} target="_blank" rel="noreferrer">
                      Código <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
