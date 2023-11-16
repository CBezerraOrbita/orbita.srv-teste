import React from 'react'
import { SocialIconsProps } from '../@types/interfaces'

const SocialIcons = ({ icon, href }: SocialIconsProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 rounded-full bg-baseGray400 flex items-center text-sky-700 justify-center hover:text-baseWhite hover:bg-sky-600 transition-all shadow-xl"
    >
      {icon}
    </a>
  )
}

export default SocialIcons
