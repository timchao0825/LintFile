module.exports = {
  root: true,
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/recommended',
    'standard',
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
  },
  globals: {
    $: 'readonly',
    moment: 'readonly',
  },
}
