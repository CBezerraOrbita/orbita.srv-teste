import React, { useState } from 'react'
import { motion } from 'framer-motion'

import ActiveLink from './ActiveLink'

import { X, List } from 'phosphor-react'

import google from '../assets/gcp-partner.png'
import { navigation } from '../data/content'
import Image from 'next/image'
import Link from 'next/link'
//, services, client, blog
// CaretRight

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  }

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-green-900"
      >
        <List className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-white fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed mb-[-50rem] top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <X className="w-8 h-8" color="#14532d" />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx} className="mb-8">
              <span
                className="text-xl cursor-pointer capitalize font-display"
                onClick={() => setIsOpen(false)}
              >
                <ActiveLink href={item.href} name={item.name} />
              </span>
            </li>
          )
        })}
        {/* <li className="mb-4" key={2}>
          <span className="text-xl cursor-pointer capitalize font-display text-green-900">
            {services.name}:
          </span>
        </li>
        {services.options.map((item, idx) => {
          return (
            <li
              key={idx + 3}
              className="flex items-center gap-2 text-lg w-full mb-6 font-display px-8"
              onClick={() => setIsOpen(false)}
            >
              <CaretRight size={20} weight="duotone" color="#9fdf14" />
              <ActiveLink href={item.href} name={item.name} />
            </li>
          )
        })} */}
        {/* <li className="mb-4" key={2}>
          <span className="text-xl cursor-pointer capitalize font-display text-green-900">
            {client.name}:
          </span>
        </li>
        {client.options.map((item, idx) => {
          return (
            <li
              key={idx + 3}
              className="flex items-center gap-2 text-lg w-full mb-6 font-display px-8"
              onClick={() => setIsOpen(false)}
            >
              <CaretRight size={20} weight="duotone" color="#9fdf14" />
              <ActiveLink href={item.href} name={item.name} />
            </li>
          )
        })} */}
        {/* <li
          className="mb-8 text-xl text-white font-display"
          key={6}
          onClick={() => setIsOpen(false)}
        >
          <ActiveLink href={blog.href} name={blog.name} />
        </li> */}
        <Link
          href="/contato"
          onClick={() => setIsOpen(false)}
          className="btn btn-lg  bg-sky-700 hover:bg-sky-600  text-white mb-8  transition-all font-display text-xl shadow-xl"
        >
          Solicitar Orçamento
        </Link>
        <Image src={google} alt="" width={180} />
      </motion.ul>
    </nav>
  )
}

export default NavMobile
