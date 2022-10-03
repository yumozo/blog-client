import { useState } from "react";
import useUser from "lib/useUser";
import Form from '@components/form/form'
import Article from "@components/layout/article";
import Block from "@components/undernav-grad";
import { MaxWidthWrapper } from "@components/styles/max-width-wrapper";
import fetchJson, { FetchError} from "lib/fetchJson";

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/profile',
    redirectIfFound: true
  })

  const [errorMsg, setErrorMsg] = useState('')

  return (
    <Article>
      <Block />
      <MaxWidthWrapper>
        <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(e) {
            e.preventDefault()

            const body = {
              username: e.currentTarget.username.value,
            };

            try {
              console.log(body);
              console.log(JSON.stringify(body));
              
              mutateUser(
                await fetchJson("/api/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(body),
                }),
                false,
              );
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message)
              } else {
                console.error("An unexpected error happened:", error);
              }
            }
          }}
        />
      </MaxWidthWrapper>
    </Article>
  )
}