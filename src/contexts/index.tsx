import { ReactNode } from 'react'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  return (
    <>
      {/* CONTEXTS PROVIDERS */}
      {props.children}
      {/* CONTEXTS PROVIDERS */}
    </>
  )
}
