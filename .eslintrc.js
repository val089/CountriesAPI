module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        useTabs: false,
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'es5',
      },
    ],
    'no-console': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
