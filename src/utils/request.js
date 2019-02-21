/*
 * @Author: liangchaoshun
 * @Date: 2019-02-16 09:35:33
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-21 13:53:36
 * @Description: All Requestion
 */
import api from './api';
import axios from './http';

const request = {
  fetchLoggedStatus: () => axios(api.fetchLoggedStatus),
  fetchUser: () => axios(api.fetchGithubUser),
  fetchRandom: () => axios(api.fetchRandom)
};

export default request;
