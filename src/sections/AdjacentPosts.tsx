import React from 'react'
import { AdjacentPostsProps } from '../@types/interfaces'
import AdjacentPostCard from '../components/blog/AdjacentPostCard'

const AdjacentPosts = ({ next, previous }: AdjacentPostsProps) => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-8">
      <>
        {previous && (
          <div
            className={`${
              next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'
            } adjacent-post relative h-72 rounded-lg`}
          >
            <AdjacentPostCard post={previous} position="LEFT" />
          </div>
        )}
        {next && (
          <div
            className={`${
              previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'
            } adjacent-post relative h-72 rounded-lg`}
          >
            <AdjacentPostCard post={next} position="RIGHT" />
          </div>
        )}
      </>
    </div>
  )
}

export default AdjacentPosts
