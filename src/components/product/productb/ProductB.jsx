/*
 * @Author: Detcx
 * @Date: 2019-01-31 15:10:02
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-25 13:40:01
 * @Description: ProductB Page
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Empty } from 'antd';
import axios from '__Utils__/http';
import ErrorBoundary from '__PublicComponents__/errorBoundary/ErrorBoundary';
import noDataImg from '__ImagesPath__/noData.png';
import * as ActionCreators from './store/actionCreator';
import pbLess from './productB.less';

const UserListUI = props => {
  const { userList } = props;
  if (!Array.isArray(userList)) throw new Error('fetch userList failed!');
  return userList.map(item => (
    <div key={item.id}>
      <span>id: {item.id}</span>
      <span> - </span>
      <span>{item.name}</span>
      <span> - </span>
      <span>{item.gender}</span>
      <span> - </span>
      <span>{item.age}</span>
    </div>
  ));
};

class ProductB extends Component {
  componentDidMount() {
    /* axios.get('/api/getEnvirData')
      .then(result => {
        console.log('local node result: ', result);
      })
      .catch(reason => {
        console.log('local node reason:', reason);
      });

    axios.get('/mock/example1')
      .then(result => {
        console.log('rank result: ', result);
      })
      .catch(reason => {
        console.log('rank reason:', reason);
      }); */

    /* axios.get('/mock/example2?abc=123', { params: { name: 'Merry' } })
      .then(result => {
        console.log('girls result: ', result);
      })
      .catch(reason => {
        console.log('girls reason:', reason);
      }); */
    console.log('noDataImg: ', noDataImg);
    console.log('pbLess: ', pbLess);
    const { fetchUserList } = this.props;
    fetchUserList(1, 10); // fetch local node userList
  }

  /* render() {
    const { userList } = this.props;
    console.log('userList: ', userList);
    return (
      <div className={pbLess.container}>
        <h4>Product B</h4>
        <div className={pbLess.usercont}>
          <ErrorBoundary>
            {
              !Array.isArray(userList) ? (new Error('fetch userList failed!')) : userList.map(item => (
                <div key={item.id}>
                  <span>id: {item.id}</span>
                  <span> - </span>
                  <span>{item.name}</span>
                  <span> - </span>
                  <span>{item.gender}</span>
                  <span> - </span>
                  <span>{item.age}</span>
                </div>
              ))
            }
            第二种方式
            <UserListUI userList={userList} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
*/
  render() {
    const { userList } = this.props;
    console.log('userList: ', userList);
    return (
      <div className={pbLess.container}>
        <h4>Product B</h4>
        <div className={pbLess.usercont}>
          {
            !Array.isArray(userList) ? (
              <Empty
                description="暂无数据"
                image={noDataImg}
              />
            ) : (
              userList.map(item => (
                <div key={item.id}>
                  <span>id: {item.id}</span>
                  <span> - </span>
                  <span>{item.name}</span>
                  <span> - </span>
                  <span>{item.gender}</span>
                  <span> - </span>
                  <span>{item.age}</span>
                </div>
              ))
            )
          }
        </div>
      </div>
    );
  }
}

// 设置属性类型
ProductB.propTypes = {
  userList: PropTypes.any,
  fetchUserList: PropTypes.func.isRequired
};

ProductB.defaultProps = {
  userList: []
};

// 映射 state 成 prop
const mapStateToProps = state => ({
  userList: state.getIn(['productb', 'userList'])
});

// 映射 methods 成 prop，所以 methods 能从这里获取 dispatch
const mapDispathToProps = dispatch => ({
  fetchUserList(page, rows) {
    dispatch(ActionCreators.fetchUserList(page, rows));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ProductB);
