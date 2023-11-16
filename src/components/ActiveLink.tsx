import React, { ReactNode, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps {
  name: ReactNode
  href: string
}

const ActiveLink = ({ name, href }: ActiveLinkProps) => {
  const router = useRouter()
  const style =
    router.asPath === href
      ? 'text-sky-700 font-medium cursor-pointer relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-100 before:bg-sky-700'
      : 'text-gray-900 hover:text-sky-700 font-medium cursor-pointer relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-sky-700 before:transition hover:before:scale-x-100'

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={style}>
      {name}
    </a>
  )
}

export default ActiveLink
