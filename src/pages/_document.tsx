import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700&display=swap" rel="stylesheet" />
          <script defer data-domain="michaelsalim.co.uk" src="https://plausible.recalllab.com/js/script.js" />
        </Head>
        <body>
          {/* Preload the fonts */}
          <span style={{ display: 'hidden', fontFamily: 'Oswald' }}></span>
          <span style={{ display: 'hidden', fontFamily: 'Inter' }}></span>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
