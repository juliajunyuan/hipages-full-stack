import type { Config } from 'jest';
const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  testTimeout: 20000,
  testPathIgnorePatterns: ['./dist']
};

export default config;
