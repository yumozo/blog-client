import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import {
  StyledMenuButton,
  StyledMenuItems
} from '@components/styles/dropdown-btn'
import LinkWithLogo from './ui/link-with-logo'

function MenuLink({ children, href, target }: any) {
  return (
    <Link href={href}>
      <a target={target}>
        <div>{children}</div>
      </a>
    </Link>
  )
}

const NavWrapper = styled.div`
  position: relative;
  display: none;
`

export default function Dropdown(props: any) {
  const [state, setState] = useState(true)

  const handleToggle = () => {
    setState(!state)
  }

  return (
    <div>
      <StyledMenuButton>
        <svg
          onClick={handleToggle}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </StyledMenuButton>
      <StyledMenuItems visibility={state} onClick={handleToggle}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/new">New post</MenuLink>
        <MenuLink href="/search">Search</MenuLink>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/signup">Sign up</MenuLink>
        {/* <MenuLink
          href="https://github.com/zyrjanow/blog-server"
          target="_blank"
        >
          View Source
        </MenuLink> */}
      </StyledMenuItems>
    </div>
  )
}
