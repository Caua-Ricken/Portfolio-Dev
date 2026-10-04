import { useEffect, useState } from 'react'
import { portfolioData } from '../../data/dados'
import './Inicio.css'

const Inicio = () => {
  const { name, avatar, role, location } = portfolioData.profile
  const roles = [role, 'React & Node.js Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [codeLength, setCodeLength] = useState(0)
  const phrase = roles[roleIndex]

  const backgroundCode = `import { Developer } from './portfolio';

interface Profile {
  name: string;
  stack: string[];
}

const developer: Profile = {
  name: '${name}',
  stack: ['React', 'TypeScript', 'Node.js'],
};

export default developer;`

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const finished = roleText === phrase
    const timeout = window.setTimeout(() => {
      if (!deleting && finished) {
        setDeleting(true)
      } else if (deleting && !roleText.length) {
        setDeleting(false)
        setRoleIndex(index => (index + 1) % 2)
      } else {
        setRoleText(phrase.slice(0, roleText.length + (deleting ? -1 : 1)))
      }
    }, deleting ? 50 : finished ? 1800 : 100)
    return () => window.clearTimeout(timeout)
  }, [phrase, roleText, deleting])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let length = 0
    const interval = window.setInterval(() => {
      length += 1
      setCodeLength(length)
      if (length >= backgroundCode.length) window.clearInterval(interval)
    }, 20)
    return () => window.clearInterval(interval)
  }, [backgroundCode])

  
  return (
    <section id="inicio" className="inicio" aria-labelledby="inicio-title">
      <div className="inicio__hero">
        <pre className="inicio__code" aria-hidden="true">
          <span className="inicio__animated-code">{backgroundCode.slice(0, codeLength)}</span>
          <span className="inicio__static-code">{backgroundCode}</span>
        </pre>

        {avatar && <img className="inicio__avatar" src={avatar} alt={`Foto de ${name}`} width={148} height={148} />}
        <h1 id="inicio-title" className="inicio__name">{name}</h1>
        <p className="inicio__role" aria-label={roles.join(' e ')}>
          <span className="inicio__animated-role" aria-hidden="true">{roleText}<span className="inicio__cursor">|</span></span>
          <span className="inicio__static-role" aria-hidden="true">{role}</span>
        </p>
        <p className="inicio__location"><span aria-hidden="true">⌖</span> {location}</p>
        <div className="inicio__actions">
          <a className="inicio__button inicio__button--primary" href="#sobre">Sobre mim</a>
          {portfolioData.socialLinks.map(link => (
            <a className="inicio__button" key={link.label} href={link.url} target="_blank" rel="noreferrer">
              <img src={link.icon} alt="" width={20} height={20} className={link.label === 'GitHub' ? 'inicio__icon--mono' : undefined} />
              {link.label}
            </a>
          ))}
        </div>
        <a className="inicio__scroll" href="#sobre" aria-label="Ler mais sobre mim">scroll<span aria-hidden="true" /></a>
      </div>
    </section>
  )
}

export default Inicio
