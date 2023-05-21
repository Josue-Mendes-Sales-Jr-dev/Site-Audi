import { Html, Head, Main, NextScript } from 'next/document'

import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/themes'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <ThemeProvider theme={Theme}>
        <Main />
        <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  )
}
