/*
 * @Author: lcs
 * @Date: 2019-01-31 15:04:38
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 16:54:23
 * @Description: ProductA Page
 */

import React, { Component } from 'react';
import _isEqual from 'lodash/isEqual';
import paLess from './productA.less';

export default class ProductA extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !(
      _isEqual(this.props, nextProps) && _isEqual(this.state, nextState)
    );
  }

  render() {
    // console.log('ProductA -> props: ', this.props);
    return <div className={paLess.container}>Product A</div>;
  }
}
