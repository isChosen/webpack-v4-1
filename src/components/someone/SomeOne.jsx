/*
 * @Author: liangchaoshun
 * @Date: 2019-02-15 13:38:05
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 15:35:45
 * @Description: Test for Communication Between Components
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionsCreators from './store/actionCreator';
import someoneLess from './someone.less';

const SomeOne = props => {
  const { hasBkColor, toggleSelfBk, toggleParentBk, homeBkColor } = props;
  return (
    <div className={`${someoneLess.someoneCont} ${hasBkColor ? someoneLess.hasBkColor : ''}`}>
      <h4>子组件：测试组件间的通信</h4>
      <hr />
      <button type="button" onClick={toggleSelfBk.bind(this, hasBkColor)}>Change self bk</button>
      <span> | </span>
      <button type="button" onClick={toggleParentBk.bind(this, homeBkColor)}>Change parent bk</button>
    </div>
  );
};

// 设置属性类型
SomeOne.propTypes = {
  hasBkColor: PropTypes.bool,
  homeBkColor: PropTypes.bool,
  toggleSelfBk: PropTypes.func.isRequired,
  toggleParentBk: PropTypes.func.isRequired
};

// 设置属性默认值
SomeOne.defaultProps = {
  hasBkColor: false,
  homeBkColor: false
};

// 映射 state 成 prop
const mapStateToProps = state => ({
  hasBkColor: state.getIn(['someone', 'hasBkColor']),
  homeBkColor: state.getIn(['home', 'hasBkColor'])
});

// 映射 methods 成 prop，所以 methods 能从这里获取 dispatch
const mapDispathToProps = dispath => ({
  toggleSelfBk(bool) {
    dispath(actionsCreators.toggleSelfBk(bool));
  },
  toggleParentBk(bool) {
    dispath(actionsCreators.toggleParentBk(bool));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(SomeOne);
