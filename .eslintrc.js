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
  // extends: ['eslint:recommended', 'plugin:vue/recommended', 'standard'],
  extends: ['eslint:recommended', 'standard'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'always',
      },
    ],
  },
  globals: {
    $: 'readonly',
    moment: 'readonly',
  },
}
