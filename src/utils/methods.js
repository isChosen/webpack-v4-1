/*
 * @Author: Detcx
 * @Date: 2019-02-11 11:45:31
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 19:18:57
 * @Description: Common Methods
 */

const afn = (arg1, arg2) => {
  console.log('utils addition: ', arg1 + arg2);
};

const bfn = (arg1, arg2) => {
  console.log('utils subtraction: ', arg1 - arg2);
};

const cfn = (arg1, arg2) => {
  console.log('utils multiplication: ', arg1 * arg2);
};

const dfn = (arg1, arg2) => {
  console.log('utils division: ', arg1 / arg2);
};

export { afn, bfn, cfn, dfn };