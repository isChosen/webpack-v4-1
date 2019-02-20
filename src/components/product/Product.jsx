/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:11:29
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-20 18:32:35
 * @Description: Product Page
 */

import React, { Component, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Spin, Icon } from 'antd';

import productLess from './product.less';

const ProductA = lazy(() => import(/* webpackChunkName: "chunk-producta" */ './producta/ProductA'));
const ProductB = lazy(() => import(/* webpackChunkName: "chunk-productb" */ './productb/ProductB'));

class Product extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line object-curly-newline
    this.state = {
      // count: 0
    // eslint-disable-next-line object-curly-newline
    };
  }

  componentDidMount() {
    /* setInterval(() => {
      let { count } = this.state;
      console.log('count: ', count);
      this.setState({count: ++count})
    }, 2000) */
    console.log('less: ', productLess);
  }

  render() {
    const { match: { path, url } } = this.props;
    const DefaultView = () => <div>默认视图</div>;
    return (
      <div>
        <h3><span className="iconfont" style={{ marginRight: 5 }}>&#xe6af;</span><span>Product</span></h3>
        <nav><Link to={`${url}/proda`}>product-a</Link> | <Link to={`${url}/prodb`}>product-b</Link></nav>
        <Suspense fallback={<Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />}>
          <div className={productLess.routerCont}>
            <Switch>
              <Route path={`${path}/proda`} render={props => <ProductA {...props} />} />
              <Route path={`${path}/prodb`} render={props => <ProductB {...props} />} />
              {/* <Route path='/product/proda' component={ProductA} />
              <Route path='/product/prodb' component={ProductB} /> */}
              <Route component={DefaultView} />
            </Switch>
          </div>
        </Suspense>
        <div className={productLess.testBg}>
          <h4 className={productLess.title}>这是 title</h4>
          <span className={productLess.desc}>背景图片</span>
        </div>
      </div>
    );
  }
}

export default Product;
