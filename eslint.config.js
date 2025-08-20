const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin"); // only for accessing configs/rules
const expoFlat = require("eslint-config-expo/flat");

const toArray = (x) => (Array.isArray(x) ? x : x ? [x] : []);

module.exports = [
  // Expo flat configs (may already register @typescript-eslint)
  ...toArray(expoFlat),

  // Ignores
  { ignores: ["dist/**", "build/**"] },

  // TS rules without redefining plugins
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
    // DO NOT set `plugins` here to avoid redefinition
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/typedef": [
        "warn",
        {
          variableDeclaration: true,
          arrowParameter: true,
          propertyDeclaration: true,
          parameter: true,
          memberVariableDeclaration: true,
        },
      ],
    },
  },

  // If you still want recommended sets, spread only their rules, not their plugins
  ...toArray(tsPlugin.configs.recommended).map((cfg) => ({
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
    // Strip plugins/envs/settings to avoid duplicates
    rules: cfg.rules,
  })),

  ...toArray(tsPlugin.configs["recommended-type-checked"]).map((cfg) => ({
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
    rules: cfg.rules,
  })),
];
