import React from 'react'
// import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
// import heroImg from '../assets/hero-img.png'
// import Image from 'next/image'
const Hero = () => {
  return (
    <div className=" relative mt-[10rem] sm:mt-[12rem] mb-10 ">
      <div className=" container mx-auto ">
        <div className="flex flex-col h-[34rem] flex-wrap sm:flex-row gap-16 sm:gap-5 bg-cover bg-center bg-fit rounded-3xl  w-full justify-items-center justify-center bg-[url('../assets/bg-hero.png')]">
          <div className=" bg-sky-700 bg-opacity-95 rounded-3xl ">
            <div className="px-8 py-4 md:py-28 sm:px-24 h-[34rem]">
              <div className="">
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-white lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Suporte completo em todos os passos da sua jornada para a
                  inovação
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base text-center md:text-base lg:text-base text-white "
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Na nossa jornada em direção a um futuro mais eficiente e
                  conectado, estamos orgulhosos de apresentar algumas das
                  tecnologias revolucionárias que desenvolvemos para tornar a
                  vida dos municípios e organizações mais fácil e eficaz. Estas
                  soluções prometem simplificar processos, melhorar a
                  comunicação e proporcionar segurança. Descubra como a nossa
                  startup está transformando a maneira como você interage com o
                  mundo ao seu redor.
                </p>
              </div>
              <div
                className="py-4"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="w-full flex justify-center">
                  <Link
                    href="/contato"
                    className="btn btn-lg rounded-full border-solid border-2 border-white hover:bg-white hover:text-sky-700 text-white transition-all duration-300 shadow-2xl"
                  >
                    Conheça Nossos Programas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
            className="w-full max-w-6xl flex flex-col items-center sm:items-end justify-center"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <Image
              src={heroImg}
              alt=""
              className="w-[350px] sm:w-[504px] "
              priority
            />
          </div> */}
    </div>
  )
}

export default Hero
