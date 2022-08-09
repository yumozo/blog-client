import Footer from '@components/Footer'
import Head from 'next/head'
import NavMenu from './NavMenu'

export default function Layout({ children, router }: any) {
  return (
    <main>
      <Head>
        {/* <meta charSet="utf-8" /> */}
        <meta name="author" content="Jegor Zyrjanow" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>Homepage</title>
      </Head>

      <NavMenu path={router.asPath} />

      <div>{children}</div>

      <Footer />
    </main>
  )
}
