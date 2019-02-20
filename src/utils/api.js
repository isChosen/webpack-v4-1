/*
 * @Author: liangchaoshun
 * @Date: 2019-02-10 20:01:38
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 14:52:38
 * @Description: Request Path
 */
const csleep = '/v1/web/csleep';
const sleepAccount = '/v1/web/sleepAccount';

export default {
  login4Hotel: {
    url: `${sleepAccount}/common/sleep/login4Hotel`,
    method: 'post'
  },
  users: {
    url: `${csleep}/userList`,
    method: 'get'
  },
  updateUser: {
    url: `${csleep}/updateUser`,
    method: 'post'
  },
  fetchGithubUser: {
    url: 'https://api.github.com/users/isChosen',
    method: 'get'
  },
  fetchRandom: {
    url: '/mock/getRandom',
    method: 'get'
  }
};
