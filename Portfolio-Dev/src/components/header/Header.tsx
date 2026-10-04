import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../../data/dados'
import './Header.css'

type Link = {
  label: string
  href: string
}

const Header = () => {
  const [activeSection, setActiveSection] = useState('#inicio')
  const headerRef = useRef<HTMLElement>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const sections = document.querySelectorAll<HTMLElement>('main section[id]')
      const offset = (headerRef.current?.offsetHeight ?? 80) + 24
      let current = '#inicio'
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= offset) current = `#${section.id}`
      })
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.length ? `#${sections[sections.length - 1].id}` : current
      }
      setActiveSection(current)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  const links: Link[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Certificados', href: '#certificados' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="header" ref={headerRef}>
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
              aria-current={activeSection === link.href ? 'location' : undefined}
              className={link.href === '#contato' ? 'header__contact' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default Header

