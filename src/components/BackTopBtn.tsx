import React, { useState, useEffect } from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { CaretCircleUp } from 'phosphor-react'

const BackTopBtn = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false)
    })
  })
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return show ? (
    <button
      onClick={() => scrollToTop()}
      className="bg-sky-700/70 hover:bg-sky-600-hover text-sky-700 hover:text-baseWhite w-12 h-12 rounded-full right-5 bottom-8 cursor-pointer flex justify-center items-center transition-all fixed z-10"
    >
      <CaretCircleUp className="w-12 h-12" />
    </button>
  ) : (
    <CaretCircleUp className="hidden absolute bottom-0 left-0" />
  )
}

export default BackTopBtn
