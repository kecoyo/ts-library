module.exports = {
  printWidth: 150,
  semi: true,
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  overrides: [
    {
      files: ['*.md'],
      options: {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
};
