module.exports = {
  roots: ['./src', './__test__'],

  collectCoverage: true,

  testPathIgnorePatterns: ['mocks'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '(/__test__/.*.(test|spec)).(jsx?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
      },
    ],
  },
  verbose: true,
};
