import * as React from 'react';
import Head from 'next/head';
import './_app.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
