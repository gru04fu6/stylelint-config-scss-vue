module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-prettier'
    ],
    plugins: ['stylelint-scss'],
    rules: {
        'color-hex-case': 'upper',
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['deep', 'v-deep']
        }],
        'no-empty-source': null
    }
};