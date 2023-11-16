import React, { useState } from 'react'
import { Check, EnvelopeSimple, Paperclip, UserCircle } from 'phosphor-react'

const FormContact = () => {
  const [submit, setSubmit] = useState(false)
  const [formData, setFormData] = useState({
    'entry.1214311574': '',
    'entry.443628088': '',
    'entry.340357410': '',
  })

  const handleInputData =
    (input: string) => (e: { target: { value: any } }) => {
      const { value } = e.target

      setFormData((prevState) => ({
        ...prevState,
        [input]: value,
      }))
    }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    setSubmit(true)

    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSetfG8IPB7AWsDekMUOQST231ePkelqyrzfdHSEzBODkQ0qNw/formResponse?entry.1214311574=${formData['entry.1214311574']}&entry.443628088=${formData['entry.443628088']}&entry.340357410=${formData['entry.340357410']}`

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    } catch (e: any) {
      console.log('Enviado')
    }
  }

  return (
    <div className="h-full  w-full py-12 lg:py-0">
      <div className="w-full h-full mx-auto max-w-6xl flex flex-col gap-4 items-center justify-center">
        {submit ? (
          <div className="h-20 flex items-center justify-center gap-2 px-3 text-accentMid font-display text-2xl">
            <p>Cadastro realizado com sucesso</p>
            <Check size={35} weight="duotone" />
          </div>
        ) : (
          <form
            className="flex flex-col gap-3 w-full  px-5 py-5  rounded-2xl"
            onSubmit={handleSubmit}
            target="_self"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="flex gap-2 items-center py-2 px-4 bg-baseGray100 rounded-full text-sky-700 ">
              <UserCircle size={25} weight="duotone" />
              <input
                type="text"
                name="entry.1214311574"
                required
                onChange={handleInputData('entry.1214311574')}
                value={formData['entry.1214311574']}
                placeholder="Seu nome"
                className="bg-transparent border-none border-r-baseGray100 border-l-baseGray100 border-t-baseGray100 border-2 focus:ring-0 focus:outline-none focus:border-green-900 focus:rounded-md caret-accentDark w-[85%]"
              />
            </div>
            <div className="flex gap-2 items-center py-2 px-4 bg-baseGray100 rounded-full text-sky-700">
              <EnvelopeSimple size={25} weight="duotone" />
              <input
                type="email"
                required
                name="entry.443628088"
                onChange={handleInputData('entry.443628088')}
                value={formData['entry.443628088']}
                placeholder="Seu e-mail"
                className="bg-transparent border-none border-r-baseGray100 border-l-baseGray100 border-t-baseGray100 border-2 focus:ring-0 focus:outline-none  focus:border-green-900  focus:rounded-md caret-accentDark w-[85%]"
              />
            </div>
            <div className="flex justify-start gap-2 items-start py-2 px-4 bg-baseGray100 rounded-2xl text-sky-700">
              <Paperclip size={25} weight="duotone" />
              <textarea
                id=""
                cols={30}
                rows={5}
                required
                name="entry.340357410"
                onChange={handleInputData('entry.340357410')}
                value={formData['entry.340357410']}
                placeholder="Sua mensagem"
                className="bg-transparent border-none border-r-baseGray100 border-l-baseGray100 border-t-baseGray100 border-2 focus:ring-0 focus:outline-none  focus:border-green-900  focus:rounded-md caret-accentDark w-[85%]  resize-none"
              />
            </div>
            <button className="btn btn-lgrounded-full border-solid border-2 border-white hover:bg-white hover:text-sky-700 text-white transition-all font-display shadow-md mt-2">
              Enviar
            </button>
          </form>
        )}
        {/* <div className="mt-5 max-w-2xl px-4 mx-auto">
          <p className="text-accentDark text-justify text-sm">
            Ao preencher o formulário, você está autorizando o Amazônia Lab a
            enviar comunicações. Respeitamos a sua privacidade, você pode
            alterar suas preferências, confira a nossa{' '}
            <Link
              href="politica-de-privacidade"
              className="font-medium text-accentDark hover:text-accent-hover "
            >
              Política de Privacidade
            </Link>
            .
          </p>
          <p className="text-baseGray700 text-justify text-sm mt-3">
            Prometemos não utilizar suas informações de contato para enviar
            qualquer tipo de SPAM.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default FormContact
