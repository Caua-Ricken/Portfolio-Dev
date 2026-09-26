export type SocialLink = {
  label: string
  url: string
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
    avatar: '/img-caua.jpeg',
    resumeUrl: '/Curriculo.pdf',
  },

  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Caua-Ricken' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cauaricken' },
  ],

  skills: [
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Express', icon: '/icons/express.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'FireBird', icon: '/icons/firebird.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
  ],

  projects: [
    {
      id: 'projeto-1',
      title: 'Bikes Store - Ecommerce de Bicicletas',
      description: 'Pagina de E-commerce focada em vendas de bicicletas premium. Utilizado React e Node.js, junto com JWT para segurança',
      tags: ['React', 'API Rest', 'Node.js', 'Express', 'MVC', 'MySQL', 'JWT'],
      repoUrl: 'https://github.com/Caua-Ricken/motorcycle/tree/main/Motorcycle',
      image: '/Bike Store.png',
      featured: true,
    },
    {
      id: 'projeto-2',
      title: 'Wine Hub',
      description: 'Página para apresentação e venda de vinhos, desenvolvida com HTML, CSS e JavaScript. O usuário pode explorar os produtos disponíveis e realizar compras diretamente pelo site.',
      tags: ['CSS', 'JavaScript'],
      liveUrl: 'https://caua-ricken.github.io/WineHub/',
      repoUrl: 'https://github.com/Caua-Ricken/WineHub',
      image: '/wine hub.png',
      featured: true,
    },
    {
      id: 'projeto-3',
      title: 'App de Previsão do Tempo',
      description: 'Aplicação web de previsão do tempo desenvolvida com React e JavaScript. O usuário pode buscar qualquer cidade e visualizar informações meteorológicas em tempo real.',
      tags: ['React', 'API', 'JavaScript'],
      liveUrl: 'https://caua-ricken.github.io/weather/',
      repoUrl: 'https://github.com/Caua-Ricken/weather',
      image: '/tempo.png',
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
};
