import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const colors = ['yellow', 'teal', 'red', 'green']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return (
      <Html lang="de" className={`highlight-color--${randomColor}`}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
