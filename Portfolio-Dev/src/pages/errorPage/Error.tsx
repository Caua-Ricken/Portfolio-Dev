import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import './Error.css'

const Error = () => {
  const error = useRouteError()
  const isNotFound = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="error-page">
      <header className="error-header">
        <Link className="error-brand" to="/">
          <span className="error-brand-symbol">&lt;/&gt;</span>
          <span>PORTFÓLIO<span className="error-brand-caption">DESENVOLVIMENTO & CRIATIVIDADE</span></span>
        </Link>
        <span className="error-header-note">CADA DETALHE IMPORTA.</span>
      </header>

      <main className="error-main">
        <div className="error-dial" aria-hidden="true">
          <div className="error-dial-inner">
            <span className="error-dial-label">FORA DA ROTA</span>
            <span className="error-number">{isNotFound ? '404' : 'OPS'}</span>
            <span className="error-dial-bottom">UM INSTANTE PARA RECOMEÇAR</span>
          </div>
        </div>

        <div className="error-copy">
          <p className="error-eyebrow">{isNotFound ? 'PÁGINA NÃO ENCONTRADA' : 'ALGO SAIU DO ESPERADO'}</p>
          <h1>{isNotFound ? <>Nem todo caminho<br />leva ao destino.</> : <>Uma pausa.<br />Um novo começo.</>}</h1>
          <p className="error-description">
            {isNotFound
              ? 'A página que você procura não está por aqui. Mas o próximo passo pode levar a algo extraordinário.'
              : 'Não foi possível carregar esta página. Volte ao início para continuar explorando o portfólio.'}
          </p>
          <Link className="error-home" to="/">
            VOLTAR AO INÍCIO <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>

      <footer className="error-footer">
        <span>CÓDIGO COM PROPÓSITO.</span>
        <span className="error-footer-status"><span aria-hidden="true" /> A EXPLORAÇÃO CONTINUA</span>
      </footer>
    </div>
  )
}

export default Error
