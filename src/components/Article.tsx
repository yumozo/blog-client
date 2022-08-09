import Head from 'next/head'
import styled from '@emotion/styled'

const Style = styled.div`
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 800px;
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
      <Style>{children}</Style>
    </>
  )
}
