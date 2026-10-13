import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "lf",
  sortImports: false,
  sortTailwindcss: false,
  sortPackageJson: true,
  ignorePatterns: ["node_modules/**", "dist/**", "dist-ssr/**", "pnpm-lock.yaml"],
});
