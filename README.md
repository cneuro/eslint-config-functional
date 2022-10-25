# eslint-config-alpha

This is a shareable linting configuration library for React 18 with Typescript 4 and CSS3 utilizing [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/).

It is an exhaustive and opinionated configuration that cares about details like alphabetic ordering.

## Installation

First, install this package alongside its main dependencies:

```sh
npm install -D @cneuro/eslint-config-alpha @rushstack/eslint-patch eslint prettier stylelint
```

Note:

> With the [`eslint-patch`](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch) package, `peerDependencies` are automatically resolved in your project's local config file, so that the ESLint plugins don't all need to be installed manually.
See [this issue](https://github.com/eslint/eslint/issues/3458) for more details.

Next, create a series of configuration files at the root of your project.

1. Add `.eslintrc.js`:

```js
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: "@cneuro/eslint-config-alpha",
};
```

2. Add `.prettierrc.js`:

```js
module.exports = {
  ...require("@cneuro/eslint-config-alpha/.prettierrc.js")
};
```

3. Add `.stylelintrc.json`:

```json
{
  "extends": ["@cneuro/eslint-config-alpha/.stylelint.json"]
}
```

## Usage

Once installed, you may define scripts that will lint, fix and format your files.

In your `package.json`, add these under `scripts`:

```sh
"scripts": {
  ...
  "lint-code": "eslint --fix --ext .json,.ts,.tsx .",
  "lint-format": "prettier --write .",
  "lint-styles": "stylelint '**/*.css'",
  ...
}
```

This will help automate the linting process across all your files, and you can add them to your workflows.

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
