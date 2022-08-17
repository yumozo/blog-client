import Link from 'next/link'
import { useEffect, useState } from 'react'
import { StyledMenuButton, StyledMenuItems } from './styled/dropdown.styled'

function MenuLink({ children, href, target }: any) {
  return (
    <div>
      <Link href={href}>
        <a target={target}>
          {children}
        </a>
      </Link>
    </div>
  )
}

export default function Dropdown() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(!state)
  }

  return (
    <div className="relative inline-block text-left">
      <StyledMenuButton>
        <svg
          onClick={handleToggle}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
        <MenuLink href='/'>Home</MenuLink>
        <MenuLink href='/projects'>Projects</MenuLink>
        <MenuLink href='https://github.com/zyrjanow/my-homepage' target='_blank'>GitHub</MenuLink>
      </StyledMenuItems>
    </div>
  )
}
