import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FeaturedPostCard from '../components/blog/FeaturedPostCard'
import { useFeaturedPostQuery } from '../generated/graphql'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const FeaturedPosts = () => {
  const [result] = useFeaturedPostQuery()

  const ArrowFix = (arrowProps: {
    [x: string]: any
    carouselState?: any
    children: any
  }) => {
    const { carouselState, children, ...restArrowProps } = arrowProps
    return <span {...restArrowProps}> {children} </span>
  }

  const customLeftArrow = (
    <div className="arrow-btn absolute left-0 cursor-pointer rounded-full bg-accentLight py-3 px-4 text-center hover:bg-accent-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-full text-accentDark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  )

  const customRightArrow = (
    <div className="arrow-btn absolute right-0 cursor-pointer rounded-full bg-accentLight py-3 px-4 text-center hover:bg-accent-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6  w-full text-accentDark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto">
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
  )
}

export default FeaturedPosts
