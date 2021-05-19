import * as React from 'react'
import NextHead from 'next/head'

export const Head = ({ children, title }) => (
  <React.Fragment>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:ital@0;1&family=Rubik:wght@500&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
      {children}
    </NextHead>
  </React.Fragment>
)

export default Head
