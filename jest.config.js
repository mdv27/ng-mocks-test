
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  coverageReporters: ['html', 'text', 'text-summary'],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: ["<rootDir>/test"], //To ignore cypress test files in unit test execution
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1"
  }
};