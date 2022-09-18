import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: var(--color-subtext);
  text-align: center;
  position: relative;
  bottom: 1rem;
  margin-top: 6rem;
  /* height: 88px; */

  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
  align-items: center;
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} JZ. Under the MIT license.</p>
    </StyledFooter>
  )
}
