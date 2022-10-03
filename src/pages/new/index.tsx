import { useState } from 'react'
import Link from 'next/link'
import router from 'next/router'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/max-width-wrapper'
import Paragraph from '@components/paragraph'
import Block from '@components/undernav-grad'
import Input from '@components/form/input'
import Button from '@components/ui/button'

import PostsDataService from '../../services/posts'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from '@components/editor-bar'
import useUser from 'lib/useUser'

const content = `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That's a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
        <li>
          You can set it with "-" sign in the beginning of the line.
        </li>
      </ul>
      <p>
        Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around.
      </p>
    `

function LinkWithLogo({ children, href, target }: any) {
  return (
    <Link href={href}>
      <a target={target}>
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
          </svg>
        </span>
        {children}
      </a>
    </Link>
  )
}

const Wrapper = styled.div`
  .ProseMirror {
    margin-top: 0.5em;
    border-top: 2px solid #00000028;
    border-radius: 0.75em;

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

const PostButton = styled(Button)`
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.25em 2em;
  background-color: #576F72;
  float: right;

  &:focus, &:hover {
    background-color: #7D9D9C;
    outline: 0;
  }
`

export default function UserPage(props: any) {
  const { user } = useUser({ redirectTo: '/login' })
  const [postTitle, setPostTitle] = useState('UNTITLED')
  const [postContent, setPostContent] = useState(content)
  const [postCategory, setPostCategory] = useState('')
  const time = new Date(Date.now()).toISOString()
  const authorId = null;

  const handlePost = () => {
    const data = {
      author_id: user?.user_id,
      title: postTitle,
      slug: Math.random().toString().slice(2),
      summary: postCategory.split(' ').slice(0, 10).join(' '),
      creation_date: time,
      content: postContent,
      tag: parseInt(postCategory)
    }
    
    if (postTitle.length < 5) {
      return
    }
    PostsDataService.createPost(data)
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.error(error);
      })
    router.push('../') // replace with a success message
  }

  const editor = useEditor({
    extensions: [StarterKit],
    content: postContent,
    onUpdate({ editor }) {
      setPostContent(editor.getHTML())
    }
  })

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <h3>
          <form>
            <label htmlFor="title">Title</label>
            <input
              id="title" type="title" name="title" minLength={5}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </form>
          <form>
            <label htmlFor='category'>Category</label>
            <select
              id="category" name="category"
              onChange={(e) => setPostCategory(e.target.value)}
            >
              <option value="1">React</option>
              <option value="2">CSS</option>
              <option value="3">Next.js</option>
              <option value="4">Express.js</option>
              <option value="5">TypeScript</option>
            </select>
          </form>
          {/* <Input type="title"></Input> */}
        </h3>
        <PostButton type="button" onClick={handlePost}>
          Post
        </PostButton>
        <br />
        <br />
        <Wrapper>
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </Wrapper>
      </MaxWidthWrapper>
    </Article>
  )
}
