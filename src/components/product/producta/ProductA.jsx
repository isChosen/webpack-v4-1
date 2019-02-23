/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:04:38
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-23 16:59:43
 * @Description: ProductA Page
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';
import paLess from './productA.less';
import * as actionsCreators from './store/actionCreator';

class ProductA extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !(
      _isEqual(this.props, nextProps) && _isEqual(this.state, nextState)
    );
  }

  render() {
    // console.log('ProductA -> props: ', this.props);
    const { githubUsers, fetchGithubUser } = this.props;
    return (
      <div className={paLess.container}>
        <h4>Product A</h4>
        <br /><br />
        <button type="button" onClick={fetchGithubUser.bind(this)}>Get User info</button>
        <div className={paLess.userInfo}>{githubUsers}</div>
      </div>
    );
  }
}

// 设置属性类型
ProductA.propTypes = {
  githubUsers: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fetchGithubUser: PropTypes.func.isRequired
};

// 设置属性默认值(！注意：若属性设置了 isRequired，就不用设置默认值, 且其属性值不能是 null)
ProductA.defaultProps = {
  githubUsers: ''
};

// 映射 state 成 prop
const mapStateToProps = state => ({
  githubUsers: state.getIn(['producta', 'githubUsers'])
});

// 映射 methods 成 prop，所以 methods 能从这里获取 dispatch
const mapDispathToProps = dispatch => ({
  fetchGithubUser() {
    dispatch(actionsCreators.fetchGithubUser());
  }
});

export default connect(mapStateToProps, mapDispathToProps)(ProductA);
