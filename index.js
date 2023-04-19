module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:json/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
  ],
  ignorePatterns: ["build", "dist", "node_modules", "package-lock.json"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "json",
    "jsx-a11y",
    "prefer-arrow",
    "react",
    "react-hooks",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
    "unicorn",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    curly: "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-cycle": "error",
    "import/no-default-export": "error",
    "no-alert": "error",
    "no-console": ["warn", { allow: ["error", "warn"] }],
    "no-duplicate-imports": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ClassExpression",
        message: "Use functional expression instead.",
      },
      {
        selector: "ClassDeclaration",
        message: "Use functional declaration instead.",
      },
      {
        selector: "TSEnumDeclaration > TSEnumMember > Literal",
        message: "Use a string union type instead.",
      },
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        allowStandaloneDeclarations: true,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: true,
      },
    ],
    "prefer-arrow-callback": ["error", { allowUnboundThis: false }],
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-sort-props": ["error", { ignoreCase: true }],
    "react-hooks/exhaustive-deps": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: false },
    ],
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { caseSensitive: false }],
    "unicorn/switch-case-braces": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
};
