import Head from 'next/head'

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
