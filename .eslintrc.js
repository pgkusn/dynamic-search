module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'brace-style': ['error', 'stroustrup'],
        indent: ['error', 4],
        semi: ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', { singleline: 3 }],
        'import/no-absolute-path': 'off',
        'no-undef': 'off',
        'eol-last': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
