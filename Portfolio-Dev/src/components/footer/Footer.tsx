import { portfolioData } from '../../data/dados'
import './Footer.css'

const Footer = () => {
  const { name, role, email } = portfolioData.profile

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__identity">
          <span className="footer__mark" aria-hidden="true">CR</span>

          <div>
            <strong>{name}</strong>
            <p>{role}</p>
          </div>
          </div>
          <div className="footer__contacts">
            <p className="footer__label">Vamos nos conectar</p>
            <nav className="footer__socials" aria-label="Redes sociais">
              {portfolioData.socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={`${link.label}`}>
                  <img src={link.icon} alt="" width={20} height={20} />
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
            <a className="footer__email" href={`mailto:${email}`}>{email}</a>
          </div>
        </div>

        <div className="footer__bottom">
          <small>© {new Date().getFullYear()} {name}</small>

          <a href="#inicio">
            Voltar ao início <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
