/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:11:44
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 14:42:50
 * @Description: React Root
 */

import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '__StorePath__';
import App from '__ComponentsPath__/app/App';
import Login from '__ComponentsPath__/login/Login';

const Basic = () => (
  <Provider store={store}>
    <Switch>
      {/* 注意：此顺序不能调换 */}
      <Route path="/login" exact component={props => <Login {...props} />} />
      <Route path="/" component={props => <App {...props} />} />
    </Switch>
  </Provider>
);

render(
  <HashRouter>
    <Basic />
  </HashRouter>,
  document.getElementById('root')
);
