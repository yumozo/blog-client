import type { AppProps } from 'next/app'
import App from 'next/app'
import Layout from '@components/Layout'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Fonts from '@components/fonts'
import GlobalStyle from '@components/styled/global'
import '../../styles/global.css'

if (
  typeof window !== 'undefined' &&
  window.history.scrollRestoration !== 'manual'
) {
  window.history.scrollRestoration = 'manual'
}

// ADDED ROUTER PROP
export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Fonts />
      <GlobalStyle />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      {/* </ThemeProvider> */}
    </>
  )
}

const theme: DefaultTheme = {
  // TEST FOR A WHILE
  colors: {
    primary: '#fff',

    secondary: '#fff'
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext: any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}
