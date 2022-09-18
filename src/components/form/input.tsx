import styled from 'styled-components'
import capitalize from '@utils/capitalize'

const Wrapper = styled.div`
  legend,
  label,
  .validation-message {
    user-select: none;
  }

  .validation-message {
    color: rosybrown;
  }

  textarea,
  input,
  select {
    border: 1px solid;
    background-color: white;
  }

  input {
    margin-left: 0.85em;
    padding: 0.1em;
  }

  textarea {
    padding: 0.1em 0.15em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 0.965rem;
    /* line-height: 1.1; */
    resize: vertical;
  }
`

export default function Input({ type, validation, minLength, onChange }: any) {
  return (
    <Wrapper>
      <label htmlFor={type}>{capitalize(type)}</label>
      <input
        type={type}
        id={type}
        name={type}
        required
        autoComplete={type}
        aria-describedby={validation}
        minLength={minLength}
        onChange={onChange}
      />
      <span className="validation-message" id={validation}></span>
    </Wrapper>
  )
}
