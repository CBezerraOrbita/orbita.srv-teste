import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Amazonia Lab" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}