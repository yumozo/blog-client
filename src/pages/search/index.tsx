import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/max-width-wrapper'
import Paragraph from '@components/paragraph'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'
import LinkWithLogo from '@components/link-with-logo'
import SearchButton from '@components/ui/search-btn'

import UsersDataService from '../../services/users'
import PostsDataService from '../../services/posts'
import SearchForm from '@components/form/search-form'

const StyledLink = styled(LinkWithLogo)`
  display: inline-flex;
  width: 68px;
  align-items: center;
  justify-content: space-between;
`

const InitialLine = styled.p`
  /* align-self: center; */
  margin-top: 2rem;
  margin-bottom: 0;
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 500;
`

const Fieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;

  .search-field {
    input {
      margin-left: 0.5em;
    }
    button {
      margin-left: 0.5em;
    }
  }

  .radio {
    display: flex;
    gap: 1em;

    div input {
      margin-left: 0.5em;
    }
  }
`

const SearchPage = (props: any) => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState('users')

  // useEffect(() => {
  //   retrieveUsers()
  // }, [users])

  const inputHandle = (e: any) => {
    let input = e.target.value.toLowerCase()
    setInputText(input)
  }

  const changeHandle = (e: any) => {
    setFilter(e.target.value)
    setUsers([])
    setPosts([])
  }

  const find = () => {
    if (inputText == '') {
      setUsers([])
      setPosts([])
      return
    }
    if (filter === 'users') {
      UsersDataService.find(inputText)
        .then((res: any) => {
          console.log(res.data)
          setUsers(res.data)
        })
        .catch((error: any) => {
          console.error(error)
        })
    } else {
      PostsDataService.find(inputText)
        .then((res: any) => {
          console.log(res.data)
          setPosts(res.data)
        })
        .catch((error: any) => {
          console.error(error)
        })
    }
  }

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        {/* <h1></h1> */}

        <SearchForm
          inputHandle={inputHandle}
          changeHandle={changeHandle}
          searchHandle={find}
          filter={inputText}
        />

        {users.length > 0 &&
          users.map((user: any) => {
            const info = `${user.name}, ${user.email}`

            return (
              <>
                <h2>{user.name}</h2>
                <Paragraph>info: {info}</Paragraph>
                <Link href={'/u/' + user.user_id}>
                  <a>View Page</a>
                </Link>
              </>
            )
          })}
        {posts.length > 0 &&
          posts.map((post: any) => {
            // const info = `${post.title}, ${post.email}`
            return (
              <ContentPreview
                title={post.title}
                href={`../post/${post.post_id}`}
              >
                {post.summary}
              </ContentPreview>
            )
          })}
      </MaxWidthWrapper>
    </Article>
  )
}

export default SearchPage
