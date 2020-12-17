import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Home from '../components/pages/Home';

const HomePage = props => {
  const { t } = useTranslation('translation');

  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={t('home.headContent')} />
      </Head>
      <Home {...props} />
    </>
  );
};

export default HomePage;
