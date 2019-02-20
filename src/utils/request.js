/*
 * @Author: liangchaoshun
 * @Date: 2019-02-16 09:35:33
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-18 19:03:15
 * @Description: All Requestion
 */
import api from './api';
import axios from './http';

const request = {
  fetchUser: () => axios(api.fetchGithubUser),
  fetchRandom: () => axios(api.fetchRandom)
};

export default request;
