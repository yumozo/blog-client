import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: var(--color-subtext);
  text-align: center;
  /* position: relative; */
  height: 88px;

  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  
  p {
    margin-top: 40px;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <span></span>
      <p>
        &copy; {new Date().getFullYear()} Jegor Zyrjanow. All Rights Reserved.
      </p>
    </StyledFooter>
  )
}
