/*
 * @Author: your name
 * @Date: 2020-12-10 16:12:44
 * @LastEditTime: 2020-12-10 16:12:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /goupu-admin/.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      '@vue/standard'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "space-before-function-paren": 0,
      "indent": [2, 4]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  