import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/max-width-wrapper'
import Paragraph from '@components/paragraph'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'

import UsersDataService from '../../services/users'
import Input from '@components/form/input'
import { useRouter } from 'next/router'
import Button from '@components/ui/button'

const InitialLine = styled.p`
  /* align-self: center; */
  margin-top: 2rem;
  margin-bottom: 0;
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 500;
`

const Form = styled.form`
  fieldset {
    /* padding: 1rem 1.25rem; */
    border-width: 0px;
  }

  // copied to "input" in "form" folder

  button {
    margin-top: 0.75em;
    font-weight: 700;
    width: 100%;
    height: 1.75em;
  }

  & div {
    margin: 0 0 0.25em;
  }

  & div:last-of-type {
    margin: 0 0 0.5em;
  }
`

const UsersList = (props: any) => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const router = useRouter()
  
  const handleSignup = () => {
    const data = {
      name: userName,
      email: userEmail,
      password: userPassword // hash it later
    }

    if (userName && userEmail && userPassword) {
      UsersDataService.createUser(data)
      router.push('../')
    }
  }

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <h1>Sign up</h1>
        <Form>
          <fieldset>
            <h3>
              <legend>Let's set some data</legend>
            </h3>
            <br />
            <Input
              type="name"
              validation="name-validation"
              onChange={(e: any) => {
                setUserName(e.target.value)
              }}
            />
            <Input
              type="email"
              validation="email-validation"
              onChange={(e: any) => {
                setUserEmail(e.target.value)
              }}
            />
            <Input
              type="password"
              validation="password-validation"
              minLength={8}
              onChange={(e: any) => {
                setUserPassword(e.target.value)
              }}
            >
              {/* <div id="password-minlenght">Enter at least eight characters</div> */}
            </Input>
            <Button type="button" onClick={handleSignup}>
              Let's start!
            </Button>
          </fieldset>
        </Form>
      </MaxWidthWrapper>
    </Article>
  )
}

export default UsersList
