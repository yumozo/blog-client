import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  * { box-sizing: border-box; padding: 0; margin: 0; scroll-behavior: smooth; }
  html{
    --font-family: -apple-system, noto sans, sans-serif;

    --color-text: #000;
    --primary: #554994;
    --secondary: #FFCCB3;
    --color-bg: #fff;
    --color-surface: #FFCCB3;
    --color-subtext: #c0c0c0;
  }
  [data-theme='dark'] {
    --color-text: #fff;
    --primary: #F675A8;
    --secondary: #FFCCB3;
    --color-bg: #1c1d1f;
    --color-surface: #ffffff26;
    --color-subtext: #6a6a6a;
  }
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
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
`

export default GlobalStyle