import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
const Section = () => {
  return (
    <div className="w-screen py-20 relative  ">
      <div className=" bg-[url('../assets/bg-section.png')] h-full mx-auto">
        <div className="container mx-auto h-full flex flex-col sm:flex-row items-center justify-between ">
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-5">
            <div className=" max-w-8xl flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
              <div className=" max-w-8xl flex flex-col items-baseline justify-center gap-3 px-8 py-4 ">
                <div className="h-full">
                  <h1
                    className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Sobre nós
                  </h1>
                </div>
                <div className="py-4">
                  <p
                    className="text-base md:text-base lg:text-base text-black text-left"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Como uma órbita que percorre ao redor de um corpo sob
                    influência de uma força, nós impulsionamos a inovação e
                    desenvolvimento em um sistema de parceria no ecossistema de
                    negócios da Amazônia. <br />
                    <br /> Nosso trabalho é focado em tecnologia e inteligência
                    de negócios, colaborando com empresas e instituições em
                    projetos de desenvolvimento através de consultorias
                    especializadas e softwares de ponta, gerando novos caminhos
                    e oportunidades. É fato que somos um problem solver -
                    geramos soluções e oportunidades, ligando problemas a
                    respostas por meio de conexões.
                    <br />
                    <br /> É aqui que enxergamos o potencial de valorização e
                    desenvolvimento do ambiente empreendedor. Acreditamos que os
                    negócios da área merecem mais espaço, oportunidades, e que
                    podem sair da oscilação e alcançar a estabilidade.
                    <br />
                    <br /> Inovar e abrir espaço para oportunidades de negócios
                    nesse mercado são nossos objetivos. Ajudamos na trajetória
                    de empresas que estão atrás de novos desafios e querem
                    continuar crescendo em seu universo.
                  </p>
                </div>
                <div
                  className="py-4"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="btn btn-lg rounded-full bg-sky-700 hover:bg-sky-600  text-white transition-all duration-300 shadow-2xl"
                  >
                    Conheça os Programas
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="w-full max-w-6xl flex flex-col items-center justify-start bg-sky-700 rounded-3xl">
              <div className="w-full max-w-6xl flex flex-col items-baseline justify-center gap-3 px-8 py-4 ">
                <div className="h-full">
                  <h1
                    className="text-3xl md:text-5xl lg:text-5xl  font-bold text-left text-white lg:leading-[1] py-4"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Nossas Expertises
                  </h1>
                </div>
                <div className="py-4">
                  <p
                    className="text-base md:text-base lg:text-base text-white text-left"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Somos especializados na identificação de fontes de recursos
                    para investimentos privados e públicos, planejamento
                    estratégico, elaboração de cartas consultas de projetos
                    estruturantes e de desenvolvimento de cadeias produtivas,
                    bem como no gerenciamento e apoio técnico na prestação de
                    contas dos recursos captados.
                  </p>
                </div>
                <div
                  className="py-4"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="btn btn-lg mb-4 rounded-full border-solid border-2 border-white hover:bg-white hover:text-sky-700 text-white transition-all duration-300 shadow-2xl"
                  >
                    Conheça os Programas
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
