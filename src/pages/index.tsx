import Article from '@components/layout/article'
import Link from 'next/link'
import Image from 'next/image'
import { MaxWidthWrapper } from '@components/styled/maxWidthWrapper'
import BlockDiv from '@components/styled/blockDiv'
import styled from 'styled-components'
import Paragraph from '@components/paragraph'

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

export default function Home() {
  return (
    <Article>
      <MaxWidthWrapper>
        <BlockDiv />
        <BlockDiv />
        <div className="flex justify-around flex-col">
          <H1>About</H1>
          <H2>Hey!👋</H2>
          <Paragraph>
            I'm Jegor Zyrjanow, a Full&#8209;stack not&#8209;yet
            &#8209;developer. Primarily interested in .NET &amp;
            web&#8209;dev stuff. Wanna become a useful one
            developer or an expert in web dev domain whatever.
            Also learning CS and UX/UI.
          </Paragraph>
          <Paragraph>
            I Love to search for new information, concepts and other interesting
            things to share with people around.
          </Paragraph>
          <H2>Work</H2>
          <Paragraph>
            So.. I didn't work yet &#x1F641;
          </Paragraph>
          <H2>Links</H2>
          <Paragraph>
            <StyledLink href="https://github.com/zyrjanow" target="_blank">
              Github
            </StyledLink>
          </Paragraph>
        </div>
        <BlockDiv />
        <BlockDiv />
      </MaxWidthWrapper>
    </Article>
  )
}

// export { getServerSideProps } from '../components/chakra'
