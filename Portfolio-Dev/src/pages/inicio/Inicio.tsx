import { useEffect, useState } from 'react'
import { portfolioData } from '../../data/dados'
import './Inicio.css'

const { name, role, location } = portfolioData.profile

const backgroundCode = `import { useState, useEffect } from 'react';
import { Router } from 'express';
import type { Pool } from 'mysql2/promise';

interface Developer {
  name: string;
  role: string;
  stack: string[];
  location: string;
}

const caua: Developer = {
  name: '${name}',
  role: '${role}',
  stack: ['TypeScript', 'React', 'Node.js',
          'MySQL', 'Docker', 'Express'],
  location: '${location}',
};

async function buildAmazing(): Promise<void> {
  while (true) {
    await learn();
    await build();
    await ship();
  }
}

export default caua;
`

const codeLines = Array.from(backgroundCode.matchAll(/^[^\n]*/gm), ({ 0: text, index }) => ({
  text,
  keyword: text.match(/^(?:async )?(import|interface|const|function|export)\b/)?.[1],
  start: index,
}))

const renderBackgroundCode = (visibleLength: number, showCursor = false) =>
  codeLines.map(({ text, keyword, start }, index) => {
    const revealed = visibleLength - start
    const isCurrentLine = revealed >= 0 && revealed <= text.length

    return (
      <span className="inicio__code-line" key={start}>
        <span className="inicio__code-number">{revealed >= 0 ? index + 1 : ''}</span>
        <span data-keyword={keyword}>
          {text.slice(0, Math.max(0, revealed))}
          {showCursor && isCurrentLine && <span className="inicio__code-cursor" />}
        </span>
      </span>
    )
  })

const Inicio = () => {
  const { avatar } = portfolioData.profile
  const roles = [role, 'React & Node.js Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [codeLength, setCodeLength] = useState(0)
  const phrase = roles[roleIndex]

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
      length = Math.min(length + 2, backgroundCode.length)
      setCodeLength(length)
      if (length >= backgroundCode.length) window.clearInterval(interval)
    }, 20)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="inicio" aria-labelledby="inicio-title">
      <div className="inicio__hero">
        <pre className="inicio__code" aria-hidden="true">
          <span className="inicio__animated-code">{renderBackgroundCode(codeLength, true)}</span>
          <span className="inicio__static-code">{renderBackgroundCode(backgroundCode.length)}</span>
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
