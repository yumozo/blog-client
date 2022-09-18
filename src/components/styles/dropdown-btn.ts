import styled from 'styled-components'

type PropType = {
  visibility?: any
}

// Menu button element to show dropdown
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
  border-width: 0;
  border-radius: 0.375rem;
  cursor: pointer;

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

// Dropdown menu itself
export const StyledMenuItems = styled.div<PropType>`
  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  margin-top: 0.5rem;
  right: 1rem;
  border-radius: 0.375rem;
  background-color: var(--color-surface);

  div {
    padding: 0.95em;
    padding-right: 4em;
    padding-left: 1em;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  a:hover {
    background-color: #ffffff28;
  }

  a:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  a:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
`
