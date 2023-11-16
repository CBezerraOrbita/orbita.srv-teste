import React, { useEffect, useState } from 'react'

import logo from '../assets/logo-1.svg'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header
      className={`${
        bg
          ? 'bg-baseWhite lg: h-20 drop-shadow-sm'
          : 'h-20 bg-baseWhite drop-shadow-sm'
      } flex items-center fixed top-0 w-full  z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between ">
        {/* logo */}
        <Link href="/" as="style" rel="stylesheet preload prefetch">
          <Image src={logo} alt="" width={160} priority />
        </Link>
        {/* nav */}
        <div className="hidden lg:block ">
          <div className="flex items-center gap-10">
            <div className="flex-auto">
              {' '}
              <Nav />
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex">
          <Link
            href="/#contact"
            className="btn btn-lg bg-sky-700 hover:bg-sky-600  text-white transition-all font-display shadow-xl"
          >
            Solicitar Orçamento
          </Link>
        </div>
        {/* Socials */}

        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
