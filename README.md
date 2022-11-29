# eslint-config-alpha

This is a shareable linting configuration library for projects based on React 18 with Typescript 4 utilizing [ESLint](https://eslint.org/).

It is an exhaustive and opinionated configuration that cares about details like alphabetic ordering and strictly enforces best practices for syntax with the goal of having correct and consistent code.

## Installation

First, install this package alongside `eslint`:

```sh
npm install -D @cneuro/eslint-config-alpha eslint
```

Next, create the `.eslintrc.json` configuration file at the root of your project:

```json
{
  "extends": "@cneuro/eslint-config-alpha",
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
