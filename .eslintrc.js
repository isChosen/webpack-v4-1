/*
 * @Author: lcs
 * @Date: 2019-01-31 11:01:01
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 16:55:11
 * @Description: Eslint Configuration
 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    // value 为 "off" 时，表示禁用
    'no-unused-vars': 'warn', // 变量：声明了但未使用
    'no-console': 'off', // 文中 console.log：可以有
    indent: ['error', 2], // 缩进： 2 个空格
    'linebreak-style': ['error', 'windows'], // 换行：CRLF
    quotes: ['error', 'single'], // 引号：单引号
    semi: ['error', 'always'], // 语句结束：分号
    'comma-dangle': ['error', 'never'], // 尾逗号：不需要
    'arrow-parens': ['warn', 'as-needed'], // 箭头函数：一个参数时不需要括号
    'jsx-a11y/anchor-is-valid': 'off', // href：必须为为有效值
    'jsx-quotes': ['error', 'prefer-double'], // jsx 标签属性引号：双引号
    'react/jsx-one-expression-per-line': 'off', // jsx 表达式：每行只能一条表达式
    'react/prefer-stateless-function': 'warn', // 建议改成无状态函数
    'react/prop-types': 'warn', // react props 检测
    'import/no-unresolved': 'off', // 确保导入的模块可以解析为本地文件系统上的模块
    'class-methods-use-this': "off",
    'max-len': ["error", { "code": 150 }], // 每行代码多大长度
    'object-curly-newline': [ // 对象字面量换行方式
      'error',
      {
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 2 }
      }
    ],
    'react/jsx-wrap-multilines': [ // jsx 标签在几种情况下的换行方式
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore'
      }
    ]
  }
};
