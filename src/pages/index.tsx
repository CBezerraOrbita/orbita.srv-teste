import React from 'react'

import Hero from '../components/Hero'
import Section from '../components/Section'
import CardSliders from '../components/CardSliders'
import Features from '../components/Features'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MainPartners from '../components/MainPartners'

const Home = () => {
  return (
    <div className=" relative selection:bg-sky-700 overflow-x-hidden">
      <div id="home">
        <Hero />
      </div>
      <div id="clients">
        <MainPartners />
      </div>
      <div id="services">
        <CardSliders />
      </div>

      <div id="orbita">
        <Section />
      </div>
      <div id="solucoes">
        <Features />
      </div>
      <div id="products">
        <Products />
      </div>

      <div id="contato">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default Home
