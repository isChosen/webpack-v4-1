/*
 * @Author: Detcx
 * @Date: 2019-02-21 11:23:48
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-26 20:39:37
 * @Description: Authorized Route
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CHECK_LOGINED_STATUS, SET_LOGINED_PENDING } from '__StorePath__/actionTypes';

class AuthorizedRoute extends Component {
  componentWillMount() {
    const { ckeckLogined } = this.props;
    ckeckLogined();
  }

  // pending 设置回 true!
  componentWillUnmount() {
    const { setPending } = this.props;
    setPending();
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (pending) return <div style={{ textAlign: 'center' }}>应用加载中，请稍候...</div>;
          return (logged ? <Component {...props} /> : <Redirect to="/login" />);
        }}
      />
    );
  }
}

// 设置属性类型
AuthorizedRoute.propTypes = {
  pending: PropTypes.bool,
  logged: PropTypes.bool,
  component: PropTypes.PropTypes.func.isRequired,
  setPending: PropTypes.func.isRequired,
  ckeckLogined: PropTypes.func.isRequired
};

// 设置属性默认值
AuthorizedRoute.defaultProps = {
  pending: true,
  logged: false
};

// 映射 state 成 prop
const stateToProps = state => ({
  logged: state.getIn(['auth', 'logged']),
  pending: state.getIn(['auth', 'pending'])
});

// 映射 methods 成 prop，所以 methods 能从这里获取 dispatch
const mapDispathToProps = dispatch => ({
  setPending() {
    dispatch({ type: SET_LOGINED_PENDING, pending: true });
  },
  ckeckLogined() {
    dispatch({ type: CHECK_LOGINED_STATUS });
  }
});

export default connect(stateToProps, mapDispathToProps)(AuthorizedRoute);
