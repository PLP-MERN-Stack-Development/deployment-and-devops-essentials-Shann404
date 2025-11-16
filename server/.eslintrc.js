module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true  // Jest globals for test files
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'  // auto-detect React version
    }
  },
  rules: {
    // Add your custom rules here, e.g.:
    // 'no-unused-vars': 'warn'
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '**/*.test.js'],
      env: { jest: true }  // Only for test files
    }
  ]
};
