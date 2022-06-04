module.exports = {
  extends: ['plugin:@web-configs/node', 'plugin:@web-configs/typescript'],
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'function-paren-newline': ['off'],
  },
};
