import { useEffect, useState } from 'react'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/max-width-wrapper'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'

import PostsDataService from '../services/posts'

export default function UserPage(props: any) {
  const [posts, setPosts] = useState(undefined as any) // string, or array of string
  useEffect(() => {
    retrievePosts()
  }, [])
  const retrievePosts = () => {
    PostsDataService.getAll()
      .then((res: any) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((error: any) => {
        console.error(error)
      })
  }
  if (!posts) {
    return (
      <Article>
        <Block />
        <MaxWidthWrapper>
          <h1>Undefined</h1>
        </MaxWidthWrapper>
      </Article>
    )
  }
  // sorting posts from newest to oldest
  const sortedPostsByDate = posts.sort((a: any, b: any) => {
    const aCreationDate = new Date(b.creation_date) as any
    const bCreationDate = new Date(a.creation_date) as any
    return aCreationDate - bCreationDate
  })
  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <h1>Recent posts</h1>
        {sortedPostsByDate.map((post: any) => {
          return (
            <ContentPreview title={post.title} href={`post/${post.post_id}`}>
              {post.summary}
            </ContentPreview>
          )
        })}
      </MaxWidthWrapper>
    </Article>
  )
}
