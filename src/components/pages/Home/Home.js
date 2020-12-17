import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomePage = () => {
  const { t } = useTranslation('translation');

  return <div>{t('home.description')}</div>;
};

export default HomePage;
