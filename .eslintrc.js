module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['info', 'warn', 'error'] }] : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'linebreak-style': 'off',
    'arrow-parens': ['error', 'always'],
    'max-len': ['error', 400],
    'template-curly-spacing': ['error', 'always'],
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'no-param-reassign': ['error', { props: false }],
    indent: 'off',
    'indent-legacy': ['error', 2, {
      SwitchCase: 1,
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 0,
      switchCase: 1,
      ignores: [],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1,
    }],
  },
};
