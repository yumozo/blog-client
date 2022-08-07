import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const LogoStyle = styled.span`
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(180deg);
  }
`

export function Logo1() {
  return (
    <Link href="/">
      <LogoStyle>
        <Image src="/assets/logo192.png" width={32} height={32} alt="logo" />
      </LogoStyle>
    </Link>
  )
}