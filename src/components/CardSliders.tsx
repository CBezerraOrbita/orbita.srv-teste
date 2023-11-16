import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import icon1 from '../assets/icons/icon1.svg'
import icon2 from '../assets/icons/icon2.svg'
import icon3 from '../assets/icons/icon3.svg'
import icon4 from '../assets/icons/icon4.svg'
import icon5 from '../assets/icons/icon5.svg'

const CardSliders = () => {
  const maxScrollWidth = useRef<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const carousel = useRef<HTMLDivElement | null>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction: 'prev' | 'next'): boolean => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])

  return (
    <div
      className="container carousel my-12 mx-auto"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className=" hover:bg-sky-600/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-sky-600/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-10 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          <div className="carousel-item text-center relative w-64 h-[24rem] snap-start">
            <div className="h-[24rem] w-full aspect-square  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "></div>
            <div className="h-[24rem] pt-8 flex flex-col items-center  w-full aspect-square  absolute top-0 left-0 transition-opacity duration-300  bg-sky-700  z-10 rounded-lg ">
              <Image src={icon1} alt="logotipo" width={50} className="mb-3" />
              <h3 className="text-white py-6 px-3 text-center text-2xl font-semibold tracking-tight">
                Consultoria
              </h3>
              <p className="text-white px-3">
                Temos expertise de mais de 10 anos e ajudamos organizações na
                resolução de problemas e na transformação de seus processos.
              </p>
            </div>
          </div>
          <div className="carousel-item text-center relative w-64 h-[24rem] snap-start">
            <div className="h-[24rem] w-full aspect-square  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "></div>
            <div className="h-[24rem] pt-8 flex flex-col items-center  w-full aspect-square  absolute top-0 left-0 transition-opacity duration-300  bg-sky-700  z-10 rounded-lg ">
              <Image src={icon2} alt="logotipo" width={64} className="mb-3" />
              <h3 className="text-white py-6 px-3 text-center text-2xl font-semibold tracking-tight">
                Transformação
              </h3>
              <p className="text-white px-3">
                {' '}
                A Órbita ajuda sua empresa no processo de transformação digital,
                da concepção à execução do projeto.
              </p>
            </div>
          </div>
          <div className="carousel-item text-center relative w-64 h-[24rem] snap-start">
            <div className="h-[24rem] w-full aspect-square  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "></div>
            <div className="h-[24rem] pt-8 flex flex-col items-center  w-full aspect-square  absolute top-0 left-0 transition-opacity duration-300  bg-sky-700  z-10 rounded-lg ">
              <Image src={icon3} alt="logotipo" width={50} className="mb-3" />
              <h3 className="text-white py-6 px-3 text-center text-2xl font-semibold tracking-tight">
                Business Intelligence
              </h3>
              <p className="text-white px-3">
                Utilizamos o Cardan, ferramenta nativa que utiliza tecnologia
                Google para ajudar nossos clientes na tomada de decisão mais
                inteligente.
              </p>
            </div>
          </div>
          <div className="carousel-item text-center relative w-64 h-[24rem] snap-start">
            <div className="h-[24rem] w-full aspect-square  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "></div>
            <div className="h-[24rem] pt-8 flex flex-col items-center  w-full aspect-square  absolute top-0 left-0 transition-opacity duration-300  bg-sky-700  z-10 rounded-lg ">
              <Image src={icon4} alt="logotipo" width={50} className="mb-3" />
              <h3 className="text-white py-6 px-3 text-center text-2xl font-semibold tracking-tight">
                Órbita Educação
              </h3>
              <p className="text-white px-3">
                Incentivamos a aprendizagem através de serviços de Cloud do
                Google que criam ambientes perfeitos para a educação no digital.
              </p>
            </div>
          </div>
          <div className="carousel-item text-center relative w-64 h-[24rem] snap-start">
            <div className="h-[24rem] w-full aspect-square  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "></div>
            <div className="h-[24rem] pt-8 flex flex-col items-center  w-full aspect-square  absolute top-0 left-0 transition-opacity duration-300  bg-sky-700  z-10 rounded-lg ">
              <Image src={icon5} alt="logotipo" width={50} className="mb-3" />
              <h3 className="text-white py-6 px-3 text-center text-2xl font-semibold tracking-tight">
                Programa de Saúde Digital
              </h3>
              <p className="text-white px-3">
                Utilizando serviços do Google Workspace para assistência médica,
                proporcionamos soluções seguras aos profissionais de saúde e
                pacientes.
              </p>
            </div>
          </div>
          {/* {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-[18rem] snap-start"
              >
                <div
                  className="h-[18rem] w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  
                </div>
                <div className="h-[18rem] w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300  bg-sky-700  z-10 rounded-lg ">
                <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                  <h3 className="text-white py-6 px-3 text-center text-2xl font-semibold tracking-tight">
                    {resource.title}
                  </h3>
                  <p className="text-white px-3"> {resource.text}</p>
                </div>
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}

export default CardSliders
