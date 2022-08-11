// <head>
import { Html, Head, Main, NextScript } from 'next/document'
// import theme from '../lib/theme'

const themeInitializerScript = `(function() {
  ${setInitializerColorMode.toString()}
  setInitialColorMode()
})()`

function setInitializerColorMode() {
  function getInitialColorMode() {
    const storedPreferenceMode = window.localStorage.getItem('theme')
    const hasStoredPreference = typeof storedPreferenceMode === 'string'

    if (hasStoredPreference) {
      return storedPreferenceMode
    }

    const preference = window.matchMedia('(prefers-color-scheme): dark')
    const hasMediaQueryPreference = typeof preference.matches === 'boolean'

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light'
    }

    return 'light'
  }

  const currentColorMode = getInitialColorMode()
  if (currentColorMode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHtml={{
            __html: themeInitializerScript
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
