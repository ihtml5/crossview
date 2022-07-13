module.exports = {
  // 搜索文件目录的路径列表
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/__test__/*.{test,spec}.{js,jsx,mjs}'],
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '~/(.*)$': '<rootDir>/test/mocks/$1',
  },
  moduleFileExtensions: ['web.js', 'mjs', 'js', 'json', 'web.jsx', 'jsx', 'node'],
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts', 
    '!src/pages/media/*.{js,jsx}',
    '!src/components/downloader/*.{js,jsx}',
    '**/*.{js,jsx}',
  ],
};
