/*
 * @Author: lcs
 * @Date: 2019-01-31 15:03:48
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 20:39:18
 * @Description: Home Page
 */

import React, { Component, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cover from '__ImagesPath__/cover.jpg';
import { methods } from '__Utils__';
import * as ActionsCreators from './store/actionCreator';
import homeLess from './home.less';

class Home extends Component {
  componentDidMount() {
    /* methods.afn(1, 2);
    methods.bfn(5, 1);
    methods.cfn(9, 2); */
  }

  render() {
    const { hasBkColor, toggleBkColor } = this.props;
    return (
      <div className={`${homeLess.homeCont} ${hasBkColor ? homeLess.hasBkColor : ''}`}>
        <h3><span className="iconfont" style={{ marginRight: 5 }}>&#xeb62;</span><span>Home</span></h3>
        <img
          alt="cover"
          src={cover}
          style={{ width: 500, height: 300, borderRadius: 4 }}
        />
        <br />
        <br />
        <button type="button" onClick={toggleBkColor.bind(this, hasBkColor)}>
          Toggle background
        </button>
      </div>
    );
  }
}

// 设置属性类型
Home.propTypes = {
  hasBkColor: PropTypes.bool,
  toggleBkColor: PropTypes.func.isRequired
};

// 设置属性默认值(isRequired 时不用设置默认值)
Home.defaultProps = {
  hasBkColor: false
};

// 映射 state 成 prop
const mapStateToProps = state => ({
  hasBkColor: state.getIn(['home', 'hasBkColor'])
});

// 映射 methods 成 prop，所以 methods 能从这里获取 dispatch
const mapDispathToProps = dispath => ({
  toggleBkColor(bool) {
    dispath(ActionsCreators.toggleBkColor(bool));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
