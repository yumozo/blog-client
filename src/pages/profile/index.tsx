import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Article from '@components/layout/article'
import { MaxWidthWrapper } from '@components/styles/max-width-wrapper'
import Paragraph from '@components/paragraph'
import ContentPreview from '@components/content-preview'
import Block from '@components/undernav-grad'
import useUser from 'lib/useUser'
import useEvents from 'lib/useEvents'

import UsersDataService from '../../services/users'

export default function Profile() {
  const { user } = useUser({ redirectTo: '/login' })
  // const { events } = useEvents(user)

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <h1>Your profile</h1>
        {user && (
          <>
            {console.log(user)}
            <Paragraph>
              <pre>
                {JSON.stringify(user, null, 2)}
              </pre>
            </Paragraph>
          </>
        )}

        {/* {events !== undefined && (
          <Paragraph>
            <>
              {console.log(events)}
              {events.name}
            </>
          </Paragraph>
        )} */}
      </MaxWidthWrapper>
    </Article>
  )
}
