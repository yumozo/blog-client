import styled from 'styled-components'
import Button from './button'

// const SearchButton = styled.button`
//   padding: 0.15em 0.15em;
//   background-color: var(--primary);
//   border-color: var(--primary);
//   /* border: solid 2px var(--secondary); */
//   border-radius: 0.15em;
//   cursor: pointer;
// `

const SearchButton = styled(Button)`
  background-color: var(--primary);
  height: 100%;

  &:focus {
    outline: 2px solid var(--secondary);
  }
  
  &:hover {
    background-color: var(--primary);
  }
`

export default SearchButton
