import { useState } from 'react'
import { portfolioData } from '../../data/dados'
import './Skills.css'

const Skills = () => {
  const [paused, setPaused] = useState(false)
  if (!portfolioData.skills.length) return null

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="skills__content">
        <div className="skills__heading">
          <div>
            <span className="skills__eyebrow">MINHA STACK</span>
            <h2 id="skills-title">Tecnologias que uso<span>.</span></h2>
          </div>
          <div className="skills__controls">
            <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? 'Retomar carrossel de tecnologias' : 'Pausar carrossel de tecnologias'} aria-controls="skills-track">
              <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
            </button>
          </div>
        </div>
        <div className="skills__viewport">
          <div id="skills-track" className={`skills__track${paused ? ' skills__track--paused' : ''}`}>
            {[0, 1].map((copy) => (
              <ul className="skills__group" key={copy} aria-hidden={copy === 1 ? true : undefined} aria-label={copy === 0 ? 'Tecnologias' : undefined}>
                {portfolioData.skills.map((skill) => (
                  <li key={skill.name} className="skills__item">
                    {skill.icon && <img className={['GitHub', 'Express'].includes(skill.name) ? 'skills__icon--mono' : undefined} src={skill.icon} alt="" width={40} height={40} />}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
