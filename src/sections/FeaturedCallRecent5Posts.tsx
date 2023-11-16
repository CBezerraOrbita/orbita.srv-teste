import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  ArrowFix,
  customLeftArrow,
  customRightArrow,
} from '../components/ArrowsGreen'
import FeaturedPostCard from '../components/blog/FeaturedPostCard'
import { responsive } from '../data/utils'
import { useFeaturedCallRecent5PostsQuery } from '../generated/graphql'

const FeaturedCallRecent5Posts = () => {
  const [result] = useFeaturedCallRecent5PostsQuery()

  return (
    <div className=" w-full ">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2
          className="pb-12 text-center text-green-900 text-3xl font-medium"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Últimas postagens do Blog
        </h2>
        {!result.fetching && (
          <Carousel
            infinite
            customLeftArrow={<ArrowFix>{customLeftArrow}</ArrowFix>}
            customRightArrow={<ArrowFix>{customRightArrow}</ArrowFix>}
            responsive={responsive}
            itemClass="px-4"
            autoPlay
          >
            {result.data?.posts.map((post) => (
              <FeaturedPostCard
                key={post.slug}
                post={{
                  title: post.title,
                  slug: post.slug,
                  date: new Date(post.date).toDateString(),
                  imageUrl: post.featuredImage.url,
                  authorName: post.author?.name,
                  authorPhoto: post.author?.photo.url,
                }}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  )
}

export default FeaturedCallRecent5Posts
