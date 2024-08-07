import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Olá! Sou um desenvolvedor de software brasileiro"/>

      <meta property="og:title" content="Rafael Borges" />
      <meta property="og:description" content="Olá! Sou um desenvolvedor de software brasileiro"/>
      <meta property="og:url" content="Rafael Borges" />
      <meta property="og:image" content="/banner.PNG" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap"
        rel="stylesheet"
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}