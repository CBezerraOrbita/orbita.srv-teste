import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from 'phosphor-react'

import logo from '../assets/logo-1.svg'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <div className="w-full py-8 overflow-x-hidden">
      <div
        className="flex flex-col-reverse lg:flex-row gap-4 w-full mx-auto max-w-6xl my-8 "
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex flex-col gap-8 p-4 max-lg:items-center w-full">
          <Image src={logo} alt="" width={166} />
          <div className="flex flex-col justify-center w-full max-lg:items-center">
            <div className="text-baseGray500 flex gap-2">
              <SocialIcons
                icon={<InstagramLogo size={35} weight="duotone" />}
                href="https://www.instagram.com/amazonialab/"
              />

              <SocialIcons
                icon={<YoutubeLogo size={35} weight="duotone" />}
                href="https://www.linkedin.com/company/amaz%C3%B4nia-lab/"
              />

              <SocialIcons
                icon={<FacebookLogo size={35} weight="duotone" />}
                href="https://www.facebook.com/amazonialab/photos/"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-start p-4 w-full">
          <h4 className="text-sky-700 font-bold">Institucional</h4>
          <Link
            href="trabalhe-conosco"
            className="font-medium block text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Home
          </Link>
          <Link
            href="politica-de-privacidade"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Serviços
          </Link>
          <Link
            href="newsletter"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            A Órbita
          </Link>
          <Link
            href="newsletter"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Expertise
          </Link>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-start p-4 w-full">
          <h4 className="text-sky-700 font-bold">Features</h4>
          <Link
            href="trabalhe-conosco"
            className="font-medium block text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Soluções
          </Link>
          <Link
            href="politica-de-privacidade"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Parceiros
          </Link>
          <Link
            href="newsletter"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Redes Sociais
          </Link>
          <Link
            href="newsletter"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Contato
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-start p-4 w-full">
          <h4 className="text-sky-700 font-bold">Contatos</h4>
          <Link
            href="trabalhe-conosco"
            className="font-medium block text-neutral-600 hover:text-sky-600 mt-4 "
          >
            contato@orbita.srv.br
          </Link>
          <Link
            href="politica-de-privacidade"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            (91) 99282-1504
          </Link>
          <Link
            href="newsletter"
            className="font-medium text-neutral-600 hover:text-sky-600 mt-4 "
          >
            Avenida Governador José Malcher, 153, Nazaré. Belém-PA
          </Link>
        </div>
      </div>

      <div
        className="bg-transparent"
        data-aos="fade-left"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <p
          className="text-baseGray700 text-center text-sm font-medium mt-2"
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Desenvolvido por
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-baseWhite hover:bg-sky-600 p-1 rounded"
          >
            Órbita Tecnologia
          </a>
        </p>
        <div className="flex items-center justify-center">
          <Copyright size={16} color="#fff" weight="duotone" />
          <span className="text-baseGray700 text-sm font-medium">
            2023 | Todos os direitos reservados
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
