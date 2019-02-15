/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:03:13
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 14:50:13
 * @Description: Home Page
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cover from '__ImagesPath__/cover.jpg';
import { methods } from '__Utils__';
import * as ActionsCreators from './store/actionCreator';
import homeLess from './home.less';
import SomeOne from '../someone/SomeOne';

class Home extends Component {
  componentDidMount() {
    /* methods.afn(1, 2);
    methods.bfn(5, 1);
    methods.cfn(9, 2); */
  }

  render() {
    const { hasBkColor, toggleBkColor, getRandomNum, randomNum } = this.props;
    return (
      <div className={`${homeLess.homeCont} ${hasBkColor ? homeLess.hasBkColor : ''}`}>
        <h3><span className="iconfont" style={{ marginRight: 5 }}>&#xeb62;</span><span>Home</span></h3>
        <img
          alt="cover"
          src={cover}
          style={{ width: 500, height: 300, borderRadius: 4 }}
        />
        <br /><br />
        <button type="button" onClick={toggleBkColor.bind(this, hasBkColor)}>Toggle background</button>
        <br /><br />
        <button type="button" onClick={getRandomNum.bind(this)}>Get a random</button> <span>{randomNum}</span>
        <SomeOne />
      </div>
    );
  }
}

// 设置属性类型
Home.propTypes = {
  hasBkColor: PropTypes.bool,
  randomNum: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  getRandomNum: PropTypes.func.isRequired,
  toggleBkColor: PropTypes.func.isRequired
};

// 设置属性默认值(！注意：若属性设置了 isRequired，就不用设置默认值, 且其属性值不能是 null)
Home.defaultProps = {
  hasBkColor: false,
  randomNum: null
};

// 映射 state 成 prop
const mapStateToProps = state => ({
  hasBkColor: state.getIn(['home', 'hasBkColor']),
  randomNum: state.getIn(['home', 'randomNum'])
});

// 映射 methods 成 prop，所以 methods 能从这里获取 dispatch
const mapDispathToProps = dispath => ({
  toggleBkColor(bool) {
    dispath(ActionsCreators.toggleBkColor(bool));
  },
  getRandomNum() {
    dispath(ActionsCreators.getRandomNum());
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
