/*
 * @Author: liangchaoshun
 * @Date: 2019-02-10 20:01:38
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-21 13:56:15
 * @Description: Request Path
 */
const csleep = '/v1/web/csleep';
const sleepAccount = '/v1/web/sleepAccount';

export default {
  // 获取登录状态
  fetchLoggedStatus: {
    url: '/mock/checkLoggedStatus',
    method: 'get'
  },

  // 登录酒店
  login4Hotel: {
    url: `${sleepAccount}/common/sleep/login4Hotel`,
    method: 'post'
  },

  //
  users: {
    url: `${csleep}/userList`,
    method: 'get'
  },

  //
  updateUser: {
    url: `${csleep}/updateUser`,
    method: 'post'
  },

  // 获取 github 某用户数据
  fetchGithubUser: {
    url: 'https://api.github.com/users/isChosen',
    method: 'get'
  },

  // 获取一个随机数
  fetchRandom: {
    url: '/mock/getRandom',
    method: 'get'
  }
};
