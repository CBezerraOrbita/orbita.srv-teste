import React from 'react'
import EventSlider from '../components/EventSlider'
import { useEventsQuery } from '../generated/graphql'

const Events = () => {
  const [result] = useEventsQuery()

  console.log(result.data?.events)

  return (
    <div className=" w-full ">
      <div className="max-w-7xl mx-auto py-12 px-12 bg-accentDark rounded-2xl shadow-md">
        <h2
          className="pb-4 text-center text-3xl font-medium"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Próximos eventos
        </h2>
        {!result.fetching && <EventSlider content={result.data?.events} />}
      </div>
    </div>
  )
}

export default Events
