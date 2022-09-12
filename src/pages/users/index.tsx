import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/maxWidthWrapper'
import Paragraph from '@components/paragraph'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'

import UsersDataService from '../../services/users'

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

const UsersList = (props: any) => {
  const [users, setUsers] = useState([])
  const [searchName, setSearchName] = useState('')
  const [searchEmail, setSearchEmail] = useState('')

  useEffect(() => {
    retrieveUsers()
    // ...
  }, [])

  const retrieveUsers = () => {
    UsersDataService.getAll()
      .then((res: any) => {
        console.log(res.data)
        // setUsers(res.data.users) // data.USERS ?
        setUsers(res.data)
      })
      .catch((error: any) => {
        console.error(error)
      })
  }

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <InitialLine>Users list</InitialLine>
        <div>
          {users.map((user: any) => {
            const info = `${user.name}, ${user.email}`

            return (
              <>
                <h2>{user.name}</h2>
                <p className="card-text">
                  <strong>Cuisine: </strong>
                  {user.cuisine}
                  <br />
                  <p>info: {info}</p>
                </p>

                <div>
                  <Link
                    href={'/restaurants/' + user._id}
                    className="btn btn-primary col-lg-5 mx-1 mb-1"
                  >
                    View Reviews
                  </Link>
                  <a
                    target="_blank"
                    href={'https://www.google.com/maps/place/' + info}
                    className="btn btn-primary col-lg-5 mx-1 mb-1"
                  >
                    View Map
                  </a>
                </div>
              </>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </Article>
  )
}

export default UsersList

/* export default */ function Users() {
  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        {/* <div className="flex justify-around flex-col"> */}
        <InitialLine>Last posts</InitialLine>
        <ContentPreview title="First post" href="/blog">
          Abstract. First sentenses.
          <br />
          bla-bla
        </ContentPreview>

        <ContentPreview title="Second post" href="/blog">
          Abstract. First sentenses.
          <br />
          bla-bla
        </ContentPreview>

        <ContentPreview title="Third post" href="/blog">
          Abstract. First sentenses.
          <br />
          bla-bla
        </ContentPreview>

        <h2>Contacts</h2>
        <Paragraph>
          <StyledLink href="https://github.com/zyrjanow" target="_blank">
            Github
          </StyledLink>
        </Paragraph>
        {/* </div> */}
      </MaxWidthWrapper>
    </Article>
  )
}