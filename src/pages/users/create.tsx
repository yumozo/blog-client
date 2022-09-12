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
    padding: 1rem 1.25rem;

    /* border-width: 2px; */
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
        <InitialLine>New user</InitialLine>
        <Form>
          <fieldset>
            <legend>Let's set some data</legend>
            <div>
              <label htmlFor="email">Full name</label>
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
              <label htmlFor="select">Spec</label>
              <select name="select" id="select">
                <option value="apple">None</option>
                <option value="orange">Engineer</option>
                <option value="orange">Architect</option>
                <option value="orange">Analyst</option>
                <option value="orange">Administrator</option>
              </select>
            </div>
            {/* <div>
              <label htmlFor="comment">Please leave a comment</label>
              <textarea
                placeholder="It may be empty."
                name="comment"
                id="comment"
                ></textarea>
              </div> */}
            <button>Create</button>
            {/* or */}
            {/* <input type="submit" value="Save" /> */}
          </fieldset>
        </Form>
      </MaxWidthWrapper>
    </Article>
  )
}

export default UsersList
