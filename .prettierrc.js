/** @type {import("prettier").Options} */
export default {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: ['**/*.json'],
      options: {
        useTabs: false
      }
    }
  ],
  plugins: ['prettier-plugin-tailwindcss']
}
