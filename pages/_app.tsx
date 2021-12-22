import React from 'react'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useStore } from 'store'
import themes, { ThemeMode } from 'styles/themes'

const GlobalStyle = createGlobalStyle<{ themeMode: ThemeMode }>`
  :root {
    color-scheme: ${({ themeMode }) =>
      themeMode === ThemeMode.Light ? 'light' : 'dark'};
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: ${props => props.theme.colors.gray1};
    color: ${props => props.theme.colors.gray12};
    font-family: 'Source Sans Pro', sans-serif;
  }

  a { 
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const MyApp = ({ Component, pageProps }) => {
  const { theme } = useStore()

  return (
    <>
      <Head>
        <title>Everyicons</title>
      </Head>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle themeMode={theme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
