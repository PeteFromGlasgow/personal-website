import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
export default [
  { ignores: ['**/dist/**/*', 'packages/browser/browser/**/*'] },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    semi: false,
    jsx: true,
    commaDangle: 'never'
  }),
  {
    rules: {
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }]
    }
  }
]
