import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  position: relative;
  height: 180px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--color-subtext);
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} Jegor Zyrjanow. All Rights Reserved.
      </p>
    </StyledFooter>
  )
}
