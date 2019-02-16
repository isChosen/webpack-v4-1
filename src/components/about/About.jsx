/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 21:34:45
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 19:19:09
 * @Description: About Page
 */

import React, { Component } from 'react';
import { Table, Icon } from 'antd';
// import axios from '../../utils/http';
import axios from 'axios';
import qs from 'qs';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <span className="ant-divider" />
        <a href="#">Delete</a>
        <span className="ant-divider" />
        <a href="#" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

class About extends Component {
  componentDidMount() {
    console.log('about props: ', this.props);
    setTimeout(() => {
      axios({
        method: 'POST',
        url: '/v1/web/sleepAccount/common/sleep/login4Hotel',
        data: qs.stringify({
          username: '18820993052',
          password: 'VUsFjBeODaABgu37tXzPbw=='
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(result => {
        console.log('login result: ', result);
      }).catch(reason => {
        console.log('login reason: ', reason);
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h3><span className="iconfont" style={{ marginRight: 5 }}>&#xeb65;</span><span>About</span></h3>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default About;
