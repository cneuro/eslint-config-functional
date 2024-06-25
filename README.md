# eslint-config-succinct

An [ESLint](https://eslint.org/) configuration library for projects based on JSX ([React](https://react.dev/) 18+ or [Preact](https://preactjs.com/) 10+) with Typescript 5+.

## Purpose

This is an **opinionated** ESLint configuration that enforces consistent usage of ES6 & [strict](https://typescript-eslint.io/linting/configs/#strict) TypeScript and modern JSX rules, as well as stylistic rules. It encourages adherence to functional-programming & accessibility best practices and restricts certain language features that are prone to anti-patterns, using Douglas Crockford's [How JavaScript Works](https://www.crockford.com/image/howjsworks.pdf) e-book as an inspiration.

> NB: Not be used alongside [Prettier](https://prettier.io/), because this config uses [@stylistic/eslint-plugin](https://eslint.style/) which supersedes Prettier's rules.

## Particularities

Notable linting rules include:

- `class` declarations are disallowed, encouraging the use of pure functions.
- `default` exports are disallowed, keeping imports consistent.
- `interface` declarations are disallowed, which avoids [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces) - use `type` instead.
- `enum` declarations are disallowed - use string [unions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) instead.
- `for`, `while` and `do` imperative loops are disallowed - use equivalent ES6 [array functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) instead.
- Mutations are heavily restricted: `let` and `delete` declarations, as well as `.push()` and `.pop()` methods.
- Arrow functions are only allowed as callbacks to easily discern them from named functions (which would also need to use `const`).
- Object keys, union types, imports and component props are sorted in case-insensitive alphabetical order to facilitate consistent recognition of object shapes.
- Unused variables in object spreads or function arguments can be denoted by prefixing with the underscore character (`_`).
- Semicolons are not used, instead relying on [ASI](https://262.ecma-international.org/7.0/#sec-rules-of-automatic-semicolon-insertion).
- Enforces the usage of tab characters instead of spaces for indentation. This [article](https://www.alpharithms.com/tabs-vs-spaces-the-timeless-debate-581511) lays out the debate, with pros and cons.

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

Remember to [set](https://eslint.org/docs/latest/user-guide/configuring/ignoring-code) here any `ignorePatterns` if you require them beyond the standard `build` and `dist` folders, along with any other config overrides you may desire.

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

If you use Microsoft VS Code, you can add the following snippet at the top of your `.vscode/settings.json` to automatically run the linter and fix all issues whenever a file is saved.

```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
"eslint.format.enable": true,
```

## License

This work is licensed under the [GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).
