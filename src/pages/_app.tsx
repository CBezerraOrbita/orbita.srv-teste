import { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import AOS from 'aos'

// styles global
import '../styles/globals.css'

// styles swiper
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/swiper.css'

// styles aos
import 'aos/dist/aos.css'

import { Provider } from 'urql'

import Header from '../components/Header'
import BackTopBtn from '../components/BackTopBtn'
import { client, ssrCache } from '../lib/urql'

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Provider value={client}>
      <Head>
        <title>Orbita - Inteligência de Negõcios e Tecnologias</title>
      </Head>
      <Header />

      <Component {...pageProps} />
      <BackTopBtn />
    </Provider>
  )
}
