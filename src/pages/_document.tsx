// <head>
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import theme from '../lib/theme'

const themeInitializerScript = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode()
})()`

function setInitialColorMode() {
  function getInitialColorMode() {
    const storedPreferenceMode = window.localStorage.getItem('theme')
    const hasStoredPreference = typeof storedPreferenceMode === 'string'

    if (hasStoredPreference) {
      return storedPreferenceMode
    }

    const preference = window.matchMedia('(prefers-color-scheme: dark)')
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

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
