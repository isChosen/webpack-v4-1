/*
 * @Author: liangchaoshun
 * @Date: 2019-02-16 09:35:33
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 14:52:53
 * @Description: All Requestion
 */
import api from './api';
import axios from './http';

export default {
  fetchUser: () => axios(api.fetchGithubUser),
  fetchRandom: () => axios(api.fetchRandom)
};
