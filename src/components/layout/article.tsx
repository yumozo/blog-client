import Head from 'next/head'
import styled from 'styled-components'
import { MaxWidthWrapper } from '@styles/maxWidthWrapper'
import { createGlobalStyle } from 'styled-components'

const ArticleStyle = createGlobalStyle`
  p {
    margin-bottom: 1rem;
  }
`

export default function Article({ children, title }: any) {
  const pageTitle = `${title}`

  return (
    <>
      {title && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}

      {/* <ArticleStyle /> */}
      {children}
    </>
  )
}
