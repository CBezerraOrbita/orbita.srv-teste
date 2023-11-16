import React from 'react'
import Image from 'next/image'
import solution1 from '../assets/solution1.png'
import solution2 from '../assets/solution2.png'
import solution3 from '../assets/solution3.png'
import solution4 from '../assets/solution4.png'
import solution5 from '../assets/solution5.png'
import solution6 from '../assets/solution6.png'
import solution7 from '../assets/solution7.png'
const Features = () => {
  return (
    <div className="w-screen py-20 relative">
      <div className="h-full flex justify-center flex-col items-center mb-8">
        <h1
          className="text-3xl md:text-5xl lg:text-5xl  font-bold text-left text-sky-700
                      lg:leading-[1] py-4"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Soluções
        </h1>

        <div className="">
          <p
            className="text-base md:text-base lg:text-base text-neutral-600 text-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Conheça nossos programas e soluções para a sua organização
          </p>
        </div>
      </div>
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center py-4">
                  <Image src={solution1} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  CARDAN
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  O Cardan é um software voltado para inteligência de negócios,
                  dando suporte para a tomada de decisões e elaboração de
                  estratégias mais assertivas para o setor público e
                  corporações. Utilizando insights e informações para construir
                  produtos e serviços, ele é um gerador de oportunidades e
                  soluções através da inteligência artificial e análise de
                  dados, auxiliando gestores a obterem melhores resultados.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center  py-4">
                  <Image src={solution2} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  AMAZONIA LAB
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Com foco na inovação do empreendedorismo regional, o Amazônia
                  Lab é uma espécie de laboratório aberto ao desenvolvimento de
                  novos projetos, trazendo soluções digitais para empresas e
                  organizações da região amazônica. Ele é a ponte entre a
                  inovação e o dinamismo, encorajando e fortalecendo o
                  ecossistema de negócios e serviços públicos, entregando valor
                  e melhorando a vida de pessoas e comunidades, promovendo o
                  desenvolvimento da Amazônia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full flex mt-8 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center py-4">
                  <Image src={solution7} height={80} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  PEC
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Nossa equipe oferece suporte especializado para o Prontuário
                  Eletrônico do Cidadão (PEC), integrado com o Google Cloud
                  Platform (GCP), assegurando escalabilidade e confiabilidade. O
                  PEC desempenha um papel fundamental no programa Previne
                  Brasil, fortalecendo a atenção primária à saúde, promovendo a
                  prevenção de doenças e melhorando o acesso a serviços de saúde
                  de qualidade em todo o país.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center  py-4">
                  <Image src={solution6} height={80} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  Portal do Contribuinte
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Bem-vindo ao Portal do Contribuinte de Barcarena.
                  Simplificamos a interação com a Prefeitura de Barcarena,
                  oferecendo formulários e serviços online para cidadãos,
                  empresas e servidores públicos, com segurança garantida pelo
                  Firebase. Economize tempo, evite filas e aproveite a
                  eficiência de nossos serviços. Estamos aqui para você!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full flex mt-8 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center  py-4">
                  <Image src={solution3} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  ÓRBITA EDUCAÇÃO DIGITAL
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Utilizando serviços de Cloud do Google, criamos ambientes
                  digitais para nossos clientes de forma perfeita para
                  comunicação entre equipes de professores, aulas não
                  presenciais e aplicações de testes. É o pacote perfeito para
                  clientes que querem trazer a educação digital e remota para o
                  seu dia a dia, e implementar a transformação digital na
                  educação como forma de modernizar os processos de
                  aprendizagem.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center  py-4">
                  <Image src={solution4} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  ÓRBITA SAÚDE DIGITAL
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Utilizando serviços de Cloud do Google criamos ambientes
                  digitais para melhorar o atendimento em saúde com consultas
                  remotas e suporte para telemedicina. É nosso programa focado
                  no combate ao Covid-19 e na medicina continuada para os seus
                  pacientes, munindo médicos e clínicas de ferramentas para
                  atendimento, pesquisa e controle para possibilitar e melhorar
                  o atendimento remoto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full flex mt-8 items-center justify-center lg:justify-between">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center bg-slate-200  rounded-3xl">
            <div className="w-[29.25rem] lg:w-[44rem] max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center  py-4">
                  <Image src={solution5} alt="Solution" />
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-sky-700 lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  DOM
                </h1>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Facilitamos a transparência e o acesso à informação!
                  Oferecemos um serviço completo de publicação de Diários
                  Oficiais do Município, abrangendo o desenvolvimento, suporte e
                  correções. Para prefeituras e cidadãos, simplificamos a
                  publicação, tornando os registros oficiais acessíveis e
                  eficientes. Conte conosco para manter sua administração
                  pública em conformidade e transparente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
