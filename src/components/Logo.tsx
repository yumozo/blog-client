import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

// Rename it
const StyledLogo = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 4px;
    font-weight: 600;
    color: var(--secondary);
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <StyledLogo>
          <Image
            className="cursor-pointer"
            src="/logo192.png"
            width={32}
            height={32}
            alt="logo"
          />
          <p>Zyrjanow</p>
        </StyledLogo>
      </a>
    </Link>
  )
}
