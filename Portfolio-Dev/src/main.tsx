import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'

//layout
import MainLayout from './layout/MainLayout'
//error page
import Error from './pages/errorPage/Error'
//pages
import Inicio from './pages/inicio/Inicio'
import Sobre from './pages/sobre/Sobre'
import Skills from './components/skills/Skills'
import Certificados from './components/certificados/Certificados'
import Projetos from './pages/projetos/Projetos'
import Contato from './pages/contato/Contato'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <main>
            <Inicio />
            <Sobre />
            <Skills />
            <Projetos />
            <Certificados />
            <Contato />
          </main>
        ),
      },
    ],
  },
],
{
  basename: import.meta.env.BASE_URL,
},
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
