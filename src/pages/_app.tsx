import * as React from 'react'

import type { AppProps } from 'next/app'
import { AppProvider } from 'contexts'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
