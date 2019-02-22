/* eslint-disable default-case */
/*
 * @Author: liangchaoshun
 * @Date: 2019-02-10 20:01:18
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-22 17:20:19
 * @Description: Axios Interceptor
 */

import axios from 'axios';
import { NEED_TO_LOGININ } from './constants';
import { needToReLogin } from './methods';

axios.defaults.timeout = 5000;

axios.interceptors.response.use(
  response => {
    console.log('axios response: ', response);

    // NEED_TO_LOGININ handle
    const { data: { code: statusCode } } = response;
    console.log('statusCode - NEED_TO_LOGININ: ', `${statusCode} - ${NEED_TO_LOGININ}`);
    if (statusCode === NEED_TO_LOGININ) needToReLogin();
    return response;
  },
  error => Promise.reject(error)
);

export default axios;
