/*
 * @Author: liangchaoshun
 * @Date: 2019-02-11 11:45:31
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-21 18:34:50
 * @Description: Project Common Methods
 */

import { Modal } from 'antd';

export const afn = (arg1, arg2) => {
  console.log('utils addition: ', arg1 + arg2);
};

export const bfn = (arg1, arg2) => {
  console.log('utils subtraction: ', arg1 - arg2);
};

export const cfn = (arg1, arg2) => {
  console.log('utils multiplication: ', arg1 * arg2);
};

export const dfn = (arg1, arg2) => {
  console.log('utils division: ', arg1 / arg2);
};

// 登录失效，需重新登录
export const needToReLogin = () => {
  Modal.error({
    title: '登录失效，请重新登录',
    width: 300,
    centered: true,
    okText: '确定',
    onOk() {
      localStorage.removeItem('accountInfo');
      console.log('reLoginConfirm called');
      const { location: { origin, pathname } } = window;
      const loginUrl = `${origin}${pathname}#/login`;
      window.location.replace(loginUrl);
    }
  });
};
