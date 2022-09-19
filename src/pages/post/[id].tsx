import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/max-width-wrapper'
import Paragraph from '@components/paragraph'
import Block from '@components/undernav-grad'

import PostsDataService from '../../services/posts'

const ContentWrapper = styled.article`
  .ProseMirror {
    margin-top: 0.5em;
    &:focus {
      outline: 0;
    }

    > * + * {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    h1 {
      margin-top: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }

  button {
    margin-right: 0.25em;
    margin-top: 0.15em;
    font-size: 1rem;

    svg {
      height: 1rem;
    }
  }
  
  .managing-btns-wrapper {
    .back-forward-btns {
      min-width: 25%;
    }

    .post-btn {
      background-color: #73A9AD;
      float: right;
      &:focus, &:hover {
        background-color: #90C8AC;
      }
    }
  }
`

export default function PostPage(props: any) {
  const [post, setPost] = useState({
    authorId: 0,
    authorName: 'author name',
    title: 'title',
    creationDate: 'date',
    content: 'content'
  })
  // --- FORMAT
  const { id } = useRouter().query // is null, string, or array of string
  let postId: number
  // received id validation
  if (!id) {
    console.error('No post with queried ID')
    postId = 0
  } else if (Array.isArray(id)) {
    postId = parseInt(id.join(''))
  } else {
    postId = parseInt(id)
  }
  // ---
  // getting post with id
  useEffect(() => {
    retrievePost(postId)
  }, [])
  const retrievePost = (id: number) => {
    PostsDataService.get(id)
      .then((res: any) => {
        console.log(res.data[0])
        const postData = res.data[0]
        setPost({
          authorId: postData.user_id,
          authorName: postData.name,
          title: postData.title,
          creationDate: new Date(postData.creation_date).toLocaleDateString('en-UK'),
          content: postData.content
        })
      })
      .catch((error: any) => {
        console.error(error)
      })
  }
  if (!post) {
    console.error("no post data.");
  } else {
    console.log(post);
  }
  // setting up read-only editor
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit]
  })
  if (!editor) {
    return (
      <Article>
        <Block />
        <MaxWidthWrapper>
          <h1>There's troubles with editor</h1>
        </MaxWidthWrapper>
      </Article>
    )
  }
  editor.commands.setContent(post.content)

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <Paragraph>
          <b>Author:</b>{' '}
          <Link href={`../u/${post.authorId}`}>
            <a>{post.authorName}</a>
          </Link>
          <p>Publication date: {post.creationDate}</p>
        </Paragraph>

        <h1>{post.title}</h1>
        <ContentWrapper>
          <EditorContent editor={editor} />
        </ContentWrapper>
      </MaxWidthWrapper>
    </Article>
  )
}
