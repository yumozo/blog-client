import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  html{
    --color-text: #000;
    --primary: #554994;
    --secondary: #333137;
    --color-bg: #fff;
    --color-surface: #FFCCB3;
    --color-subtext: #c0c0c0;
  }
  [data-theme='dark'] {
    --color-text: #fff;
    --primary: #F675A8;
    --secondary: #FFCCB3;
    --color-bg: #1c1d1f;
    --color-surface: #3E3F40;
    --color-subtext: #6a6a6a;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);

    // for testing layout
    /* div {
      border: 1px solid #99499440;
    }
    p, h1, h2, h3 {
      border: 1px solid #79993440;
    } */
    // --
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .section__padding {
    padding: 4rem 6rem;
  }

  .section__margin {
    margin: 4rem 6rem;
  }

  .scale-up-center {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 700px) {
    .section__margin {
      padding: 4rem;
    }

    .section__padding {
      margin: 4rem;
    }
  }

  @media screen and (max-width: 550px) {
    .section__margin {
      padding: 4rem 2rem;
    }

    .section__padding {
      margin: 4rem 2rem;
    }
  }

  // replace styles below later
  h1 {
    align-self: center;
    color: var(--primary);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2em;
  }

  h2 {
    color: var(--secondary);
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.75em;
    margin-bottom: .75em;
  }
`

export default GlobalStyle