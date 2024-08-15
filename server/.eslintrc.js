module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'unused-imports',
    'no-loops',
    'promise',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    
    // https://eslint.org/docs/latest/rules/no-useless-escape
    'no-useless-escape': 'off',

    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // https://github.com/buildo/eslint-plugin-no-loops
    'no-loops/no-loops': ['warn'],

    // https://github.com/eslint-community/eslint-plugin-promise
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',

    // https://github.com/sweepline/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': ['warn'],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],

    // https://eslint.org/docs/latest/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],

    // https://eslint.org/docs/latest/rules/class-methods-use-this
    'class-methods-use-this': [
      0,
      {
        enforceForClassFields: false
      }
    ],

    // https://eslint.org/docs/latest/rules/max-len
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true
      }
    ],

    // https://typescript-eslint.io/rules/no-empty-function/
    '@typescript-eslint/no-empty-function': ['off'],

    // https://typescript-eslint.io/rules/naming-convention/
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true
        }
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE']
      }
    ]
  }
};
