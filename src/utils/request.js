/*
 * @Author: liangchaoshun
 * @Date: 2019-02-16 09:35:33
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-22 11:04:28
 * @Description: All Requestion
 */
import api from './api';
import axios from './http';

const request = {
  fetchLoggedStatus: () => axios(api.fetchLoggedStatus),
  fetchUser: () => axios(api.fetchGithubUser),
  fetchRandom: () => axios(api.fetchRandom),
  fetchUserList: (page, rows) => axios({ ...api.fetchUserList, data: { page, per_page: rows } })
};

export default request;
