import type { Config } from "jest";
const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**", "!**/next/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  clearMocks: true,
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};

export default config;
