module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'jsx-a11y',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'prettier/prettier': ["error", {
      'printWidth': 100,
      'tabWidth': 2,
      'useTabs': false,
      'semi': true,
      'singleQuote': true,
      'quoteProps': 'as-needed',
      'jsxSingleQuote': false,
      'trailingComma': 'es5',
      'bracketSpacing': true,
      'arrowParens': 'always',
      'endOfLine': 'auto'
    }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-unknown-property': 'error',
    "react/jsx-props-no-spreading": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "groups": [
          "builtin",
          "external",
          "internal",
          [
            "sibling",
            "parent"
          ],
          "index",
          "object",
          "type",
          "unknown"
        ]
      }
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  ignorePatterns: [
    'node_modules'
  ]
}
