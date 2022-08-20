import Article from '@components/layout/article'
import BlockDiv from '@components/styled/blockDiv'
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
          <h1>My Projects</h1>
          <h2>Projects</h2>
          <p>Course Work &#x2013; Image Gallery</p>
        </div>
      </MaxWidthWrapper>
    </Article>
  )
}
