module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-recommended-scss'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'no-empty-source': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
