import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/maxWidthWrapper'
import Paragraph from '@components/paragraph'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'

import UsersDataService from '../../services/users'

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

  legend,
  label,
  .validation-message {
    user-select: none;
  }

  .validation-message {
    color: rosybrown;
  }

  textarea,
  input,
  select {
    border: 1px solid;
    background-color: white;
  }

  input {
    margin-left: 0.85em;
    padding: 0.1em;
  }

  textarea {
    padding: 0.1em 0.15em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 0.965rem;
    /* line-height: 1.1; */
    resize: vertical;
  }

  button {
    color: white;
    background: #121212;
    font-weight: 700;

    width: 100%;
    height: 2em;
    border: 0.015em solid white;
    border-radius: 0.5em;
  }

  button:hover {
    background-color: #282828;
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
  const [userAddress, setUserAddress] = useState('')

  // useEffect(() => {
  //   retrieveUsers()
  //   // ...
  // }, [])

  const saveData = () => {
    let data = {
      user_id: 1,
      name: userName,
      email: userEmail,
      address: userAddress
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
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                required
                autoComplete="name"
                aria-describedby="name-validation"
              />
              <span className="validation-message" id="name-validation"></span>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                aria-describedby="email-validation"
              />
              <span className="validation-message" id="email-validation"></span>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength={8}
                required
                aria-describedby="password-validation"
              />
              <span
                className="validation-message"
                id="password-validation"
              ></span>
              {/* <div id="password-minlenght">Enter at least eight characters</div> */}
            </div>
            <button>Let's start!</button>
          </fieldset>
        </Form>
      </MaxWidthWrapper>
    </Article>
  )
}

export default UsersList
