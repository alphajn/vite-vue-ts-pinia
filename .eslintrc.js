module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.tsx', '.json'],
            },
        },
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        '.eslintrc-auto-import.json',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': [2, 4],
        // 每行最大长度
        'max-len': [2, {
            code: 150,
        }],
        // 4 行空格缩进
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 0,
        // 允许部分页面引用 devDependencies 中的依赖
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.js',
                    '**/*.test.jsx',
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    'vite.config.ts',
                ],
            },
        ],
        'import/no-unresolved': [
            2,
            { ignore: ['.vue$', '^@/'] },
        ],
        // import 可以不用写后缀.js .vue
        'import/extensions': [
            'error',
            'never',
            {
                ts: 'never',
                js: 'never',
                vue: 'always',
                json: 'always',
            },
        ],
        'consistent-return': 0,
        'import/prefer-default-export': 0,
        'no-param-reassign': ['error', { props: false }],
        '@typescript-eslint/ban-ts-comment': 0,
    },
    overrides: [{
        files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
            jest: true,
        },
    }],
};
