import Article from '@components/layout/article'
import Block from '@components/undernav-grad'
import { MaxWidthWrapper } from '@styles/maxWidthWrapper'
import React from 'react'

export default function Projects() {
  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <div className="flex justify-around flex-col">
          <h1>My Projects</h1>
          <h2>Projects</h2>
          <p>Course Work &#x2013; Image Gallery</p>
        </div>
      </MaxWidthWrapper>
    </Article>
  )
}
