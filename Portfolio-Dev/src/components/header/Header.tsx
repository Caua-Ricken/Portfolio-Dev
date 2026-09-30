import { portfolioData } from '../../data/dados'
import './Header.css'

const Header = () => {
  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Certificados', href: '#certificados' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="header">
      <div className="header__content">
        <a href="#inicio" className="header__brand">
          <span className="header__brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span className="header__brand-name">
            {portfolioData.profile.name}
          </span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.href === '#contato' ? 'header__contact' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__socials">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={link.label}
            >
              <img
                src={link.icon}
                alt=""
                width={22}
                height={22}
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
