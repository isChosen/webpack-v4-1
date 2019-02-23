/*
 * @Author: liangchaoshun
 * @Date: 2019-1-25 11:42:19
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-23 17:50:44
 * @Description: Webpack Configuration Production
 */

const os = require("os");
const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.config.main.base");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge.smart(base, {
  mode: "production",

  output: {
    publicPath: "./dist/",
    path: path.resolve(__dirname, "dist"), // 绝对路径
    filename: 'bundle/[name].bundle.[hash:4].js',
    chunkFilename: 'bundle/[name].[chunkhash:6].js'
  },
  optimization: {
    minimizer: [
      // 压缩 js
      new UglifyJsPlugin({
        cache: path.resolve(__dirname, "cache"),
        parallel: os.cpus().length - 1
      }),

      // 压缩分离的 css
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: { removeAll: true }
        }
      })
    ]
  },

  plugins: [
  
    // 清理文件
    new CleanWebpackPlugin(["dist", "analysis"]),

    // 模板
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: '../index.html',
      title: '__Summer_pro_',
      favicon: __dirname + '/favicon.ico',
      template: __dirname + '/tmpl/index.pro.html'
    }),

    new CopyWebpackPlugin([
      // dll
      {
        from: "dll",
        to: "dll",
        type: "dir"
      },
      // static
      {
        from: "static/css",
        to: "static/css",
        type: "dir"
      },
      {
        from: "static/fonts",
        to: "static/fonts",
        type: "dir"
      },
      {
        from: "static/lib",
        to: "static/lib",
        type: "dir"
      },

    ])
  ]
});
