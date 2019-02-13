/*
 * @Author: lcs
 * @Date: 2019-01-31 15:03:13
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 19:20:19
 * @Description: App
 */

import { Icon, Spin } from 'antd'; // TODO FIXME 为了首屏加载快速，App 组件中不能出现像 Icon 这样大的组件，自己写（后期优化）
import React, { Fragment, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from '__PublicComponents__/Header';
import appLess from './app.less';

const Home = lazy(() => import(/* webpackChunkName: "chunk-home" */ '../home/Home'));
const Login = lazy(() => import(/* webpackChunkName: "chunk-login" */ '../login/Login'));
const About = lazy(() => import(/* webpackChunkName: "chunk-about" */ '../about/About'));
const Product = lazy(() => import(/* webpackChunkName: "chunk-product" */ '../product/Product'));

const App = () => (
  <Fragment>
    {/* <header className={appLess.header}>App</header> */}
    <Header className={appLess.header}>App</Header>
    <hr />
    <section className={appLess.section}>
      <Link to="/">Home</Link> | <Link to="/product">Products</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link>
      <div
        style={{
          padding: '5px',
          margin: '10px 0',
          minHeight: '300px',
          border: '1px solid #666'
        }}
      >
        {/* <Suspense fallback={<Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />}> */}
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/" exact component={props => <Home {...props} />} />
            <Route path="/product" component={props => <Product {...props} />} />
            <Route path="/about" component={props => <About {...props} />} />
            <Route path="/login" component={props => <Login {...props} />} />
          </Switch>
        </Suspense>
      </div>
    </section>
    <footer className={appLess.footer}>footer</footer>
  </Fragment>
);

export default App;
