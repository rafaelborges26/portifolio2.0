import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Hello! I´m a Brazilian software engineer"/>

      <meta property="og:title" content="Rafael Borges" />
      <meta property="og:description" content="Hello! I´m a Brazilian software engineer"/>
      <meta property="og:url" content="https://rafaelborges.dev.br/" />
      <meta property="og:image" content="/banner.PNG" />

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