/*
 * @Author: Detcx
 * @Date: 2019-1-25 11:35:24
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-13 16:57:12
 * @Description: Dll Production
 */

const os = require('os');
const merge = require('webpack-merge');
const base = require('./webpack.config.dll.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge.smart(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: os.cpus().length - 1
      })
    ]
  }
});
