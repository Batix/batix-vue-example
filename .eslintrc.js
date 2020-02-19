module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "plugin:vue/recommended", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-indent': ["warn", 2, {}],
    'no-unused-vars': 'warn',
  }
};
