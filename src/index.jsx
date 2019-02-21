/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:11:44
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-21 16:30:42
 * @Description: React Root
 */

import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '__StorePath__';
import AuthorizedRoute from '__PublicComponents__/auth/AuthorizedRoute';
import App from '__ComponentsPath__/app/App';
import Login from '__ComponentsPath__/login/Login';

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" render={props => <Login {...props} />} />
        <AuthorizedRoute path="/app" component={App} />
        {/* 顶级路由不匹配时跳转至登录页 */}
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
