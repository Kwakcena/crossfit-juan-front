module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
}