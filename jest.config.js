module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
  transform: {
    '^.+\\.[t]sx?$': 'ts-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)/',
  ],
};
