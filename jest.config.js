module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // roots: ['./src'],
  transformIgnorePatterns: ['/node_modules/(?!nanoid)'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  // },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^nanoid(/(.*)|$)': 'nanoid$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^core(.*)$': '<rootDir>/src/core$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^tests(.*)$': '<rootDir>/src/tests$1',
  },
  clearMocks: true,
};
