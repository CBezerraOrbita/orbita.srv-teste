import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { Calendar, MapPin } from 'phosphor-react'

interface Event {
  id: string
  name: string
  description?: string
  local: string
  date: string
  imageCover: {
    url: string
  }
}

interface EventSliderProps {
  content: Event[]
}

const EventSlider = ({ content }: EventSliderProps) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {content.map((item) => {
          const { id, imageCover, name, description, local, date } = item
          return (
            <SwiperSlide key={id}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 my-12 lg:my-0">
                <div className="w-full h-full lg:w-[500px] lg:h-[400px] ">
                  <Image
                    className="rounded-2xl object-cover"
                    src={imageCover.url}
                    alt={name}
                    width={500}
                    height={400}
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h3 className="text-xl mb-8 font-medium">{name}</h3>

                  <p className="text-md text-baseGray200">{description}</p>

                  <div className="flex items-center text-accent py-4 mt-4">
                    <MapPin size={24} weight="duotone" />
                    <span className="ml-2 font-medium font-display text-baseWhite">
                      {local}
                    </span>
                  </div>

                  <div className="flex items-center text-accent">
                    <Calendar size={24} weight="duotone" />
                    <span className="ml-2 font-medium font-display text-baseWhite">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default EventSlider
