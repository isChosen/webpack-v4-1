/*
 * @Author: Detcx
 * @Date: 2019-02-10 20:01:38
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-11 15:44:12
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
}
