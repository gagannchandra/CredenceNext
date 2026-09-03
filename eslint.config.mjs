import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Nested build output in sibling git worktrees (e.g. .claude/worktrees/*/.next)
    // isn't caught by the bare globs above, since those only match at the repo root.
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    ".claude/worktrees/**",
  ]),
]);

export default eslintConfig;
