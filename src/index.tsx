import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'react-hot-loader';
import * as Sentry from '@sentry/browser';
import App from './app';

import '@/common/styles/index.scss';

const { REACT_APP_ENV } = process.env;

if (REACT_APP_ENV !== 'dev') {
  Sentry.init({
    dsn: 'https://xxxxxxxxxxx@websentry.ximalaya.com/id', // sentry dsn
    release: REACT_APP_ENV,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
