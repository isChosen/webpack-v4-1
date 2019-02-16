/*
 * @Author: liangchaoshun
 * @Date: 2019-02-14 14:21:34
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 18:12:03
 * @Description: App 顶层容器
 */

import { Icon, Spin } from 'antd'; // TODO FIXME 为了首屏加载快速，App 组件中不能出现像 Icon 这样大的组件，自己写（后期优化）
import React, { Fragment, lazy, Suspense } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Header from '__PublicComponents__/header/Header';
import appLess from './app.less';

const Home = lazy(() => import(/* webpackChunkName: "chunk-home" */ '../home/Home'));
const About = lazy(() => import(/* webpackChunkName: "chunk-about" */ '../about/About'));
const Product = lazy(() => import(/* webpackChunkName: "chunk-product" */ '../product/Product'));

const App = props => {
  console.log('App props: ', props);
  return (
    <Fragment>
      <Header />
      <hr />
      <section className={appLess.section}>
        <NavLink to="/home" activeClassName={appLess.navLinkActive} exact>Home</NavLink>
        <span> | </span>
        <NavLink to="/product" activeClassName={appLess.navLinkActive}>Products</NavLink>
        <span> | </span>
        <NavLink
          activeClassName={appLess.navLinkActive}
          to={{
            pathname: '/about',
            hash: '#the-hash',
            search: '?abc=asdf',
            state: { stateParams: 'state value' },
            query: { queryPrams: 'query value' }
          }}
        >
        About
        </NavLink>
        <span> | </span>
        <NavLink to="/login">Login</NavLink>
        <div
          style={{
            padding: '5px',
            margin: '10px 0',
            minHeight: '300px',
            border: '1px solid #666'
          }}
        >
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={props => <Home {...props} />} />
              <Route path="/about" component={props => <About {...props} />} />
              <Route path="/product" component={props => <Product {...props} />} />
            </Switch>
          </Suspense>
        </div>
      </section>
      <footer className={appLess.footer}>footer</footer>
    </Fragment>
  );
};

export default App;
