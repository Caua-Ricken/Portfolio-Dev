import { portfolioData } from '../../data/dados'
import type { Skill } from '../../data/dados'
import './Skills.css'

const categories: Skill['category'][] = [
  'LINGUAGENS',
  'FRONT-END',
  'BACK-END',
  'BANCO DE DADOS',
  'DEVOPS / INFRA',
  'FERRAMENTAS',
]

const Skills = () => {
  if (!portfolioData.skills.length) return null

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="skills__content">
        <div className="skills__heading">
          <span className="skills__eyebrow">TECNOLOGIAS</span>
          <h2 id="skills-title">Minhas <span>Habilidades</span></h2>
        </div>
        <div className="skills__categories">
          {categories.map((category) => {
            const skills = portfolioData.skills.filter(skill => skill.category === category)
            if (!skills.length) return null

            return (
              <div className="skills__category" key={category}>
                <h3>{category}</h3>
                <ul className="skills__group" aria-label={category}>
                  {skills.map((skill) => (
                    <li key={skill.name} className="skills__item">
                      {skill.icon && (
                        <img
                          className={['GitHub', 'Express', 'Cursor'].includes(skill.name) ? 'skills__icon--mono' : undefined}
                          src={skill.icon}
                          alt=""
                          width={22}
                          height={22}
                        />
                      )}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
