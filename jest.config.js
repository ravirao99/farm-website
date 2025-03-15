module.exports = {
  moduleDirectories: ["node_modules", "src"], // Allow Jest to look into node_modules and src directories
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom"
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};