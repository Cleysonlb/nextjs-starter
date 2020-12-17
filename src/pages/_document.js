import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
