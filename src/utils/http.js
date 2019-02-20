/* eslint-disable default-case */
/*
 * @Author: liangchaoshun
 * @Date: 2019-02-10 20:01:18
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-20 10:07:37
 * @Description: Axios Interceptor
 */

import axios from 'axios';
import { NETWORK_ANOMALY, PARAMETER_ERROR, NEED_TO_LOGININ } from './constants';
import { requestException, needToReLogin } from './methods';

axios.defaults.timeout = 5000;

axios.interceptors.response.use(
  response => {
    console.log('axios response: ', response);

    // exceptions handle
    const { data: { code: statusCode } } = response;
    console.log('statusCode - NEED_TO_LOGININ: ', `${statusCode} - ${NEED_TO_LOGININ}`);
    switch (statusCode) {
    case PARAMETER_ERROR:
    case NETWORK_ANOMALY: requestException('网络异常，请检查网络或尝试刷新页面'); break;
    // case PARAMETER_ERROR: requestException('参数错误'); break;
    case NEED_TO_LOGININ: needToReLogin(); break;
    }

    return response;
  },
  error => Promise.reject(error)
);

export default axios;
