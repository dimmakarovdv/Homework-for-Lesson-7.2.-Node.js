import js from "@eslint/js";
import globals from "globals";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021
      },
      ecmaVersion: 2021,
      sourceType: "commonjs"
    },
    rules: {
      "linebreak-style": "off",
      indent: ["error", 2], // 2 пробела как в задании
      semi: ["error", "always"], // точки с запятой обязательны
      quotes: ["error", "double"], // двойные кавычки
      "no-multi-spaces": "error",
      "arrow-parens": ["error", "as-needed"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "no-trailing-spaces": "error",
      "no-tabs": "error",
      "comma-dangle": ["error", "never"],
      "brace-style": ["error", "1tbs"],
      "keyword-spacing": "error",
      eqeqeq: "error",
      camelcase: "error",
      "max-len": ["error", 100],
      "no-multiple-empty-lines": "error",
      "no-debugger": "off"
    }
  },
  js.configs.recommended,
  pluginPrettier
];
