import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

// Rename it
const StyledLogo = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <StyledLogo>
          <Image
            className="cursor-pointer"
            src="/assets/logo192.png"
            width={32}
            height={32}
            alt="logo"
          />
          <p className="ml-2 text-lg">Zyrjanow</p>
        </StyledLogo>
      </a>
    </Link>
  )
}
