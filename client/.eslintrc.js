module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "import", "@typescript-eslint"],
  extends: [
    "plugin:prettier/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/no-var-requires": "error",
    "no-debugger": "off",
    "no-console": 0,
    "class-methods-use-this": "off",
  },
};
