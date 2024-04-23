module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@stylistic/recommended-extends",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:jsx-a11y/strict",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended"
	],
	ignorePatterns: [
		"build",
		"dist",
		"node_modules",
		"package-lock.json",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		project: true,
		sourceType: "module",
		tsconfigRootDir: "./",
	},
	plugins: [
		"@stylistic",
		"@typescript-eslint",
		"import",
		"jsx-a11y",
		"prefer-arrow",
		"react",
		"react-hooks",
		"sort-destructure-keys",
		"sort-keys-fix",
	],
	root: true,
	rules: {
		"@stylistic/array-element-newline": [
			"error",
			"consistent"
		],
		"@stylistic/function-call-argument-newline": [
			"error",
			"consistent"
		],
		"@stylistic/indent": [
			"error",
			"tab"
		],
		"@stylistic/indent-binary-ops": [
			"error",
			"tab"
		],
		"@stylistic/jsx-indent": [
			2,
			"tab",
			{
				checkAttributes: true,
				indentLogicalExpressions: true
			}
		],
		"@stylistic/jsx-indent-props": [
			2,
			"tab"
		],
		"@stylistic/jsx-sort-props": [
			"error",
			{
				ignoreCase: true,
			},
		],
		"@stylistic/no-extra-parens": [
			"error",
			"all",
			{
				ignoreJSX: "multi-line",
				nestedBinaryExpressions: false
			}
		],
		"@stylistic/no-tabs": [
			"error",
			{
				allowIndentationTabs: true
			}
		],
		"@stylistic/quotes": [
			"error",
			"double"
		],
		"@typescript-eslint/consistent-type-exports": "error",
		"@typescript-eslint/consistent-type-definitions": [
			"error",
			"type",
		],
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				default: {
					memberTypes: "never",
					order: "natural-case-insensitive",
				},
			},
		],
		"@typescript-eslint/no-import-type-side-effects": "error",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/restrict-template-expressions": [
			"error",
			{
				allowAny: false,
				allowBoolean: false,
				allowNullish: false,
				allowRegExp: false,
			}
		],
		"@typescript-eslint/sort-type-constituents": "error",
		"@typescript-eslint/strict-boolean-expressions": [
			"error",
			{
				allowNullableObject: false,
				allowNullableBoolean: true,
			},
		],
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		curly: "error",
		"import/order": [
			"error",
			{
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type"
				],
				"newlines-between": "always",
			}
		],
		eqeqeq: "error",
		"import/no-cycle": "error",
		"import/no-default-export": "error",
		"no-alert": "error",
		"no-console": [
			"warn",
			{
				allow: ["error", "warn"],
			},
		],
		"no-duplicate-imports": "error",
		"no-implicit-coercion": "error",
		"no-restricted-syntax": [
			"error",
			{
				message: "Use functional expression instead.",
				selector: "ClassExpression",
			},
			{
				message: "Use functional declaration instead.",
				selector: "ClassDeclaration",
			},
			{
				message: "Use string union type instead.",
				selector: "TSEnumDeclaration",
			},
		],
		"no-unused-expressions": [
			"error",
			{
				"enforceForJSX": true
			}
		],
		"object-shorthand": [
			"error",
			"always"
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
		"prefer-arrow-callback": [
			"error",
			{
				allowUnboundThis: false,
			},
		],
		"react-hooks/exhaustive-deps": "error",
		"sort-destructure-keys/sort-destructure-keys": [
			"error",
			{
				caseSensitive: false,
			},
		],
		"sort-imports": [
			"error",
			{
				ignoreDeclarationSort: true,
			},
		],
		"sort-keys-fix/sort-keys-fix": [
			"error",
			"asc",
			{
				caseSensitive: false,
				natural: true,
			},
		],
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
