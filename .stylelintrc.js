module.exports = {
    plugins: [
        'stylelint-scss'
    ],
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue',
        'stylelint-config-recommended-vue/scss',
    ],
    'overrides': [
        {
            'files': [
                '*.scss',
                '**/*.scss'
            ],
            'customSyntax': 'postcss-scss'
        },
        {
            'files': [
                '*.vue',
                '**/*.vue'
            ],
            'customSyntax': 'postcss-html'
        }
    ],
    'rules': {
        'at-rule-no-unknown': [
            true,
            {
                'ignoreAtRules': [
                    'extends',
                    'each'
                ]
            }
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                'ignorePseudoClasses': [
                    'deep'
                ]
            }
        ],
        'scss/at-rule-no-unknown': true,
        'no-empty-source': true,
        'indentation': 4,
        'max-nesting-depth': 4,
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'selector-pseudo-element-no-unknown': [
            true,
            {
                'ignorePseudoElements': [
                    'v-deep'
                ]
            }
        ],
    }
}
