import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  CommentsDocument,
  PostDocument,
  useAdjacentPostsQuery,
  useCommentsQuery,
  usePostQuery,
} from '../../generated/graphql'
import { client, ssrCache } from '../../lib/urql'

import { useRouter } from 'next/router'
import Loader from '../../components/blog/Loader'
import PostDetail from '../../components/blog/PostDetail'
import Author from '../../components/blog/Author'
import CommentsForm from '../../components/blog/CommentsForm'
import Comments from '../../components/blog/Comments'
import Categories from '../../components/blog/Categories'
import AdjacentPosts from '../../sections/AdjacentPosts'
import SimilarPosts from '../../components/blog/SimilarPosts'

const Post = ({ slug }) => {
  const [
    {
      data: { post },
    },
  ] = usePostQuery({
    variables: {
      slug,
    },
  })

  const [
    {
      data: { comments },
    },
  ] = useCommentsQuery({
    variables: {
      slug,
    },
  })

  const [{ data }] = useAdjacentPostsQuery({
    variables: {
      slug: post.slug,
      createdAt: post.createdAt,
    },
  })

  const categories = post.categories.map((item) => item.slug)

  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="w-full pb-8 px-4 pt-36 bg-baseGray400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail
            post={{
              imageUrl: post.featuredImage.url,
              title: post.title,
              author: {
                name: post.author.name,
                imageUrl: post.author.photo.url,
              },
              date: new Date(post.date).toDateString(),
              content: post.content.html,
              categories: post.categories,
            }}
          />
          <Author
            author={{
              name: post.author.name,
              imageUrl: post.author.photo.url,
              bio: post.author.bio,
            }}
          />
          <AdjacentPosts next={data?.next[0]} previous={data?.previous[0]} />
          <CommentsForm slug={post.slug} />
          <Comments comments={comments} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:top-24 lg:sticky">
            <SimilarPosts slug={post.slug} categories={categories} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await Promise.all([
    client.query(PostDocument, { slug: params.slug }).toPromise(),
    client.query(CommentsDocument, { slug: params.slug }).toPromise(),
  ])

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params.slug,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
