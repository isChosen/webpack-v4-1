/*
 * @Author: liangchaoshun
 * @Date: 2018-11-01 12:16:57
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 19:17:32
 * @Description: Webpack Configuration Development
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const Mock = require('./mocks/mockConf');
const base = require('./webpack.config.main.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge.smart(base, {
  mode: 'development',
  devtool: 'eval-source-map',

  output: {
    filename: 'bundle/[name].bundle[hash:6].js',
    chunkFilename: 'bundle/[name].[chunkhash:6].js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    port: 8058,
    https: false,
    compress: true,
    progress: true,
    open: 'Chrome',
    // host: '0.0.0.0',
    host: 'localhost',
    // useLocalIp: true,
    clientLogLevel: 'error',
    contentBase: __dirname,
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://10.8.12.189:8024', // 本地 node server 接口
        pathRewrite: { '^/api': '' }
      },
      '/v1/web': {
        target: 'https://200.200.200.50', // url 会自动补全：https://200.200.200.50/v1/web
        secure: false // inclusion https
      }
    },
    before: (app, server) => {
      Mock(app); // 静态 mock data
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新

    // 模板
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      title: '__Summer_dev_',
      favicon: __dirname + '/favicon.ico',
      template: __dirname + '/tmpl/index.dev.html'
    }),

    /*   
    // 输出分析
    new BundleAnalyzerPlugin({
      analyzerPort: 2019,
      generateStatsFile: true,
      statsFilename: '../analysis/stats.json'
    })
    */
  ]
});
