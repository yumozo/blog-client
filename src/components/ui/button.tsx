import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background: #121212;
  padding: 0.15em 0.45em;
  border-width: 0;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: #282828;
  }

  &:focus {
    outline: 0;
    background-color: var(--primary);
  }
`

export default Button
