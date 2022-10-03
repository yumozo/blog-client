import Paragraph from "@components/paragraph";
import Button from "@components/ui/button";
import { FormEvent } from "react";
import styled from "styled-components";
import Input from "./input";

const Wrapper = styled.div`
  * {
    margin-right: 0.5em;
  }

  button {
    padding: 0.5em 0.75em;
  }
`

export default function Form({
  errorMessage,
  onSubmit
}: {
  errorMessage: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          <h2>Type your username</h2>
          <input id='username' type="text" name="username" required />
        </label>

        <Button type="submit">Login</Button>

        {errorMessage && <Paragraph>{errorMessage}</Paragraph>}
      </form>
    </Wrapper>
  )
}