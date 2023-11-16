import React from 'react'
// import { Link as ScrollLink } from 'react-scroll'
import FormContact from '../components/FormContact'
// import heroImg from '../assets/hero-img.png'
// import Image from 'next/image'
const Contact = () => {
  return (
    <div className=" relative mb-10 ">
      <div className=" container mx-auto">
        <div className="flex flex-col flex-wrap sm:flex-row gap-16 sm:gap-5 rounded-3xl  w-full justify-items-center justify-center ">
          <div className=" bg-sky-700 bg-opacity-95 rounded-3xl w-full">
            <div className="px-8 py-4 sm:py-10 sm:px-24  flex flex-col items-center justify-center ">
              <div className="">
                <h1
                  className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-white lg:leading-[1] py-4"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Entre em contato conosco
                </h1>
              </div>

              <div
                className="w-full sm:w-[35rem] h-full  flex flex-col gap-4 items-center justify-center my-10 lg:my-0"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <FormContact />
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

export default Contact
