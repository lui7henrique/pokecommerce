import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {},
    styles: {
      global: {
        body: {},
        html: {
          scrollBehavior: 'smooth'
        },
        'h1, h2, h3, h4, h5, h6': {}
      }
    },
    fonts: {
      body: 'Montserrat, sans-serif',
      heading: 'Montserrat, sans-serif'
    }
  }
  // withDefaultColorScheme({ colorScheme: 'primary' })
)
