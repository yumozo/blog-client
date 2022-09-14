import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/maxWidthWrapper'
import Paragraph from '@components/paragraph'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'
import LinkWithLogo from '@components/link-with-logo'
import SearchButton from '@components/ui/search-btn'

import UsersDataService from '../../services/users'
import PostsDataService from '../../services/posts'

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

const SearchForm = styled.form`
  display: flex;
  gap: 0.5em;
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
    let input = e.target.value.toLowerCase();
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
      console.log(filter);
      
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
        <SearchForm>
          <div>
            <label htmlFor="search">What you want to find? </label>
            <input
              name="search"
              id="search"
              type="search"
              onChange={inputHandle}
            />
          </div>
          <SearchButton type='button' onClick={find}>🔎</SearchButton>
        </SearchForm>
        <form>
          <label htmlFor="users">Users</label>
          <input
            name='filter'
            id='users'
            type="radio"
            value='users'
            checked={filter === 'users'}
            onChange={changeHandle}
          />
          <br />
          <label htmlFor="posts">Posts</label>
          <input
            name='filter'
            id='posts'
            type="radio"
            value='posts'
            checked={filter === 'posts'}
            onChange={changeHandle}
          />
        </form>
        {users.length > 0 &&
          users.map((user: any) => {
            const info = `${user.name}, ${user.email}`

            return (
              <>
                <h2>{user.name}</h2>
                <Paragraph>info: {info}</Paragraph>
                <Link href={'/u/' + user.id}>
                  <a>View Page</a>
                </Link>
              </>
            )
          })
        }
        {posts.length > 0 &&
          posts.map((post: any) => {
            // const info = `${post.title}, ${post.email}`
            return (
              <>
                <h2>{post.title}</h2>
                {/* <Paragraph>info: {info}</Paragraph> */}
                <Link href={'/u/' + post.id}>
                  <a>View Page</a>
                </Link>
              </>
            )
          })
        }
      </MaxWidthWrapper>
    </Article>
  )
}

export default SearchPage
