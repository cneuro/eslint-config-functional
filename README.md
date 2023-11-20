# eslint-config-succinct

An [ESLint](https://eslint.org/) configuration library for projects based on React 18+ with Typescript 5+.

## Disclaimer

This is an exhaustive and **opinionated** ESLint config that enforces consistent usage of ES6 & [strict](https://typescript-eslint.io/linting/configs/#strict) TypeScript non-OOP paradigms. It encourages adherence to best practices and restricts certain language features that are prone to anti-patterns.

> NB: This config also extends the [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) `recommended` config which supplies a wide host of syntax and pattern restrictions.

## Particularities

The following `unicorn/recommended` rules are amended:

- `unicorn/filename-case` - most React apps will use PascalCase for component files and kebab-case or snakeCase for others. snake_case should be eschewed in favour of kebab-case.
- `unicorn/no-array-callback-reference` - this conflicts with type-guards when applying `Array.filter()`, since spelling out the function parameters loses the assertion for subsequent functional chaining.
- `unicorn/no-nested-ternary` - this conflicts with prettier's autoformat when using redundant parentheses.

Notable additional linting rules include:

- `class` declarations are disallowed (encouraging the use of pure functions).
- `default` exports are disallowed (named exports keep imports consistent).
- `interface` declarations are disallowed (avoids [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces) - use `type` instead).
- `enum` declarations are disallowed (use string [unions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) instead).
- Object keys, union types, imports and component props are sorted in case-insensitive alphabetical order.
- Unused variables in object spreads or function arguments can be denoted by prefixing with a "_".

## Installation

First, install this package alongside `eslint`:

```sh
npm install -D @kitnato/eslint-config-succinct eslint
```

Next, create the `.eslintrc.json` configuration file at the root of your project:

```json
{
  "extends": "@kitnato/eslint-config-succinct",
}
```

Remember to [set](https://eslint.org/docs/latest/user-guide/configuring/ignoring-code) here any `ignorePatterns` if you require them beyond the standard `build` and `dist` folders, along with any other config overrides.

## Usage

Once installed, you can run any `eslint` command.

You may also define scripts that will lint, fix and format your files to help automate your workflow.

For example, in your `package.json`, add the following under `scripts`:

```json
"scripts": {
  "lint-code": "eslint --fix --ext .ts,.tsx .",
}
```

## IDE setup

### VS Code

If you use Microsoft VS Code, you can add the following snippet at the top of your `.vscode/settings.json` to automatically run `eslint` and fix all issues whenever a file is saved.

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

## License

This work is licensed under the [GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).
