import avatar from '../assets/img-caua.jpeg'
import bikeStore from '../assets/Bike Store.png'
import wineHub from '../assets/wine hub.png'
import tempo from '../assets/tempo.png'
import htmlIcon from '../assets/icons/html.svg'
import cssIcon from '../assets/icons/css.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import reactIcon from '../assets/icons/react.svg'
import nodejsIcon from '../assets/icons/nodejs.svg'
import expressIcon from '../assets/icons/express.svg'
import mysqlIcon from '../assets/icons/mysql.svg'
import mongodbIcon from '../assets/icons/mongodb.svg'
import firebirdIcon from '../assets/icons/firebird.svg'
import gitIcon from '../assets/icons/git.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

export type SocialLink = {
  label: string
  url: string
  icon: string
}

export type Skill = {
  name: string
  icon?: string
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  image?: string
  featured?: boolean
}

export type Education = {
  id: string
  course: string
  institution: string
  period: string
}

export type Certificate = {
  id: string
  name: string
  institution: string
  year?: number
  workload?: string
  url: string
}

export type PortfolioData = {
  site: {
    title: string
    tagline: string
    description: string
  }
  profile: {
    name: string
    role: string
    headline: string
    bio: string
    location: string
    email: string
    whatsapp?: string
    avatar?: string
    resumeUrl?: string
  }
  socialLinks: SocialLink[]
  skills: Skill[]
  projects: Project[]
  education: Education[]
  certificates: Certificate[]
}

export const portfolioData: PortfolioData = {
  site: {
    title: 'Portfólio',
    tagline: 'Desenvolvimento & Criatividade',
    description: 'Portfólio de desenvolvimento web com foco em código limpo e experiências bem pensadas.',
  },

  profile: {
    name: 'Cauã Ricken',
    role: 'Desenvolvedor Full Stack',
    headline: 'Código com propósito. Cada detalhe importa.',
    bio: 'Sou estudante de Sistemas de Informação, apaixonado por desenvolvimento de software e tecnologia. Acredito que programar vai muito além de escrever código, é encontrar soluções criativas para problemas reais e impactar a vida das pessoas com sistemas inteligentes e funcionais.',
    location: 'Braço do Norte, SC, Brasil',
    email: 'cauaricken@gmail.com',
    whatsapp: '5548996709510', 
    avatar: avatar,
    resumeUrl: `${import.meta.env.BASE_URL}Curriculo.pdf`,
  },

  socialLinks: [
    { label: 'GitHub', icon: githubIcon, url: 'https://github.com/Caua-Ricken' },
    { label: 'LinkedIn', icon: linkedinIcon, url: 'https://www.linkedin.com/in/cauaricken' },
  ],

  skills: [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Express', icon: expressIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'FireBird', icon: firebirdIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'GitHub', icon: githubIcon },
  ],

  projects: [
    {
      id: 'projeto-1',
      title: 'Bikes Store - Ecommerce de Bicicletas',
      description: 'Pagina de E-commerce focada em vendas de bicicletas premium. Utilizado React e Node.js, junto com JWT para segurança',
      tags: ['React', 'API Rest', 'Node.js', 'Express', 'MVC', 'MySQL', 'JWT'],
      repoUrl: 'https://github.com/Caua-Ricken/motorcycle/tree/main/Motorcycle',
      image: bikeStore,
      featured: true,
    },
    {
      id: 'projeto-2',
      title: 'Wine Hub',
      description: 'Página para apresentação e venda de vinhos, desenvolvida com HTML, CSS e JavaScript. O usuário pode explorar os produtos disponíveis e realizar compras diretamente pelo site.',
      tags: ['CSS', 'JavaScript'],
      liveUrl: 'https://caua-ricken.github.io/WineHub/',
      repoUrl: 'https://github.com/Caua-Ricken/WineHub',
      image: wineHub,
      featured: true,
    },
    {
      id: 'projeto-3',
      title: 'App de Previsão do Tempo',
      description: 'Aplicação web de previsão do tempo desenvolvida com React e JavaScript. O usuário pode buscar qualquer cidade e visualizar informações meteorológicas em tempo real.',
      tags: ['React', 'API', 'JavaScript'],
      liveUrl: 'https://caua-ricken.github.io/weather/',
      repoUrl: 'https://github.com/Caua-Ricken/weather',
      image: tempo,
      featured: true,
    },
    
  ],

  education: [
    {
      id: 'edu-1',
      course: 'Sistemas de Informação',
      institution: 'Centro Universitario Barriga Verde- Unibave',
      period: '2024 - 2027',
    },
  ],

  certificates: [
    {
      id: 'certificado-1',
      name: 'Node do Zero a Maestria',
      institution: 'Udemy',
      year: 2026,
      workload: '38 horas',
      url: `${import.meta.env.BASE_URL}Certificado-Node.pdf`,
    },
    {
      id: 'certificado-2',
      name: 'Curso de React JS',
      institution: 'Hora de codar',
      year: 2026,
      workload: '36 horas',
      url:  `${import.meta.env.BASE_URL}Certificado-React.pdf`,
    },
    {
      id: 'certificado-3',
      name: 'Curso de SQL com Firebird',
      institution: 'Udemy',
      year: 2026,
      workload: '7 horas',
      url:  `${import.meta.env.BASE_URL}Certificado-Firebird.pdf`,
    },
  ],
};
