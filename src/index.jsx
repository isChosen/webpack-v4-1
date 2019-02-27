/*
 * @Author: Detcx
 * @Date: 2019-01-31 15:11:44
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-26 20:40:02
 * @Description: React Root
 */

import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '__StorePath__';
import App from '__ComponentsPath__/app/App';
import Login from '__ComponentsPath__/login/Login';
import ResponseInterc from '__PublicComponents__/interceptor/response/ResponseInterc';
import AuthorizedRoute from '__PublicComponents__/auth/AuthorizedRoute';

render(
  <Provider store={store}>
    <HashRouter>
      <Fragment>
        <ResponseInterc />
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" render={props => <Login {...props} />} />
          <AuthorizedRoute path="/app" component={App} />
          {/* 顶级路由不匹配时跳转至登录页 */}
          <Redirect to="/login" />
        </Switch>
      </Fragment>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
