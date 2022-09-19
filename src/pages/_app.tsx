import type { AppProps } from 'next/app'
import App from 'next/app'
import { SWRConfig } from 'swr'
import Layout from '@components/layout/main'
import Fonts from '@components/fonts/fonts'
import GlobalStyle from '@styles/global'
import fetchJson from 'lib/fetchJson'

if (
  typeof window !== 'undefined' &&
  window.history.scrollRestoration !== 'manual'
) {
  window.history.scrollRestoration = 'manual'
}

// ADDED ROUTER PROP
export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (error) => {
          console.error(error)
        }
      }}
    >
      {/* <ThemeProvider theme={theme}> */}
      <Fonts />
      <GlobalStyle />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      {/* </ThemeProvider> */}
    </SWRConfig>
  )
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
