module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  verbose: true,
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    // Vee-validate package needs special attention when importing their package. Needs transpiling
    'vee-validate/dist/rules': 'babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  setupFiles: [
    '<rootDir>/jest.init.js'
  ],
  testMatch: [
    '<rootDir>/**/*.spec.(js|jsx|ts|tsx)',
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.*.{js,jsx,vue}',
    'src/**/*.{js,jsx,vue}',
    '!src/dependencies/**/*',
    '!src/components/branded-component/**/*.{js,vue}',
    '!src/components/button/**/*.{js,vue}',
    '!src/plugins/**/*.{js,vue}'
  ],
  testURL: 'http://localhost/uk/auth',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
