import styled from 'styled-components'
import capitalize from '@utils/capitalize'

export default function Input({ type, validation, minLength, onChange }: any) {
  return (
    <div>
      <label htmlFor="name">{capitalize(type)}</label>
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
    </div>
  )
}
