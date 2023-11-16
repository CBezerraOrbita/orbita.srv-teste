import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import PostCard from '../../components/blog/PostCard'
import Loader from '../../components/blog/Loader'
import { client, ssrCache } from '../../lib/urql'
import {
  useCategoryPostsQuery,
  CategoryPostsDocument,
  CategoriesDocument,
} from '../../generated/graphql'
import Categories from '../../components/blog/Categories'

const CategoryPost = ({ slug }) => {
  const [
    {
      data: { postsConnection },
    },
  ] = useCategoryPostsQuery({
    variables: {
      slug,
    },
  })

  const posts = postsConnection.edges

  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="w-full bg-baseGray400">
      <div className="container mx-auto max-w-7xl pt-32 pb-8 px-4 grid grid-cols-1 gap-8 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map((post) => (
            <PostCard
              key={post.node.slug}
              post={{
                title: post.node.title,
                href: `/${post.node.slug}`,
                description: post.node.excerpt,
                author: {
                  name: post.node.author.name,
                  imageUrl: post.node.author.photo.url,
                },
                imageUrl: post.node.featuredImage.url,
                date: new Date(post.node.date).toDateString(),
              }}
            />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-8 lg:top-24 lg:sticky ">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPost

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await Promise.all([
    client.query(CategoryPostsDocument, { slug: params.slug }).toPromise(),
    client.query(CategoriesDocument).toPromise(),
  ])

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params.slug,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  }
}
