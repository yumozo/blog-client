import styled from 'styled-components'

type PropType = {
  bg?: string
}

export const StyledHeader = styled.header<PropType>`
  background-color: ${props => props.bg};
  padding: 40px 0;
`
