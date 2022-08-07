// Layout could be here

import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import App from 'next/app'
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
    // <Fonts/>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
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
