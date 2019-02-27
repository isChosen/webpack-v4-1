/* eslint-disable default-case */
/*
 * @Author: Detcx
 * @Date: 2019-02-10 20:01:18
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-26 20:11:47
 * @Description: Axios Interceptor
 */

import axios from 'axios';
import store from '__StorePath__';
import { NEED_TO_RELOGIN } from '__StorePath__/actionTypes';

axios.defaults.timeout = 5000;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
  3: '请重新登录'
};

axios.interceptors.response.use(
  response => {
    // console.log('response interc: ', response);

    // NEED_TO_LOGININ handle
    const { data: { code: statusCode } } = response;
    if (statusCode === 3) {
      const { dispatch } = store;
      dispatch({ type: NEED_TO_RELOGIN, desc: '登录失效，请重新登录' });
      console.log('登录失效：', codeMessage[3]);
    }
    return response;
  },
  error => Promise.reject(error)
);

export default axios;
