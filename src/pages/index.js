import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import useTranslation from 'next-translate/useTranslation';
import Home from '../components/pages/Home';

const HomePage = props => {
  const { t } = useTranslation('translation');
  const { publicRuntimeConfig } = getConfig();
  const { siteUrl } = publicRuntimeConfig;

  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={t('home.headerContent')} />
        <link rel="canonical" href={siteUrl} />
      </Head>
      <Home {...props} />
    </>
  );
};

export default HomePage;
