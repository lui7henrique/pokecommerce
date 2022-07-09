/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable space-before-function-paren */
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="#08070b" />
          <meta name="hub xp template" content="nextjs chakra ui template" />
          <link rel="icon" href="/favicon.ico" />
          <title>hub xp | template</title>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
