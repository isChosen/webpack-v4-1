/*
 * @Author: Detcx
 * @Date: 2019-02-10 20:01:18
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-11 15:44:18
 * @Description: Axios Interceptor
 */

import axios from 'axios';

axios.defaults.timeout = 5000;

// request interceptor
axios.interceptors.request.use(
  config => {
    // console.log('axios config: ', config);

    if(config.method.toLowerCase() === 'post') {
      let params = {};
      if(config.data) {
        if (typeof config.data === 'string') {
          params = JSON.parse(config.data);
        } else {
          params = config.data;
        }
      };
      params.curr || (params.curr = 1);
      params.per_page || (params.per_page = 10);
      config.data = params;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  }
);

// TODO response interceptor
axios.interceptors.response.use(
  response => {
    // console.log('axios response: ', response);
    return response;
  }, error => {
    return Promise.reject(error);
  }
);

export default axios;
