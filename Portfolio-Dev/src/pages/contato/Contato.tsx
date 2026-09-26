import { useState } from 'react'
import type { FormEvent } from 'react'
import { portfolioData } from '../../data/dados'
import './Contato.css'

const Contato = () => {
  const { name, email, whatsapp } = portfolioData.profile
  const [sender, setSender] = useState('')
  const [message, setMessage] = useState('')

  const phone = whatsapp?.replace(/\D/g, '') ?? ''

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nome = sender.trim();
    const mensagem = message.trim();

    if(!nome || !mensagem) {
      window.alert('Preencha o seu nome e sua mensagem')
      return
    };

    const submitter = (e.nativeEvent as SubmitEvent).submitter
    const destino =
      submitter instanceof HTMLButtonElement
        ? submitter.value
        : 'email'

    const texto = `Olá, ${name}! Meu nome é ${nome}.\n\n${mensagem}`

    if (destino === 'whatsapp' && phone) {
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`,
        '_blank',
      )
    } else {
      const assunto = encodeURIComponent(`Contato pelo portfólio — ${nome}`)

      window.location.href =
        `mailto:${email}?subject=${assunto}&body=${encodeURIComponent(texto)}`
    }
  }

  return (
    <section id="contato" className="contato">
      <div className="contato__content">
        <header className="contato__heading">
          <span className="contato__eyebrow">VAMOS CONVERSAR</span>
          <h2>Entre em contato<span>.</span></h2>
          <p>Tem uma ideia, um projeto ou uma oportunidade? Me envie uma mensagem.</p>
        </header>

        <form className="contato__form" onSubmit={handleSubmit}>
          <div className="contato__field">
            <label htmlFor="contato-nome">Seu nome</label>
            <input
              id="contato-nome"
              placeholder="Como posso te chamar?"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              required
            />
          </div>

          <div className="contato__field">
            <label htmlFor="contato-mensagem">Sua mensagem</label>
            <textarea
              id="contato-mensagem"
              rows={6}
              placeholder="Conte um pouco sobre o que você tem em mente..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="contato__actions">
            {phone && (
              <button
                className="contato__button contato__button--primary"
                type="submit"
                value="whatsapp"
              >
                Enviar pelo WhatsApp <span aria-hidden="true">↗</span>
              </button>
            )}

            <button
              className="contato__button contato__button--outline"
              type="submit"
              value="email"
            >
              Enviar por e-mail <span aria-hidden="true">↗</span>
            </button>
          </div>

          <p className="contato__note">
            A mensagem será aberta no WhatsApp ou no aplicativo de e-mail para você revisar e enviar.
          </p>
        </form>

        <p className="contato__email">
          Ou escreva diretamente para <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </section>
  )
}

export default Contato