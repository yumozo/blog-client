import StyledFooter from '@components/footer'
import Head from 'next/head'
import Image from 'next/image'
import NavMenu from '@components/nav-menu'

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

      <NavMenu />

      <div>{children}</div>

      <StyledFooter />
    </main>
  )
}
