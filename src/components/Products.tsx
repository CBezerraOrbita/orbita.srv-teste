import React from 'react'
import Image from 'next/image'
import google1 from '../assets/google1.png'
import google2 from '../assets/google2.png'

const Products = () => {
  return (
    <div className="w-screen py-20 relative">
      <div className="h-full flex justify-center flex-col items-center mb-8">
        <h1
          className="text-3xl md:text-5xl lg:text-5xl  font-bold text-left text-sky-700
                      lg:leading-[1] py-4"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Produtos
        </h1>

        <div className="">
          <p
            className="text-base md:text-base lg:text-base text-neutral-600 text-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Conheça os produtos que disponibilizamos para transformar seu
            negócio.
          </p>
        </div>
      </div>
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-24">
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center   rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center py-4">
                  <Image src={google1} alt="Product" />
                </div>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Um pacote com tudo que você precisa para trabalhar melhor e de
                  modo integrado no seu computador, smartphone ou tablet.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl  flex flex-col items-center justify-center   rounded-3xl">
            <div className="w-full max-w-6xl  flex flex-col items-center justify-center gap-3 px-8 py-4 ">
              <div className="h-full">
                <div className="flex justify-center  py-4">
                  <Image src={google2} alt="Product" />
                </div>
              </div>
              <div className="py-4">
                <p
                  className="text-base md:text-base lg:text-base text-black text-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Um pacote com tudo que você precisa para melhorar seu processo
                  educacional e prepara-lo para a era digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
