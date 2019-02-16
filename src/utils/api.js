/*
 * @Author: liangchaoshun
 * @Date: 2019-02-10 20:01:38
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 14:52:38
 * @Description: Request Path
 */
const domain = '/asdf';

export default {
  users: {
    url: `${domain}/userList`,
    method: 'get'
  },
  updateUser: {
    url: `${domain}/updateUser`,
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
