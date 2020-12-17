require('dotenv').config();

const CssnanoPlugin = require('cssnano-webpack-plugin');
const withImages = require('next-images');
const withCss = require('@zeit/next-css');
const nextTranslate = require('next-translate');

const { NODE_ENV } = process.env;
const production = NODE_ENV === 'production';

const nextConfig = {
  distDir: '../build/_app',
  publicRuntimeConfig: {
    siteUrl: process.env.SITE_URL
  },
  webpack: config => {
    const webpackConfig = { ...config };

    webpackConfig.plugins = [
      ...config.plugins,

      new CssnanoPlugin({
        sourceMap: true
      })
    ];
    return config;
  }
};

module.exports = withImages(
  nextTranslate(),
  withCss({
    cssModules: true,
    cssLoaderOptions: {
      url: false,
      localIdentName: production
        ? 'app-[hash:base64:5]'
        : '[name]__[local]--[hash:base64:5]'
    },
    ...nextConfig
  })
);
