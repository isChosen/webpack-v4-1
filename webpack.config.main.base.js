/*
 * @Author: liangchaoshun
 * @Date: 2019-1-25 11:38:25
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-22 18:51:53
 * @Description: Webpack Configuration Base
 */

const os = require('os');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });

module.exports = {
  entry: './src/index.jsx',

  optimization: {
    splitChunks: {
      name: true,
      minChunks: 1,
      chunks: 'all',
      minSize: 30000,
      maxAsyncRequests: 9,
      maxInitialRequests: 6,
      automaticNameDelimiter: '-',
      /**
       * 提取公共代码 code-splitting
       * 第三方库或非入口的组件按需加载： async
       * 入口处(entry point)： initial
       */
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        antd: {
          name: 'chunk-antd',
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          priority: 20,
          chunks: 'async'
        },
        axios: {
          name: 'chunk-axios',
          test: /[\\/]node_modules[\\/]axios[\\/]/,
          priority: 25,
          chunks: 'async'
        },
        lodash: {
          name: 'chunk-lodash',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 30,
          chunks: 'async'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=jsx'
      },
      /* vendor 样式不需要模块化 */
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          'happypack/loader?id=cssInNodeModules'
        ]
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          'happypack/loader?id=lessInNodeModules'
        ]
      },
      /* 自定义样式 模块化 */
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          { loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'happypack/loader?id=cssExcNodeModules'
        ]
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          { loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'happypack/loader?id=lessExcNodeModules'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: 'file-loader',
              name: '[name][hash:4].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    mainFields: ['browser', 'main'],
    // mainFields: ["jsnext:main", "browser", "main"], // 配合 scope hoisting
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      __Utils__: path.resolve(__dirname, 'src/utils'),
      __StorePath__: path.resolve(__dirname, 'src/store'),
      __ImagesPath__: path.resolve(__dirname, 'static/images'),
      __ComponentsPath__: path.resolve(__dirname, 'src/components'),
      __PublicComponents__: path.resolve(__dirname, 'src/components/common')
    }
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(), // scope hoisting

    // 分离 css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css', // 自定义样式
      chunkFilename: 'css/[name].[contenthash:6].css' // 供应商(vendor)样式
    }),

    // 动态链接库
    new webpack.DllReferencePlugin({
      manifest: require('./dll/react.manifest.json')
    }),

    // 多进程
    new HappyPack({
      id: 'jsx',
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: HappyThreadPool
    }),
    new HappyPack({
      id: 'cssInNodeModules',
      loaders: ['css-loader', 'postcss-loader'],
      threadPool: HappyThreadPool
    }),
    new HappyPack({
      id: 'lessInNodeModules',
      loaders: ['css-loader', 'postcss-loader', 'less-loader'],
      threadPool: HappyThreadPool
    }),
    new HappyPack({
      id: 'cssExcNodeModules',
      loaders: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]-[hash:base64:4]'
          }
        },
        'postcss-loader'
      ],
      threadPool: HappyThreadPool
    }),
    new HappyPack({
      id: 'lessExcNodeModules',
      loaders: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 2,
            localIdentName: '[local]-[hash:base64:4]'
          }
        },
        'postcss-loader',
        'less-loader'
      ],
      threadPool: HappyThreadPool
    })
  ]
};
