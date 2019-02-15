/*
 * @Author: liangchaoshun
 * @Date: 2019-1-25 11:35:12
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-13 16:57:04
 * @Description: Dll Development
 */

const merge = require('webpack-merge');
const base = require('./webpack.config.dll.base');

module.exports = merge.smart(base, {
  mode: 'development'
});
