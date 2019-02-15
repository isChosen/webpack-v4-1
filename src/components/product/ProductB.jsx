/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:10:02
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-13 18:04:06
 * @Description: ProductB Page
 */

import React, { Component } from 'react';
import { axios } from '__Utils__';
import pbLess from './productB.less';

export default class ProductB extends Component {
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
    axios.post('/mock/example2?abc=123', { name: 'Merry' })
      .then(result => {
        console.log('girls result: ', result);
      })
      .catch(reason => {
        console.log('girls reason:', reason);
      });

    /* // local node server
    axios.post('/api/getUsers')
      .then(result => {
        console.log('users result: ', result);
      })
      .catch(reason => {
        console.log('users reason:', reason);
      }); */
  }

  render() {
    return <div className={pbLess.container}>Product B</div>;
  }
}
