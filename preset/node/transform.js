const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    [
      "babel-preset-solid",
      {
        generate: "ssr",
        hydratable: true
      }
    ],
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          esmodules: process.env.BABEL_CJS !== undefined ? process.env.BABEL_CJS : false
        }
      }
    ]
  ]
});
