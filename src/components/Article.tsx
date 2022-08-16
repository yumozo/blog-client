import Head from 'next/head'
import styled from 'styled-components'
import { MaxWidthWrapper } from './styled/maxWidthWrapper'

export default function Article({ children, title }: any) {
  const pageTitle = `${title}`

  return (
    <>
      {title && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}

      {children}
    </>
  )
}
