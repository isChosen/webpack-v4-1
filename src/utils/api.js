/*
 * @Author: Detcx
 * @Date: 2019-02-10 20:01:38
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 13:58:38
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
  }
};
