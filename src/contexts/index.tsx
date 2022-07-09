import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { theme } from 'styles/theme'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      {/* CONTEXTS PROVIDERS */}
      {props.children}
      {/* CONTEXTS PROVIDERS */}
    </ChakraProvider>
  )
}
