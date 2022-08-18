import styled from 'styled-components'

type PropType = {
  visibility?: any
}

export const StyledMenuItems = styled.div<PropType>`
  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 0.5rem;
  right: 0;
  border-radius: 0.375rem;
  background-color: var(--color-surface);

  div {
    margin: 0.7rem 1.4rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

export const StyledMenuButton = styled.button`
  padding: 8px;
  margin-left: 12px;
  height: 36px;
  width: 36px;
  display: inline-flex;
  justify-content: center;
  background-color: #0000004d;
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;

  &:hover {
    background-color: #0000004d;
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
    color: #e5e7eb;
  }
`
