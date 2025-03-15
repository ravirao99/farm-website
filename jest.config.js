module.exports = {
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom"
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"]
};