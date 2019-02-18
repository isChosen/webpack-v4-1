/*
 * @Author: liangchaoshun
 * @Date: 2019-02-10 20:01:18
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-18 09:34:32
 * @Description: Axios Interceptor
 */

import axios from 'axios';

axios.defaults.timeout = 5000;

// request interceptor
axios.interceptors.request.use(
  config => {
    console.log('axios config: ', config);

    if (config.method.toLowerCase() === 'post') {
      let params = {};
      const { headers: { 'Content-Type': ct } } = config;
      if (config.data) {
        if (typeof config.data === 'string') {
          params = JSON.parse(config.data);
        } else {
          params = config.data;
        }
      }
      params.pageIndex || (params.pageIndex = 1);
      params.pageRows || (params.pageRows = 10);
      if (ct === 'application/x-www-form-urlencoded') {
        config.data = JSON.stringify(params);
      } else {
        config.data = params;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

// TODO response interceptor
axios.interceptors.response.use(
  // eslint-disable-next-line arrow-body-style
  response => {
    // console.log('axios response: ', response);
    return response;
  },
  error => Promise.reject(error)
);

export default axios;
