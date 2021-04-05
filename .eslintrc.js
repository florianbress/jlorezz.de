module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"vue/match-component-file-name": [
			"error",
			{
				extensions: ["js", "jsx", "ts", "tsx", "vue"],
				shouldMatchCase: false,
			},
		],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
