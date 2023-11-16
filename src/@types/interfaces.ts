import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

type LinkButton = {
  name: string
  href: string
}

type PostWidgetType = {
  id: string
  title: string
  featuredImage: {
    url: string
  }
  date: string
  slug: string
}

type Category = {
  slug: string
  name: string
}

type Comment = {
  id: string
  name: string
  createdAt: string
  comment: string
}

export interface BoxImageProps {
  title: ReactNode
  description: ReactNode
  image: StaticImageData
  button?: LinkButton
}

export interface SocialIconsProps {
  icon: ReactNode
  href: string
}

export interface CardProps {
  icon: ReactNode
  title: string
  description: string
}

export interface CoverPagesProps {
  image: string
  title: ReactNode
  subtitle: ReactNode
}

interface Slide {
  id: string
  image: StaticImageData
  title: string
  description: string
}

export interface SliderProps {
  content: Slide[]
}

export interface PostWidgetProps {
  posts: PostWidgetType[]
}

export interface PostDetailProps {
  post: {
    imageUrl: string
    title: string
    author: {
      name: string
      imageUrl: string
    }
    date: string
    content: string
    categories: Category[]
  }
}

export interface ActiveLinkSecondaryProps {
  children: ReactNode
  href: string
}

export interface CategoryProps {
  categories: Category[]
}

export interface PostCardProps {
  post: {
    title: string
    imageUrl: string
    href: string
    description: string
    author: {
      name?: string
      imageUrl?: string
    }
    date: string
  }
}

export interface AuthorProps {
  author: {
    name: string
    imageUrl?: string
    bio?: string
  }
}

export interface CommentsProps {
  comments: Comment[]
}

export type AdjacentPost = {
  title: string
  slug: string
  date: string
  featuredImage: {
    url: string
  }
}

export interface AdjacentPostsProps {
  next: AdjacentPost
  previous: AdjacentPost
}

export type FeaturedPostCard = {
  title: string
  slug: string
  date: string
  createdAt: string
  featuredImage: {
    url: string
  }
  author: {
    name: string
    photo: {
      url?: string
    }
  }
}

export interface FeaturedPostCardProps {
  post: {
    title: string
    slug: string
    date: string
    featuredImage: {
      url: string
    }
    author: {
      name: string
      photo: {
        url?: string
      }
    }
  }
}

export interface FeaturedPostsProps {
  posts: FeaturedPostCard[]
}
