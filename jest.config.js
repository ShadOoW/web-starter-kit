module.exports = {
  setupFilesAfterEnv: ['<rootDir>/.setup-tests.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.svg$': '<rootDir>/.jest/fileTransformer.js',
  },
  moduleDirectories: ['node_modules', 'src'],
};
