import * as React from 'react'

import { CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { AppProvider } from 'contexts'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <CSSReset />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
