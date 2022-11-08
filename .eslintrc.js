module.exports = {
  // 指定目錄，設置root代表.eslintrc.js放置地方開始檢查
  root: true,
  // 在哪個環境底下運行
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true
  },
  // 解析用哪種程式碼
  parserOptions: {
    parser: 'babel-eslint'
  },
  // plugins 第三方的套件，這些套件前需要先透過 npm 進行安裝
  // extends: ['eslint:recommended', 'plugin:vue/recommended', 'standard'],
  // plugins 第三方的套件，這些套件前需要先透過 npm 進行安裝
  extends: ['eslint:recommended', 'standard'],
  // 客製化並覆寫 lint 規則
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'no-eval': ['error', { allowIndirect: true }],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  },
  globals: {
    $: 'readonly',
    moment: 'readonly'
  }
}
