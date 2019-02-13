/*
 * @Author: lcs
 * @Date: 2019-01-31 15:11:44
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 16:53:24
 * @Description: React Root
 */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store';

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
