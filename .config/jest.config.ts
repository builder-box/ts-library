import { Config } from "@jest/types";
import { createDefaultPreset } from "ts-jest";

export default {
  verbose: true,
  rootDir: "../",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: ".coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/types/"],
  coverageReporters: ["json", "text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ["./src/**/*.ts"],
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    ...createDefaultPreset().transform,
  },
  transformIgnorePatterns: ["/node_modules/"],
  modulePathIgnorePatterns: ["fixtures"],
} as Config.InitialOptions;
