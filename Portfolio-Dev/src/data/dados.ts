import avatar from '../assets/img-caua.jpeg'
import leagueSupply from '../assets/League.png'
import rotalivre from '../assets/rota livre.png'
import api from '../assets/api.png'
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
import vscodeIcon from '../assets/icons/vscode.svg'
import cursorIcon from '../assets/icons/cursor.svg'
import dockerIcon from '../assets/icons/docker.svg'

export type SocialLink = {
  label: string
  url: string
  icon: string
}

export type Skill = {
  name: string
  icon?: string
  category: 'FRONT-END' | 'BACK-END' | 'LINGUAGENS' | 'BANCO DE DADOS' | 'DEVOPS / INFRA' | 'FERRAMENTAS'
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
  skills: string[]
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
    role: 'TypeScript Full Stack Developer',
    headline: 'Código com propósito. Cada detalhe importa.',
    bio: 'Sou estudante de Sistemas de Informação, apaixonado por desenvolvimento de software e tecnologia.\n\nAcredito que programar vai muito além de escrever código, é encontrar soluções criativas para problemas reais e impactar a vida das pessoas com sistemas inteligentes e funcionais.\n\nNo back-end, trabalho com Node.js, Express, MySQL, MongoDB e Git. No front-end, atuo com React e TypeScript.',
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
    { name: 'TypeScript', icon: typescriptIcon, category: 'LINGUAGENS'},
    { name: 'JavaScript', icon: javascriptIcon, category: 'LINGUAGENS'},
    { name: 'HTML', icon: htmlIcon, category: 'LINGUAGENS'},
    { name: 'CSS', icon: cssIcon, category: 'LINGUAGENS'},
    { name: 'React', icon: reactIcon, category: 'FRONT-END'},
    { name: 'Node.js', icon: nodejsIcon, category: 'BACK-END'},
    { name: 'Express', icon: expressIcon, category: 'BACK-END'},
    { name: 'MySQL', icon: mysqlIcon, category: 'BANCO DE DADOS'},
    { name: 'MongoDB', icon: mongodbIcon, category: 'BANCO DE DADOS'},
    { name: 'FireBird', icon: firebirdIcon, category: 'BANCO DE DADOS'},
    { name: 'Docker', icon: dockerIcon, category: 'DEVOPS / INFRA'},
    { name: 'Git', icon: gitIcon, category: 'DEVOPS / INFRA'},
    { name: 'GitHub', icon: githubIcon, category: 'DEVOPS / INFRA'},
    { name: 'VS Code', icon: vscodeIcon, category: 'FERRAMENTAS'},
    { name: 'Cursor', icon: cursorIcon, category: 'FERRAMENTAS'},
  ],

  projects: [
    {
      id: 'projeto-1',
      title: 'League Supply - Artigos Esportivos',
      description: 'Pagina de E-commerce focada em vendas de artigos esportivos. Utilizado React e Node.js, junto com JWT e Cloudflare para segurança',
      tags: ['React', 'API Rest', 'Node.js', 'Express', 'MVC', 'MongoDB', 'Mongoose', 'JWT' , 'Cloudflare'],
      liveUrl: 'https://league-supply-nu.vercel.app/',
      repoUrl: 'https://github.com/Caua-Ricken/League-Supply',
      image: leagueSupply,
      featured: true,
    },
    {
      id: 'projeto-2',
      title: 'Rota Livre',
      description: 'Planejador de viagens que permite explorar destinos, consultar o clima, estimar gastos e salvar seus planos de viagem.',
      tags: ['TypeScript', 'React', 'API Rest'],
      liveUrl: 'https://caua-ricken.github.io/Rota-Livre/',
      repoUrl: 'https://github.com/Caua-Ricken/Rota-Livre',
      image: rotalivre,
      featured: false,
    },
    {
      id: 'projeto-3',
      title: 'API-Gestão de Usuários',
      description: 'API REST para gerenciamento de usuários, com cadastro, consultas paginadas, atualização e exclusão. Desenvolvida com Node.js, TypeScript, Express e MySQL, utiliza Prisma, validações com Zod, testes automatizados, logs estruturados e Docker Compose.',
      tags: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'MySQL', 'Docker', 'Vitest', 'Zod'],
      repoUrl: 'https://github.com/Caua-Ricken/API-gestao-usuarios',
      image: api,
      featured: false,
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
      skills: ['Node.JS', 'Express', 'MySQL', 'MongoDB', 'MVC']
    },
    {
      id: 'certificado-2',
      name: 'Curso de React JS',
      institution: 'Hora de codar',
      year: 2026,
      workload: '36 horas',
      url:  `${import.meta.env.BASE_URL}Certificado-React.pdf`,
      skills: ['React', 'React-Router', 'Hooks', 'Context-API']
    },
    {
      id: 'certificado-3',
      name: 'Curso de SQL com Firebird',
      institution: 'Udemy',
      year: 2026,
      workload: '7 horas',
      url:  `${import.meta.env.BASE_URL}Certificado-Firebird.pdf`,
      skills: ['Firebird', 'IbExpert']
    },
    {
      id: 'certificado-4',
      name: 'Curso de JavaScript',
      institution: 'Hora de Codar',
      year: 2026,
      workload: '20 horas',
      url:  `${import.meta.env.BASE_URL}Certificado - javascript.pdf`,
      skills: ['JavaScript', 'DOM', 'Fetch', 'API']
    },
  ],
};
