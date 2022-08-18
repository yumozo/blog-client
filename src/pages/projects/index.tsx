import Article from '@components/layout/article'
import BlockDiv from '@components/styled/blockDiv'
import { H1, H2 } from '@components/styled/heading.styled'
import { MaxWidthWrapper } from '@components/styled/maxWidthWrapper'
import React from 'react'
import styled from 'styled-components'

export default function Projects() {
  return (
    <Article>
      <MaxWidthWrapper>
        <BlockDiv />
        <BlockDiv />
        <div className="flex justify-around flex-col">
          <H1>My Projects</H1>
          <H2>Projects</H2>
          <p>Course Work &#x2013; Image Gallery</p>
        </div>
      </MaxWidthWrapper>
    </Article>
  )
}
