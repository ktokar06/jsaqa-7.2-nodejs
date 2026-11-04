import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      "prefer-const": "error",
      eqeqeq: "error",
    },
  },
];
