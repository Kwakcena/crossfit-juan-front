module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: [
    'given2/setup',
    'jest-plugin-context/setup',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
  ],
}