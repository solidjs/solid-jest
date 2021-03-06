module.exports = {
  projects: [
    {
      preset: "./preset/node/jest-preset.js",
      displayName: "node",
      testEnvironment: "node",
      testMatch: ["<rootDir>/test/server.test.jsx"]
    },
    {
      preset: "./preset/browser/jest-preset.js",
      displayName: "browser",
      testMatch: ["<rootDir>/test/browser.test.jsx"]
    }
  ]
};