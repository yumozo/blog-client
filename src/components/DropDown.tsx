import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { StyledMenuButton, StyledMenuItems } from '@styles/dropdown'

function MenuLink({ children, href, target }: any) {
  return (
    <div>
      <Link href={href}>
        <a target={target}>{children}</a>
      </Link>
    </div>
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
      <StyledMenuItems visibility={state}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink
          href="https://github.com/zyrjanow/my-homepage"
          target="_blank"
        >
          GitHub
        </MenuLink>
      </StyledMenuItems>
    </div>
  )
}
