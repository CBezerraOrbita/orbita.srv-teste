import React from 'react'

import WorkWithUsFormCard from '../components/WorkWithUsFormCard'
import { useWorkWithUsQuery } from '../generated/graphql'

const WorkWithUsSection = () => {
  const [result] = useWorkWithUsQuery()

  return (
    <div className="w-full bg-gradient-to-r from-accentLight/30 to-baseGray200">
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col gap-4 items-center">
        <h2
          className="pb-12 text-center text-3xl font-medium"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Vagas abertas
        </h2>
        {!result.fetching && (
          <>
            {result.data?.workWithuses.map((work) => (
              <WorkWithUsFormCard
                key={work.id}
                title={work.title}
                description={work.description}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default WorkWithUsSection
